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
    <section className="bg-[#f6f6e9] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-start mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-black mb-2">
            Trusted by Private Equity teams{" "}
            <span className="text-[#B57EDC]">managing a collective 85B+</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white/50 p-8 rounded-lg shadow-sm"
          >
            <p className="text-black text-lg mb-6 font-light leading-relaxed">
              &ldquo;[Lucid Spring] directly helps our firm
              <br />
              save our investors time
              <br />
              build the critical mass of information necessary for us to be comfortable going to our
              investment committee&rdquo;
            </p>
            <p className="text-black/70 italic">- investor, 10B+ AUM fund</p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white/50 p-8 rounded-lg shadow-sm"
          >
            <p className="text-black text-lg mb-6 font-light leading-relaxed">
              &ldquo;There is so much value in having the best contacts and every reputable page
              related to a deal .. I didn&rsquo;t appreciate how much I was missing&rdquo;
            </p>
            <p className="text-black/70 italic">- investor, 2B+ AUM fund</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
