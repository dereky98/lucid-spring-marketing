"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import DemoModal from "./DemoModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            onClick={() => scrollToSection("product")}
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md cursor-pointer`}
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("capabilities")}
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md cursor-pointer`}
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection("security")}
            className={`text-[#272727] ${navLinkHoverColor} transition-colors text-md cursor-pointer`}
          >
            Security
          </button>
        </nav>

        {/* Right side - CTA Button */}
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-6 py-2 text-md font-medium"
        >
          Request a demo
        </Button>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
