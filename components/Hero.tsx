"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FloatingSquares from "./FloatingSquares";
import DemoModal from "./DemoModal";

interface HeroProps {
  isVisible: boolean;
  fadeIn: Variants;
}

export default function Hero({ isVisible, fadeIn }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Linear gradient background with exact colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5465FF] to-[#503AF3]" />

      {/* Animated floating squares background */}
      <FloatingSquares />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-12 items-center h-full">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5" />{" "}
        {/* Space for floating shapes */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-11 sm:col-span-10 md:col-span-9 lg:col-span-8 xl:col-span-7 text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-3 tracking-tight whitespace-nowrap">
            Build your data palace
          </h1>

          <h3 className="text-2xl md:tex-3xl font-normal text-white/80 mb-10">
            A second brain for private market investors
          </h3>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all shadow-lg"
            >
              Request a demo
            </button>

            <p className="text-white/70 text-sm">
              Track what you've seen.
              <br />
              Understand what you own.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>

      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
