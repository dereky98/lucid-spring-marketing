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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col pl-8"
            >
              {/* Icon/Image */}
              <div className="h-64 mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={180}
                  height={160}
                  className="object-contain h-full w-auto"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-start font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-start leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
