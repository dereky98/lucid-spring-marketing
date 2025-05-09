import { motion, Variants } from "framer-motion";

interface FeaturesSectionProps {
  fadeIn: Variants;
}

export default function FeaturesSection({ fadeIn }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-[#f6f6e9] relative overflow-hidden">
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
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">A single pane of glass ...</h3>
              <p className="text-gray-700">
                Lucid Spring integrates with any data sources (internal or external) your firm uses,
                and offers clear transparency to which were used.
              </p>
            </div>
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">
                .. tailored for Private Equity ..
              </h3>
              <p className="text-gray-700">
                Lucid Spring&apos;s proprietary datalake and workflow tools are designed
                specifically for Private Equity.
              </p>
            </div>
          </div>
          {/* Bottom row: one card full width */}
          <div className="mt-6">
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">.. that Works the Way You Do.</h3>
              <p className="text-gray-700">
                We don&apos;t offer one-size-fits-all tools. Instead, we partner with your team to
                customize solutions to meet your unique needs. For some teams thats a turnkey
                solution - for others, its flexibility to configure each step.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
