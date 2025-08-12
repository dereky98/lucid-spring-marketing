"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SimplifiedReporting() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 md:grid-cols-2 md:gap-14">
        {/* Left visual */}
        <motion.div
          className="relative order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 -z-10 rounded-2xl" />
          <div className="rounded-3xl p-2">
            <Image
              src="/simplified-reporting.png"
              alt="Simplified reporting mock"
              width={780}
              height={620}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Right copy */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-playfair text-3xl leading-snug text-[#272727] sm:text-4xl">
            Simplified Reporting
          </h2>
          <div className="mt-4 h-px w-64 bg-black/20" />
          <ul className="mt-6 space-y-6 text-sm text-[#272727]/85 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Automate reminders:</span> proactively request
                portcos for required reporting.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">In the loop:</span> Dashboards are updated via live
                integrations, allowing you real-time insight into data.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Fully customizable:</span> Use templated solutions
                or build bepoke dashboards per company.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
