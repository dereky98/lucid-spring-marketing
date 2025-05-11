import { motion, Variants } from "framer-motion";

interface FeaturesSectionProps {
  fadeIn: Variants;
}

const features = [
  {
    title: "A Single Pane of Glass",
    description:
      "Lucid Spring integrates with any data sources (internal or external) your firm uses, and offers clear transparency to which were used.",
    bgColor: "bg-[#F6F7F9]",
  },
  {
    title: "Tailored for Private Equity",
    description:
      "Lucid Spring offers a purpose-built datalake and workflow suite tailored specifically for Private Equity, aligning tightly with the day-to-day needs of your firm.",
    bgColor: "bg-[#F6F7F9]",
  },
  {
    title: "Works the Way You Do",
    description:
      "We don't offer one-size-fits-all tools. Instead, we partner with your team to customize solutions to meet your unique needs. For some teams thats a turnkey solution - for others, its flexibility to configure each step.",
    bgColor: "bg-gray-100",
  },
];

export default function FeaturesSection({ fadeIn }: FeaturesSectionProps) {
  return (
    <section className="pt-12 pb-56 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-playfair font-medium mb-10 text-black text-left">
            Your Research Stack, Finally Unified.
          </h2>

          {/* Vertically stacked cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-6 rounded-lg relative overflow-hidden min-h-[120px]`}
              >
                <div className="flex flex-col md:flex-row md:gap-x-6">
                  {/* Left side: Title */}
                  <div className="md:basis-1/2 md:max-w-[50%] shrink mb-4 md:mb-0">
                    <h3 className="text-lg mb-2 text-black">{feature.title}</h3>
                  </div>

                  {/* Right side: Description */}
                  <div className="md:basis-1/2 md:min-w-[50%] grow shrink-0">
                    <p className="text-[#7E7E7F] font-light">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
