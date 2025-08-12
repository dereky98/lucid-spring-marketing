"use client";

import { useWaitlist } from "@/context/WaitlistContext";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const { openModal } = useWaitlist();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    openModal(email);
  };

  return (
    <section className="relative w-full overflow-visible min-h-screen">
      {/* Single clouds background that spans full width */}
      <Image
        src="/hero-background.png"
        alt="Sky background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-36 pb-12 text-center sm:pt-44 md:pt-48">
        <h1 className="font-playfair text-4xl leading-tight text-[#272727] sm:text-5xl md:text-6xl">
          Qualify better deals, <span className="italic">faster</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-[#272727]/80 sm:text-base">
          A deal origination platform purpose-built for private markets investing. Deal
          intelligence, Relationship intelligence, Market intelligence.
        </p>

        {/* CTA input pill */}
        <div className="mt-8 flex w-full max-w-lg items-center justify-between rounded-full bg-white/70 p-2 pl-4 shadow-sm backdrop-blur md:mt-10 border-white border-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="See an example workspace"
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
      <div className="relative z-10 mx-auto -mb-20 mt-6 flex max-w-5xl justify-center px-6 sm:mt-8 sm:-mb-24 md:mt-10 md:-mb-32 lg:-mb-40">
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
