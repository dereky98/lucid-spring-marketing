"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamInSync() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 md:grid-cols-2 md:gap-14">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-playfair text-3xl leading-snug text-[#272727] sm:text-4xl">
            Keep your team in sync
          </h2>
          <div className="mt-6 h-px w-72 bg-black/20" />
          <ul className="mt-6 space-y-6 text-sm text-[#272727]/85 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Admin tool sync:</span> automatically track emails
                and meetings
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Store anything:</span> Easily search any documents
                from CIMs to diligence memos
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 items-center">→</span>
              <p className="leading-7">
                <span className="font-semibold">Tailored notifications:</span> set notifications for
                exactly what you want to see
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
          <div className="absolute inset-0 -z-10 rounded-2xl" />
          <div className="rounded-3xl p-2">
            <Image
              src="/team-in-sync.png"
              alt="Team in sync mock"
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
