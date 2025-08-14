"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioAnalysis() {
  return (
    <section className="relative z-0 w-full bg-white pt-36 sm:pt-44 md:pt-52">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 px-6 py-20 sm:py-24 md:grid-cols-2 md:gap-18">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-playfair text-3xl leading-snug text-[#272727] sm:text-4xl">
            Portfolio Analysis
          </h2>
          <div className="mt-8 w-full border-t border-[#272727]" />
          <ul className="mt-8 space-y-6 text-sm text-[#272727]/85 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Flexible:</span> Pull key metrics from structured
                files (CSV, Excel, Tableau) or unstructured formats (board decks, monthly reports,
                PDFs).
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Intelligent checking:</span> Automatically compare
                new data to historical trends, flag discrepancies, and request fixes.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Exportable:</span> One click to get data in Excel
                for deeper financial analysis.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 -z-10 rounded-3xl" />
          <div className="rounded-3xl p-2">
            <Image
              src="/portfolio-analysis.png"
              alt="Portfolio Analysis mock"
              width={780}
              height={620}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
