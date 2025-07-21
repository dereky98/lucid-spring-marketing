"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "No training on your data",
  "Modern and secure data practices",
  "End to end encryption",
  "Audited and tested (SOC-2)",
];

const securityBadges = [
  { 
    src: "/database.png", 
    alt: "Database",
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
    corners: {
      topLeft: { h: 8, v: 12 },
      topRight: { h: 20, v: 28 },
      bottomLeft: { h: 10, v: 15 },
      bottomRight: { h: 44, v: 20 },
    },
  },
  { 
    src: "/aicpa-soc2.png", 
    alt: "AICPA SOC 2",
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
    <section id="security" className="relative py-28 px-8 bg-[#EFF1F2]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-2 leading-tight">
              Built for scale. Designed for trust. <br />
              Palace is audited and certified by industry-leading third party standards.
            </h2>

            {/* Bullet points */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Security badges grid on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {securityBadges.map((badge, index) => (
              <div key={index} className="relative">
                <div
                  className="p-12 flex items-center justify-center border-[1.5px] border-[#B3C0C8]"
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
                      height: "1.5px",
                    }}
                  />
                  {/* Top left - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: `-${badge.corners.topLeft.v}px`,
                      left: "0",
                      width: "1.5px",
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
                      height: "1.5px",
                    }}
                  />
                  {/* Top right - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      top: `-${badge.corners.topRight.v}px`,
                      right: "0",
                      width: "1.5px",
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
                      height: "1.5px",
                    }}
                  />
                  {/* Bottom left - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: `-${badge.corners.bottomLeft.v}px`,
                      left: "0",
                      width: "1.5px",
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
                      height: "1.5px",
                    }}
                  />
                  {/* Bottom right - vertical */}
                  <div
                    className="absolute bg-[#B3C0C8]"
                    style={{
                      bottom: `-${badge.corners.bottomRight.v}px`,
                      right: "0",
                      width: "1.5px",
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
                    className="w-20 h-20 object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(58%) sepia(8%) saturate(191%) hue-rotate(172deg) brightness(94%) contrast(88%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}