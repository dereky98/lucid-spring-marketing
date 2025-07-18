"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignedToScale() {
  return (
    <section className="relative py-48 px-8 bg-[#EFF1F2]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Blue parallelogram decoration on top left */}
              <div
                className="absolute -top-6 left-12 w-52 h-[360px] bg-[#5465FF] z-0"
                style={{
                  transform: "skewY(-40deg)",
                  borderRadius: "24px",
                }}
              />

              {/* Team collaboration image */}
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/designed-to-scale-with-team.png"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Designed to scale with your team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each team member that you add to your palace will be able to leverage all the past
              reporting and dynamically update as new investments are made and new content is
              uploaded
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
