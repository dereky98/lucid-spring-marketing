"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SingleFeature() {
  return (
    <section
      id="product"
      className="relative min-h-screen flex items-center px-8 py-32 bg-[#EFF1F2]"
    >
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto w-full px-4 sm:px-6 md:px-8">
        {/* Dashboard Image with parallelogram background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-2 overflow-visible w-full"
        >
          <div className="relative overflow-visible w-full">
            {/* Dashboard screenshot */}
            <div className="relative z-10 bg-white w-full">
              <Image
                src="/fund-memory.png"
                alt="Dashboard showing portfolio data"
                width={900}
                height={600}
                className="w-full h-auto block border-[1px] border-[#B3C0C8]"
              />

              {/* Bottom left gradient - fills top right section */}
              <div
                className="absolute hidden sm:block"
                style={{
                  bottom: "-100px",
                  left: "-100px",
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(to bottom left, rgba(213, 223, 229, 0.6) 0%, rgba(213, 223, 229, 0.4) 20%, rgba(213, 223, 229, 0.2) 30%, transparent 50%)",
                }}
              />

              {/* Corner lines */}
              {/* Top left - horizontal line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  top: "0",
                  left: "-26px",
                  width: "26px",
                  height: "1px",
                }}
              />
              {/* Top left - vertical line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  top: "-28px",
                  left: "0",
                  width: "1px",
                  height: "28px",
                }}
              />

              {/* Top right - horizontal line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  top: "0",
                  right: "-32px",
                  width: "32px",
                  height: "1px",
                }}
              />
              {/* Top right - vertical line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  top: "-22px",
                  right: "0",
                  width: "1px",
                  height: "22px",
                }}
              />

              {/* Bottom left - horizontal line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  bottom: "0",
                  left: "-100px",
                  width: "100px",
                  height: "1px",
                }}
              />
              {/* Bottom left - vertical line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  bottom: "-125px",
                  left: "0",
                  width: "1px",
                  height: "125px",
                }}
              />

              {/* Bottom right - horizontal line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  bottom: "0",
                  right: "-30px",
                  width: "30px",
                  height: "1px",
                }}
              />
              {/* Bottom right - vertical line */}
              <div
                className="absolute bg-[#B3C0C8] hidden sm:block"
                style={{
                  bottom: "-24px",
                  right: "0",
                  width: "1px",
                  height: "24px",
                }}
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
          className="max-w-full sm:max-w-lg pl-0 sm:pl-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-4 leading-tight">
            Capture your fund's memory
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-tight font-light">
            Track every company in your portfolio with a system tailored to you. Compare growth,
            margins, headcount, and much more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
