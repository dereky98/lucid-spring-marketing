"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Integrations() {
  return (
    <section className="relative py-48 px-8 bg-[#EFF1F2]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Integrations
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your palace can link to your entire stack and is built to funnel quality information
              into a team wide resource that can serve as the single source of truth
            </p>
          </motion.div>

          {/* Dashboard image on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/dashboard-integrations.png"
              alt="Dashboard showing integrations"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
