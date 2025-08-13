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

  const handleSubmit = () => {
    openModal(email, true);
    // Clear the input immediately so when the modal closes it's reset
    setEmail("");
  };

  useEffect(() => {
    if (!vantaEffect && loaded >= 2 && vantaRef.current && (window as any).VANTA?.FOG) {
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
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy?.();
    };
  }, [loaded, vantaEffect]);

  return (
    <section className="relative w-full overflow-visible min-h-svh">
      {/* Vanta.js animated background */}
      <div ref={vantaRef} className="absolute inset-0 -z-10" />
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

      {/* Fade overlay to pure white at ~40% */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.2) 100%)",
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
          Real-time analysis of your portfolio company data, fund reports, and connected systems.
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

        {/* CTA input pill */}
        <div className="mt-8 flex w-full max-w-lg items-center justify-between rounded-full bg-white/70 p-2 pl-4 shadow-sm backdrop-blur md:mt-10 border-white border-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@fund.com"
            className="flex-1 min-w-0 bg-transparent text-sm text-[#272727] placeholder:text-[#272727]/60 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className="shrink-0 whitespace-nowrap rounded-full bg-[#7B7B7B] px-5 py-2 text-xs font-normal text-white transition-colors hover:bg-[#7B7B7B]/80"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Dashboard mock with callouts; spill into next section */}
      <div className="relative z-10 mx-auto -mb-24 mt-6 flex max-w-5xl justify-center px-6 sm:mt-8 md:mt-10">
        <div className="relative w-full">
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
