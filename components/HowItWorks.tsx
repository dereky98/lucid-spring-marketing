import { motion, Variants } from "framer-motion";
import { RefObject } from "react";

interface HowItWorksProps {
  dataRef: RefObject<HTMLDivElement | null>;
  dataInView: boolean;
  fadeIn: Variants;
}

export default function HowItWorks({ dataRef, dataInView, fadeIn }: HowItWorksProps) {
  return (
    <section ref={dataRef} className="py-24 bg-[#f6f6e9] relative">
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

        {/* Three cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: An army of AI research agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg shadow-md h-full"
          >
            <div className="relative h-[380px] md:h-[450px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/agent-army.png')" }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4 text-white">
                  An army of AI research agents
                </h3>
                <p className="text-white/90 font-light">
                  Our AI agents can conduct calls, validate information shared by data providers,
                  and tailor information to your stated request or thesis.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Proprietary Intelligence Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-lg shadow-md h-full"
          >
            <div className="relative h-[380px] md:h-[450px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/knowledge-graph.png')" }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Proprietary Intelligence Graph
                </h3>
                <p className="text-white/90 font-light">
                  Lucid Spring is built on a proprietary data lake - giving our research agents and
                  outputs a contextual edge.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Customized Materials Creation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="overflow-hidden rounded-lg shadow-md h-full"
          >
            <div className="relative h-[380px] md:h-[450px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/custom-materials.png')" }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4 text-white">
                  Customized Materials Creation
                </h3>
                <p className="text-white/90 font-light">
                  Generate research summaries ready to share with your investment committee or LPs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
