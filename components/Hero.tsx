"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-32 flex flex-row items-center justify-center h-full gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Dashboard Screenshot - 50% width */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/2 flex-shrink-0"
        >
          <div className="relative inline-block w-full">
            <Image
              src="/hero-dashboard.png"
              alt="Palace Dashboard"
              width={700}
              height={490}
              className="block w-full h-auto"
              priority
            />

            {/* Corner gradient fills */}
            {/* Top left gradient - fills bottom right section */}
            <div
              className="absolute hidden sm:block"
              style={{
                top: "-74px",
                left: "-74px",
                width: "74px",
                height: "74px",
                background:
                  "linear-gradient(to top left, rgba(255, 255, 255, 0.6) 0%, rgba(141, 150, 241, 0.3) 25%, transparent 40%)",
              }}
            />

            {/* Top right gradient - fills bottom left section */}
            <div
              className="absolute hidden sm:block"
              style={{
                top: "-36px",
                right: "-36px",
                width: "36px",
                height: "36px",
                background:
                  "linear-gradient(to top right, rgba(255, 255, 255, 0.6) 0%, rgba(141, 150, 241, 0.3) 25%, transparent 40%)",
              }}
            />

            {/* Bottom left gradient - fills top right section */}
            <div
              className="absolute hidden sm:block"
              style={{
                bottom: "-38px",
                left: "-38px",
                width: "38px",
                height: "38px",
                background:
                  "linear-gradient(to bottom left, rgba(255, 255, 255, 0.6) 0%, rgba(141, 150, 241, 0.3) 25%, transparent 50%)",
              }}
            />

            {/* Bottom right gradient - fills top left section */}
            <div
              className="absolute hidden sm:block"
              style={{
                bottom: "-92px",
                right: "-92px",
                width: "92px",
                height: "92px",
                background:
                  "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(141, 150, 241, 0.4) 16%, transparent 50%)",
              }}
            />

            {/* Corner lines */}
            {/* Top left - horizontal line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                top: "0",
                left: "-92px",
                width: "92px",
                height: "1px",
              }}
            />
            {/* Top left - vertical line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                top: "-74px",
                left: "0",
                width: "1px",
                height: "74px",
              }}
            />

            {/* Top right - horizontal line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                top: "0",
                right: "-36px",
                width: "36px",
                height: "1px",
              }}
            />
            {/* Top right - vertical line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                top: "-58px",
                right: "0",
                width: "1px",
                height: "58px",
              }}
            />

            {/* Bottom left - horizontal line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                bottom: "0",
                left: "-38px",
                width: "38px",
                height: "1px",
              }}
            />
            {/* Bottom left - vertical line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                bottom: "-111px",
                left: "0",
                width: "1px",
                height: "111px",
              }}
            />

            {/* Bottom right - horizontal line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                bottom: "0",
                right: "-183px",
                width: "183px",
                height: "1px",
              }}
            />
            {/* Bottom right - vertical line */}
            <div
              className="absolute bg-[#8D96F1] hidden sm:block"
              style={{
                bottom: "-92px",
                right: "0",
                width: "1px",
                height: "92px",
              }}
            />
          </div>
        </motion.div>

        {/* Text Content - 50% width */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="w-1/2 text-left"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
            Build your data palace
          </h1>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 mb-4 sm:mb-6 lg:mb-10">
            A second brain for private market investors
          </h3>

          <div className="flex flex-col gap-3 sm:gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-white/90 transition-all shadow-lg text-sm sm:text-base"
            >
              Request a demo
            </button>

            <p className="text-white/70 text-xs sm:text-sm">
              Track what you&apos;ve seen.
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
