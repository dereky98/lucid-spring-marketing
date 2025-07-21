"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Unify fragmented documents",
    description:
      "No more one-off models or buried KPIs. Our platform pulls key data from any format and organizes it for you.",
    image: "/unify-fragmented-documents.png",
  },
  {
    title: "Dynamically update reports",
    description:
      "Generate rollup views without rebuilding spreadsheets. Have the reports update in real time as you collect data.",
    image: "/dynamically-updating-reports.png",
  },
  {
    title: "Automate portfolio alerts",
    description:
      "Track the metrics that matter. Be the first to know when a number shifts or a risk appears.",
    image: "/automate-portfolio-alerts.png",
  },
];

export default function FeatureCards() {
  return (
    <section id="capabilities" className="py-32 px-8 bg-[#EFF1F2]">
      <div className="max-w-4xl mx-auto">
        {/* Images with borders and corner extensions */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 mb-3">
          {/* Corner lines for the image grid only */}
          {/* Top left - horizontal line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              top: "0",
              left: "-28px",
              width: "28px",
              height: "1px",
            }}
          />
          {/* Top left - vertical line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              top: "-68px",
              left: "0",
              width: "1px",
              height: "68px",
            }}
          />

          {/* Top right - horizontal line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              top: "0",
              right: "-42px",
              width: "42px",
              height: "1px",
            }}
          />
          {/* Top right - vertical line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              top: "-58px",
              right: "0",
              width: "1px",
              height: "58px",
            }}
          />

          {/* Bottom left - horizontal line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              bottom: "0",
              left: "-96px",
              width: "96px",
              height: "1px",
            }}
          />
          {/* Bottom left - vertical line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              bottom: "-112px",
              left: "0",
              width: "1px",
              height: "112px",
            }}
          />

          {/* Bottom right - horizontal line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              bottom: "0",
              right: "-20px",
              width: "20px",
              height: "1px",
            }}
          />
          {/* Bottom right - vertical line */}
          <div
            className="absolute bg-[#B3C0C8]"
            style={{
              bottom: "-20px",
              right: "0",
              width: "1px",
              height: "20px",
            }}
          />

          {/* Top right gradient - fills bottom left section */}
          <div
            className="absolute"
            style={{
              top: "-58px",
              right: "-42px",
              width: "42px",
              height: "58px",
              background:
                "linear-gradient(to top right, rgba(213, 223, 229, 0.6) 0%, rgba(213, 223, 229, 0.4) 20%, rgba(213, 223, 229, 0.2) 30%, transparent 50%)",
            }}
          />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`h-64 p-2 overflow-hidden border-t-[1px] border-b-[1px] border-[#B3C0C8] bg-transparent ${
                index === 0 ? "border-l-[1px]" : ""
              }${index === 2 ? "border-r-[1px]" : ""}${
                index === 1 ? "border-l-[1px] border-r-[1px]" : ""
              }`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={240}
                height={200}
                className="object-contain h-full w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Titles and descriptions below the image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <h3 className="text-lg text-start font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm text-start leading-tight font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
