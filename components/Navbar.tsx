"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change color when scrolled past the hero section (approximately viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.95);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoColor = isScrolled ? "text-black" : "text-white";
  const navLinkHoverColor = isScrolled ? "hover:text-gray-500" : "hover:text-white";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8 px-8">
      <div className="bg-[#D5DFE573]/45 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between max-w-2xl mx-auto">
        {/* Left side - Logo */}
        <Link
          href="/"
          className={`${logoColor} text-lg font-medium transition-colors duration-300`}
        >
          Palace
        </Link>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/product"
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md`}
          >
            Product
          </Link>
          <Link
            href="/capabilities"
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md`}
          >
            Capabilities
          </Link>
          <Link
            href="/about"
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md`}
          >
            About
          </Link>
        </nav>

        {/* Right side - CTA Button */}
        <Button className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-6 py-2 text-md font-medium">
          Request a demo
        </Button>
      </div>
    </header>
  );
}
