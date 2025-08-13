"use client";

export default function BottomCTA() {
  return (
    <section className="relative bg-[#272727] text-white pt-100 sm:pt-64 md:pt-100 pb-8 sm:pb-12 px-6">
      {/* Decorative oversized brand text in bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-0 sm:left-2 bottom-0 z-0 hidden sm:block"
      >
        <span className="font-playfair leading-none text-white text-[20vw] md:text-[18vw]">
          Palace
        </span>
      </div>
    </section>
  );
}
