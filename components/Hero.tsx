"use client";

import { useWaitlist } from "@/context/WaitlistContext";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  isVisible: boolean;
  fadeIn: Variants;
}

export default function Hero({ isVisible, fadeIn }: HeroProps) {
  const { openModal } = useWaitlist();

  const fullText = "The Operating System for Private Market Investors.";
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      setTypedText("");
      setTypingComplete(false);
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible, fullText]);

  return (
    <div className="bg-[#0A0C1B] h-screen w-full flex items-center justify-center">
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#0A0C1B",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero-background.png')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="bg-black/30 w-full h-full absolute"></div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center px-4 relative z-10"
        >
          <h1 className="text-4xl font-playfair font-light text-white leading-tight min-h-[2em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: typingComplete ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 py-2.5 bg-white text-[#0A0C1B] text-lg rounded-md font-normal hover:bg-white/80 transition-colors"
            onClick={() => openModal()}
          >
            Join Waitlist
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
