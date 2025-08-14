"use client";

import { useWaitlist } from "@/context/WaitlistContext";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { openModal } = useWaitlist();
  const [email, setEmail] = useState("");
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [loaded, setLoaded] = useState(0);
  const [initError, setInitError] = useState<string | null>(null);
  const [vantaReady, setVantaReady] = useState(false);

  // Basic WebGL support check to avoid crashes on some mobile browsers
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) &&
        typeof (window as any).WebGLRenderingContext !== "undefined"
      );
    } catch {
      return false;
    }
  }

  const handleSubmit = () => {
    openModal(email, true);
    // Clear the input immediately so when the modal closes it's reset
    setEmail("");
  };

  useEffect(() => {
    // Skip on reduced motion or if WebGL not available
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      !vantaEffect &&
      loaded >= 2 &&
      vantaRef.current &&
      (window as any).VANTA?.FOG &&
      !prefersReducedMotion &&
      isWebGLAvailable()
    ) {
      try {
        const effect = (window as any).VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x5dafe8,
          midtoneColor: 0xb6dcb8,
          lowlightColor: 0xa4d5f2,
          baseColor: 0x0099bb,
          blurFactor: 0.52,
          speed: 2.5,
          zoom: 1.5,
        });
        setVantaEffect(effect);
        // Mark ready after Vanta attaches and renders at least one frame
        requestAnimationFrame(() => {
          // Heuristic: presence of a canvas means renderer attached
          const hasCanvas = !!vantaRef.current?.querySelector("canvas");
          if (hasCanvas) setVantaReady(true);
          else setTimeout(() => setVantaReady(true), 300);
        });
      } catch (e: any) {
        console.error("Vanta init error", e);
        setInitError(e?.message || "Vanta init error");
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy?.();
      setVantaReady(false);
    };
  }, [loaded, vantaEffect]);

  return (
    <section className="relative w-full overflow-visible min-h-svh">
      {/* Static fallback background (visible until Vanta attaches or on failure) */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <Image
          src="/hero-background.png"
          alt="Background"
          fill
          sizes="100vw"
          priority
          className={`object-cover object-center transition-opacity duration-500 ${
            vantaReady ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* Vanta.js animated background - clipped to viewport height */}
      <div
        ref={vantaRef}
        className="absolute inset-0 -z-10 overflow-hidden"
        style={
          initError
            ? { background: "linear-gradient(180deg, #ffffff 0%, #ffffff 40%, #eaf4fb 100%)" }
            : undefined
        }
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded((c) => c + 1)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded((c) => c + 1)}
      />

      {/* Single overlay: white top then transparent; ensure clouds end at fold */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 22%, rgba(255,255,255,0) 65%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-36 pb-12 text-center sm:pt-44 md:pt-48">
        <h1 className="font-playfair text-4xl leading-tight text-[#272727] sm:text-5xl md:text-6xl">
          <span className="font-thin">Your fund’s</span>{" "}
          <span className="font-semibold">second brain</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-[#272727]/80 sm:text-base">
          One platform for investment monitoring & reporting.
        </p>
        <p className="mt-1 max-w-3xl text-sm text-[#272727]/80 sm:text-base">
          Get smarter from the data you already collect.
        </p>

        {/* YC badge */}
        <div className="mt-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-black bg-white/20">
            <span className="text-xs sm:text-sm">Backed by</span>
            <Image
              src="/yc-logo.png"
              alt="Y Combinator"
              width={18}
              height={18}
              className="rounded-[4px]"
            />
            <span className="text-xs sm:text-sm font-normal">Combinator</span>
          </div>
        </div>
      </div>

      {/* Dashboard mock with callouts; spill into next section */}
      <div className="relative z-10 mx-auto -mb-24 mt-6 flex max-w-7xl justify-center px-6 sm:mt-8 md:mt-10">
        <div className="relative w-full sm:translate-x-0 md:translate-x-6">
          <Image
            src="/hero-dashboard.png"
            alt="Palace dashboard"
            width={1200}
            height={720}
            priority
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
