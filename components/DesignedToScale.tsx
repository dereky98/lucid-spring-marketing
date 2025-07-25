"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignedToScale() {
  return (
    <section className="relative py-32 px-8 bg-[#EFF1F2]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 items-center overflow-visible">
          {/* Image on the left - 50% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-1/2 relative overflow-visible"
          >
            <div className="relative overflow-visible">
              {/* Team collaboration image */}
              <div className="relative z-10 inline-block">
                <Image
                  src="/designed-to-scale-with-team.png"
                  alt="Team collaboration"
                  width={400}
                  height={267}
                  className="w-full h-auto block border-[1px] border-[#B3C0C8]"
                />

                {/* Corner lines */}
                {/* Top left - horizontal line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    top: "0",
                    left: "-46px",
                    width: "46px",
                    height: "1px",
                  }}
                />
                {/* Top left - vertical line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    top: "-20px",
                    left: "0",
                    width: "1px",
                    height: "20px",
                  }}
                />

                {/* Top right - horizontal line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    top: "0",
                    right: "-25px",
                    width: "25px",
                    height: "1px",
                  }}
                />
                {/* Top right - vertical line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    top: "-35px",
                    right: "0",
                    width: "1px",
                    height: "35px",
                  }}
                />

                {/* Bottom left - horizontal line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    bottom: "0",
                    left: "-45px",
                    width: "45px",
                    height: "1px",
                  }}
                />
                {/* Bottom left - vertical line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    bottom: "-60px",
                    left: "0",
                    width: "1px",
                    height: "60px",
                  }}
                />

                {/* Bottom right - horizontal line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    bottom: "0",
                    right: "-20px",
                    width: "20px",
                    height: "1px",
                  }}
                />
                {/* Bottom right - vertical line */}
                <div
                  className="absolute bg-[#B3C0C8] hidden sm:block"
                  style={{
                    bottom: "-22px",
                    right: "0",
                    width: "1px",
                    height: "22px",
                  }}
                />

                {/* Bottom left gradient - fills top right section */}
                <div
                  className="absolute hidden sm:block"
                  style={{
                    bottom: "-60px",
                    left: "-45px",
                    width: "45px",
                    height: "60px",
                    background:
                      "linear-gradient(to bottom left, rgba(213, 223, 229, 0.6) 0%, rgba(213, 223, 229, 0.4) 20%, rgba(213, 223, 229, 0.2) 30%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text content on the right - 50% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/2"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-4 leading-tight">
              Designed to scale with your team
            </h2>
            <p className="text-sm sm:text-md text-gray-700 leading-tight font-light">
              Give your team instant access to the insights they need. Assign role-based permissions
              for all historical and active reporting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
