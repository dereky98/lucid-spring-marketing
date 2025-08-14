"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Integrations() {
  return (
    <section className="relative w-full bg-white py-24 sm:mb-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title + copy on left half, image overlaps upward */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl leading-snug text-[#272727]">
                20+ Integrations
              </h2>
              <div className="mt-8 h-px w-full bg-[#272727]" />
              <p className="mt-8 text-sm text-[#272727]/85 sm:text-base">
                Your Palace can link to a portfolio investment’s entire stack and is built to funnel
                data into a team-wide resource.
              </p>
            </div>
            <div className="hidden md:block" />
          </div>

          <div className="relative mt-12 sm:-mt-4 md:-mt-8 lg:-mt-12">
            <Image
              src="/integrations-without-text.png"
              alt="Integrations"
              width={1400}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
