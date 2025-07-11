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

  const staggeredFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.15 },
    }),
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 space-y-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-start mb-16 space-y-8"
        >
          <h2 className="text-4xl font-playfair text-black text-center">
            Trusted by Private Equity teams{" "}
            <span className="text-[#B57EDC]">managing a collective 85B+</span>
          </h2>
          <p className="text-center text-gray-600 font-light text-xl">
            Here&apos;s what people are saying
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            custom={1}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggeredFadeIn}
            className="py-8 px-16 flex flex-col"
          >
            <div className="flex-1">
              <p className="text-xl font-normal leading-relaxed text-black mb-6">
                &ldquo;[Palace] directly helps our firm save our investors time build the critical
                mass of information necessary for us to be comfortable going to our investment
                committee&rdquo;
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-black font-medium italic">-investor, 10B+ AUM fund</p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggeredFadeIn}
            className="py-8 px-16 flex flex-col"
          >
            <div className="flex-1">
              <p className="text-xl font-normal leading-relaxed text-black mb-6">
                &ldquo;There is so much value in having the best contacts and every reputable page
                related to a deal .. I didn&apos;t appreciate how much I was missing&rdquo;
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-black font-medium italic">- investor, 2B+ AUM fund</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
