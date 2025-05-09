import { motion, Variants } from "framer-motion";
import { RefObject } from "react";

interface HowItWorksProps {
  dataRef: RefObject<HTMLDivElement | null>;
  dataInView: boolean;
  fadeIn: Variants;
}

const cardImages = ["/agent-army.png", "/knowledge-graph.png", "/custom-materials.png"];

const cardTitles = [
  "An army of AI research agents",
  "Proprietary Intelligence Graph",
  "Customized Materials Creation",
];

const cardDescriptions = [
  "Our AI agents can conduct calls, validate information shared by data providers, and tailor information to your stated request or thesis.",
  "Lucid Spring is built on a proprietary data lake - giving our research agents and outputs a contextual edge.",
  "Generate research summaries ready to share with your investment committee or LPs.",
];

export default function HowItWorks({ dataRef, dataInView, fadeIn }: HowItWorksProps) {
  return (
    <section ref={dataRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title above the cards */}
        <motion.div
          initial="hidden"
          animate={dataInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-medium text-black">
            How we do it
          </h2>
        </motion.div>

        {/* Cards: each takes a full row, image as proportional, gradient overlay */}
        <div className="flex flex-col gap-8">
          {cardImages.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 20 }}
              animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-md h-[320px] md:h-[340px] flex items-stretch bg-black"
            >
              {/* Image, absolutely positioned on the right, object-contain */}
              <div className="absolute inset-0 right-0 w-full h-full flex justify-end z-0">
                <img
                  src={img}
                  alt={cardTitles[i]}
                  className="object-contain h-full w-full md:w-2/3"
                  style={{ objectPosition: "right center" }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.0) 80%)",
                  }}
                />
              </div>
              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-start h-full p-8 w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-white">{cardTitles[i]}</h3>
                <p className="text-white/90 font-light">{cardDescriptions[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
