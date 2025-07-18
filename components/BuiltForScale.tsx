"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  "No training on your data",
  "Modern and secure data practices",
  "End to end encryption",
  "Audited and tested (SOC-2)",
];

export default function BuiltForScale() {
  return (
    <section id="security" className="relative py-48 px-8 bg-[#EFF1F2]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text content on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 leading-tight">
              Built for scale. Designed for trust.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Palace is audited and certified by industry-leading third party standards
            </p>

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
            {/* Database icon */}
            <div className="bg-[#5465FF] rounded-2xl p-12 flex items-center justify-center">
              <Image
                src="/database.png"
                alt="Database"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* California icon */}
            <div className="bg-[#5465FF] rounded-2xl p-12 flex items-center justify-center">
              <Image
                src="/california.png"
                alt="California"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* SOC 2 badge */}
            <div className="bg-[#5465FF] rounded-2xl p-12 flex items-center justify-center">
              <Image
                src="/aicpa-soc2.png"
                alt="AICPA SOC 2"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* EU/GDPR stars */}
            <div className="bg-[#5465FF] rounded-2xl p-12 flex items-center justify-center">
              <Image
                src="/star-circle.png"
                alt="GDPR Compliance"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
