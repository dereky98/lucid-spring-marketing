"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "No training on your data",
  "Enterprise-grade data protection",
  "End to end encryption",
  "Audited and tested (SOC-2)",
];

// Using a single composite graphic for the right-hand visual

export default function BuiltForScale() {
  return (
    <section id="security" className="relative bg-[#EEEEEE] py-32 px-8">
      {/* Shadow only below the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-[1px] h-0 shadow-[0_1px_4px_1px_#0000002B]"></div>
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left visual: composite security icons image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-full order-1"
          >
            <div className="relative">
              <Image
                src="/security-icons.png"
                alt="Security certifications"
                width={940}
                height={780}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Text content on the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-full order-2"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#272727] leading-tight">
              Built for scale. Designed for trust.
            </h2>
            <div className="mt-6 h-px w-72 bg-black/20" />

            {/* Bullet points with icons */}
            <ul className="mt-6 space-y-6 text-sm sm:text-base">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-7 items-center">→</span>
                  <p className="leading-7 text-[#272727]/85">{feature}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
