// Testimonials.tsx
"use client";

import { motion } from "framer-motion";

interface TestimonialsProps {
  isVisible?: boolean;
}

export default function Testimonials({ isVisible = true }: TestimonialsProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-start"
        >
          <h2 className="text-4xl font-playfair text-black mb-2">
            Trusted by Private Equity teams{" "}
            <span className="text-[#B57EDC]">managing a collective 85B+</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
      </div>
    </section>
  );
}
