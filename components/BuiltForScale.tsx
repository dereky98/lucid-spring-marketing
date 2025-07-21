"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "No training on your data",
  "Enterprise-grade data protection",
  "End to end encryption",
  "Audited and tested (SOC-2)",
];

const securityBadges = [
  {
    src: "/database.png",
    alt: "Database",
    label: "No training on user data",
    corners: {
      topLeft: { h: 70, v: 20 },
      topRight: { h: 10, v: 20 },
      bottomLeft: { h: 42, v: 18 },
      bottomRight: { h: 8, v: 12 },
    },
  },
  {
    src: "/california.png",
    alt: "California",
    label: "CCPA",
    corners: {
      topLeft: { h: 8, v: 12 },
      topRight: { h: 20, v: 28 },
      bottomLeft: { h: 10, v: 15 },
      bottomRight: { h: 44, v: 20 },
    },
  },
  {
    src: "/aicpa-soc2.svg",
    alt: "AICPA SOC 2",
    label: "SOC-2",
    corners: {
      topLeft: { h: 0, v: 16 },
      topRight: { h: 10, v: 14 },
      bottomLeft: { h: 46, v: 48 },
      bottomRight: { h: 10, v: 32 },
    },
  },
  {
    src: "/star-circle.png",
    alt: "GDPR Compliance",
    label: "GDPR",
    corners: {
      topLeft: { h: 10, v: 15 },
      topRight: { h: 24, v: 18 },
      bottomLeft: { h: 15, v: 48 },
      bottomRight: { h: 38, v: 38 },
    },
  },
];

export default function BuiltForScale() {
  return (
    <section id="security" className="relative py-32 px-8 bg-[#EFF1F2]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Text content on the left - 50% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-1/2"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-1 sm:mb-2 leading-tight">
              Built for scale. Designed for trust. <br />
            </h2>
            <h3 className="text-sm sm:text-md md:text-lg font-light text-gray-700 mb-2 sm:mb-4 leading-tight">
              Palace is audited and certified by industry-leading <br />
              third party standards.
            </h3>

            {/* Bullet points with icons */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="text-[#5361FD] mr-3 flex-shrink-0">
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
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Security badges grid on the right - 50% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/2 grid grid-cols-2 gap-4"
          >
            {securityBadges.map((badge, index) => (
              <div key={index} className="relative">
                <div
                  className="p-4 sm:p-8 md:p-12 flex items-center justify-center border-[1px] border-[#B3C0C8]"
                  style={{ backgroundColor: "#5361FD26" }}
                >
                  {/* Corner lines for each square */}
                  {/* Top left - horizontal */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: "0",
                      left: `-${badge.corners.topLeft.h}px`,
                      width: `${badge.corners.topLeft.h}px`,
                      height: "1px",
                    }}
                  />
                  {/* Top left - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: `-${badge.corners.topLeft.v}px`,
                      left: "0",
                      width: "1px",
                      height: `${badge.corners.topLeft.v}px`,
                    }}
                  />
                  {/* Top right - horizontal */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: "0",
                      right: `-${badge.corners.topRight.h}px`,
                      width: `${badge.corners.topRight.h}px`,
                      height: "1px",
                    }}
                  />
                  {/* Top right - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: `-${badge.corners.topRight.v}px`,
                      right: "0",
                      width: "1px",
                      height: `${badge.corners.topRight.v}px`,
                    }}
                  />
                  {/* Bottom left - horizontal */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: "0",
                      left: `-${badge.corners.bottomLeft.h}px`,
                      width: `${badge.corners.bottomLeft.h}px`,
                      height: "1px",
                    }}
                  />
                  {/* Bottom left - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: `-${badge.corners.bottomLeft.v}px`,
                      left: "0",
                      width: "1px",
                      height: `${badge.corners.bottomLeft.v}px`,
                    }}
                  />
                  {/* Bottom right - horizontal */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: "0",
                      right: `-${badge.corners.bottomRight.h}px`,
                      width: `${badge.corners.bottomRight.h}px`,
                      height: "1px",
                    }}
                  />
                  {/* Bottom right - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: `-${badge.corners.bottomRight.v}px`,
                      right: "0",
                      width: "1px",
                      height: `${badge.corners.bottomRight.v}px`,
                    }}
                  />

                  {/* Gradients for specific corners */}
                  {/* Database - bottom left gradient */}
                  {index === 0 && (
                    <div
                      className="absolute"
                      style={{
                        bottom: `-${badge.corners.bottomLeft.v}px`,
                        left: `-${badge.corners.bottomLeft.h}px`,
                        width: `${badge.corners.bottomLeft.h}px`,
                        height: `${badge.corners.bottomLeft.v}px`,
                        background:
                          "linear-gradient(to bottom left, rgba(213, 223, 229, 0.9) 0%, rgba(213, 223, 229, 0.7) 20%, rgba(213, 223, 229, 0.5) 40%, rgba(213, 223, 229, 0.3) 60%, transparent 80%)",
                      }}
                    />
                  )}

                  {/* California - top right gradient */}
                  {index === 1 && (
                    <div
                      className="absolute"
                      style={{
                        top: `-${badge.corners.topRight.v}px`,
                        right: `-${badge.corners.topRight.h}px`,
                        width: `${badge.corners.topRight.h}px`,
                        height: `${badge.corners.topRight.v}px`,
                        background:
                          "linear-gradient(to top right, rgba(213, 223, 229, 0.6) 0%, rgba(213, 223, 229, 0.4) 20%, rgba(213, 223, 229, 0.2) 30%, transparent 50%)",
                      }}
                    />
                  )}

                  {/* Star circle - bottom right gradient */}
                  {index === 3 && (
                    <div
                      className="absolute"
                      style={{
                        bottom: `-${badge.corners.bottomRight.v}px`,
                        right: `-${badge.corners.bottomRight.h}px`,
                        width: `${badge.corners.bottomRight.h}px`,
                        height: `${badge.corners.bottomRight.v}px`,
                        background:
                          "linear-gradient(to bottom right, rgba(213, 223, 229, 0.6) 0%, rgba(213, 223, 229, 0.4) 20%, rgba(213, 223, 229, 0.2) 30%, transparent 50%)",
                      }}
                    />
                  )}

                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                    style={{
                      filter: badge.src.endsWith(".svg")
                        ? "none"
                        : "brightness(0) saturate(100%) invert(58%) sepia(8%) saturate(191%) hue-rotate(172deg) brightness(94%) contrast(88%)",
                    }}
                  />

                  {/* Helper text at bottom left */}
                  <span className="absolute bottom-3 left-3 text-xs text-gray-500 font-normal">
                    {badge.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
