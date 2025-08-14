"use client";

export default function BottomCTA() {
  return (
    <section className="relative bg-[#272727] text-white pt-20 sm:pt-56 md:pt-100 pb-8 sm:pb-12 px-6">
      {/* Decorative oversized brand text in bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 sm:left-2 -translate-x-1/2 sm:translate-x-0 bottom-2 z-0"
      >
        <span className="font-playfair leading-none text-white text-[12vw] sm:text-[14vw] md:text-[16vw]">
          Palace
        </span>
      </div>
    </section>
  );
}
