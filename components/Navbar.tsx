"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black bg-[#f6f6e9] backdrop-blur-md shadow-md`}
    >
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo-black.svg" alt="Lucid Spring" width={40} height={40} />
          <span className="ml-2 text-xl font-medium text-black font-iowan">Lucid Spring</span>
        </Link>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black text-white placeholder-white/70 rounded-full w-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A1D96]"
            />
          </div>
          <Button className="bg-[#4A1D96] text-white text-xs hover:bg-[#4A1D96]/80 rounded-full px-6 py-2 font-inter font-light">
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
