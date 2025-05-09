import { motion, Variants } from "framer-motion";

interface FeaturesSectionProps {
  fadeIn: Variants;
}

export default function FeaturesSection({ fadeIn }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-medium mb-10 text-black text-left">
            Your Research Stack, Finally Unified.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top row: two cards side by side */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm relative overflow-hidden min-h-[160px] pb-16">
              <h3 className="text-xl font-medium mb-2 text-black">A Single Pane of Glass ...</h3>
              <p className="text-gray-700">
                Lucid Spring integrates with any data sources (internal or external) your firm uses,
                and offers clear transparency to which were used.
              </p>
              <img
                src="/globe-svg.png"
                alt="Globe Icon"
                className="absolute bottom-4 right-4 w-20 h-20 opacity-60 pointer-events-none select-none"
              />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm relative overflow-hidden min-h-[160px] pb-16">
              <h3 className="text-xl font-medium mb-2 text-black">
                .. Tailored for Private Equity ..
              </h3>
              <p className="text-gray-700">
                Lucid Spring&apos;s proprietary datalake and workflow tools are designed
                specifically for Private Equity.
              </p>
              <img
                src="/briefcase-svg.png"
                alt="Briefcase Icon"
                className="absolute bottom-4 right-4 w-20 h-20 opacity-60 pointer-events-none select-none"
              />
            </div>
          </div>
          {/* Bottom row: one card full width */}
          <div className="mt-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm relative overflow-hidden min-h-[160px] pb-16">
              <h3 className="text-xl font-medium mb-2 text-black">.. that Works the Way You Do.</h3>
              <p className="text-gray-700">
                We don&apos;t offer one-size-fits-all tools. Instead, we partner with your team to
                customize solutions to meet your unique needs. For some teams thats a turnkey
                solution - for others, its flexibility to configure each step.
              </p>
              <img
                src="/puzzle_pieces-svg.png"
                alt="Puzzle Pieces Icon"
                className="absolute bottom-4 right-4 w-20 h-20 opacity-60 pointer-events-none select-none"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
