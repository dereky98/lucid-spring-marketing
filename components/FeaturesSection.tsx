import { motion, Variants } from "framer-motion";

interface FeaturesSectionProps {
  fadeIn: Variants;
}

export default function FeaturesSection({ fadeIn }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-[#f6f6e9] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Header and Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-medium mb-6 text-black">
              Your Research Stack, Finally Unified.
            </h2>

            {/* Feature 1 */}
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">A single pane of glass ...</h3>
              <p className="text-gray-700">
                Lucid Spring integrates with any data sources (internal or external) your firm uses,
                and offers clear transparency to which were used.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">
                .. tailored for Private Equity ..
              </h3>
              <p className="text-gray-700">
                Lucid Spring&apos;s proprietary datalake and workflow tools are designed
                specifically for Private Equity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F4F4F5] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-black">.. that Works the Way You Do.</h3>
              <p className="text-gray-700">
                We don&apos;t offer one-size-fits-all tools. Instead, we partner with your team to
                customize solutions to meet your unique needs. For some teams thats a turnkey
                solution - for others, its flexibility to configure each step.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="max-w-md w-full">
              {/* Turn-key Diligence Solution */}
              <div
                className="border-2 border-[#4F46E5] rounded-lg p-4 text-center mb-4"
                style={{ background: "linear-gradient(to right, #C7D2FE, #E0E7FF)" }}
              >
                <h3 className="text-[#1E1B4B] font-medium text-lg">Turn-key Diligence Solution</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Expert engagement tools */}
                <div
                  className="border border-[#6366F1] rounded-lg p-4"
                  style={{
                    background: "linear-gradient(to right, rgb(172, 155, 249), rgb(199, 192, 245))",
                  }}
                >
                  <h4 className="text-white font-medium text-base mb-2">Expert engagement tools</h4>
                  <ul className="text-white text-sm space-y-2">
                    <li>• Fine-tuned voice agents</li>
                    <li>• Intelligent screening and follow-up calls</li>
                  </ul>
                </div>

                {/* Research workflow tools */}
                <div
                  className="border border-[#F97316] rounded-lg p-4"
                  style={{ background: "linear-gradient(to right, #F97316, #FDBA74)" }}
                >
                  <h4 className="text-white font-medium text-base mb-2">Research workflow tools</h4>
                  <ul className="text-white text-sm space-y-2">
                    <li>• Search all transcripts, across all vendors</li>
                    <li>• Automated research deliverable generation</li>
                  </ul>
                </div>
              </div>

              {/* Private market data engine */}
              <div
                className="border border-[#3B82F6] rounded-lg p-4 text-center mb-4"
                style={{ background: "linear-gradient(to right, #3B82F6, #93C5FD)" }}
              >
                <h3 className="text-white font-medium text-base">Private market data engine</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Private data enrichment */}
                <div
                  className="border border-[#06B6D4] rounded-lg p-4 text-center"
                  style={{ background: "linear-gradient(to right, #06B6D4, #67E8F9)" }}
                >
                  <h4 className="text-white font-medium text-base">Private data enrichment</h4>
                </div>

                {/* Public data enrichment */}
                <div
                  className="border border-[#10B981] rounded-lg p-4 text-center"
                  style={{ background: "linear-gradient(to right, #10B981, #6EE7B7)" }}
                >
                  <h4 className="text-white font-medium text-base">Public data enrichment</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
