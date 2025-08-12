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
    <section id="security" className="relative py-32 px-8 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content on the left - 50% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-full"
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
                  <span className="text-[#5361FD] flex h-7 items-center">
                    {index === 0 && (
                      // Shield icon for "No training on your data"
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5zm0 10h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.3l7-4.35v8.05z" />
                      </svg>
                    )}
                    {index === 1 && (
                      // Lock icon for "Enterprise-grade data protection"
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                    )}
                    {index === 2 && (
                      // Key icon for "End to end encryption"
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      </svg>
                    )}
                    {index === 3 && (
                      // Check circle icon for "Audited and tested (SOC-2)"
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </span>
                  <p className="leading-7 text-[#272727]/85">{feature}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right visual: composite security icons image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-full"
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
        </div>
      </div>
    </section>
  );
}
