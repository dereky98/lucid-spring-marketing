import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface FeaturesSectionProps {
  fadeIn: Variants;
}

const features = [
  {
    title: "A Single Pane of Glass",
    description:
      "Lucid Spring integrates with any data sources (internal or external) your firm uses, and offers clear transparency to which were used.",
    bgColor: "bg-[#F2F2F2]",
    image: "/pane-of-glass.svg",
  },
  {
    title: "Tailored for Private Equity",
    description:
      "Lucid Spring offers a purpose-built datalake and workflow suite tailored specifically for Private Equity, aligning tightly with the day-to-day needs of your firm.",
    bgColor: "bg-[#F2F2F2]",
    image: "/tailored-for-pe.svg",
  },
  {
    title: "Works the Way You Do",
    description:
      "We don't offer one-size-fits-all tools. Instead, we partner with your team to customize solutions to meet your unique needs. For some teams thats a turnkey solution - for others, its flexibility to configure each step.",
    bgColor: "bg-[#F2F2F2]",
    image: "/puzzle.svg",
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
          <h2 className="text-4xl font-playfair font-medium mb-10 text-black text-center">
            Your Research Stack, Finally Unified.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column - first 2 cards stacked */}
            <div className="flex flex-col gap-6 md:h-[calc(100vh-220px)] lg:h-[780px]">
              {/* First card */}
              <div
                className={`${features[0].bgColor} rounded-lg shadow-md drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)] h-1/2 overflow-hidden`}
              >
                <div className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl text-black mb-4">{features[0].title}</h3>
                  <p className="text-[#7E7E7F] mb-6">{features[0].description}</p>

                  <div className="flex justify-start mt-auto">
                    <div className="relative w-full max-w-[300px] h-[300px]">
                      <Image
                        src={features[0].image}
                        alt={features[0].title}
                        fill
                        style={{ objectFit: "contain", objectPosition: "center top" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Second card */}
              <div
                className={`${features[1].bgColor} rounded-lg shadow-md drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)] h-1/2 overflow-hidden`}
              >
                <div className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl text-black mb-4">{features[1].title}</h3>
                  <p className="text-[#7E7E7F] mb-6">{features[1].description}</p>

                  <div className="flex justify-end mt-auto">
                    <div className="relative w-full max-w-[300px] h-[300px]">
                      <Image
                        src={features[1].image}
                        alt={features[1].title}
                        fill
                        style={{ objectFit: "contain", objectPosition: "center top" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - third card full height */}
            <div
              className={`${features[2].bgColor} rounded-lg shadow-md drop-shadow-[0_5px_4px_rgba(0,0,0,0.25)] md:h-[calc(100vh-220px)] lg:h-[780px]`}
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-2xl text-black mb-4">{features[2].title}</h3>
                <p className="text-[#7E7E7F] mb-8">{features[2].description}</p>

                <div className="flex justify-center items-center flex-grow">
                  <div className="relative w-full max-w-[500px] aspect-square max-h-[500px]">
                    <Image
                      src={features[2].image}
                      alt={features[2].title}
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
