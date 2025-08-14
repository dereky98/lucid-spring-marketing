"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.95;
      setIsScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 pt-6">
      <div className="mx-auto w-full max-w-lg">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-colors ${
            isScrolled ? "bg-white shadow-md" : "bg-[#D5DFE573]/60 backdrop-blur"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-sm text-[#272727]">
            <Image src="/palace-logo.svg" alt="Palace logo" width={19} height={25} />
            Palace
          </Link>

          <a
            href="https://calendly.com/d/csdc-bnm-6qb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#282828] px-4 py-2 text-xs font-normal text-white shadow hover:bg-[#282828]/90"
          >
            Request a demo
          </a>
        </div>
      </div>
    </header>
  );
}
