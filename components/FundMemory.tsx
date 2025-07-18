"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SingleFeature() {
  return (
    <section id="product" className="relative min-h-screen flex items-center px-8 py-32 overflow-hidden bg-[#EFF1F2]">
      <div className="max-w-5xl mx-auto w-full">
        {/* Dashboard Image with parallelogram background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-6"
        >
          <div className="relative">
            {/* Blue parallelogram decoration on bottom right */}
            <div
              className="absolute bottom-0 right-0 w-64 h-86 bg-[#5465FF] z-0"
              style={{
                transform: "translate(20%, 20%) skewY(-15deg)",
                borderRadius: "20px",
              }}
            />

            {/* Dashboard screenshot */}
            <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden bg-white">
              <Image
                src="/dashboard-source-open.png"
                alt="Dashboard showing portfolio data"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content - bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Capture your fund's memory
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Track every company in your portfolio with a system tailored to you. Compare growth,
            margins, headcount, and much more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
