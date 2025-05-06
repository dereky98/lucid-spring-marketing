import { motion } from "framer-motion";
import { BarChart3, Check, FileText, Mic } from "lucide-react";

interface FeaturesSectionProps {
  fadeIn: any;
}

export default function FeaturesSection({ fadeIn }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern Building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 text-white">
            Our Intelligent Research Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Streamline your financial research and diligence processes with our comprehensive suite
            of tools.
          </p>
        </motion.div>

        {/* Feature 1: Voice Agent Interviews */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 md:col-start-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#8A2BE2]/10 backdrop-blur-sm"></div>
              <div className="relative bg-gray-800 p-8 shadow-lg border border-[#8A2BE2]/30">
                <Mic className="h-10 w-10 text-[#8A2BE2] mb-4" />
                <h3 className="text-2xl font-medium mb-3 text-white">Voice Agent Interviews</h3>
                <p className="text-gray-300 mb-6">
                  Our AI-powered voice agents conduct interviews with human-like conversation,
                  adapting in real-time to participant responses from financial experts.
                </p>
                <ul className="space-y-3">
                  {[
                    "Natural conversation flow",
                    "Real-time adaptation",
                    "Multilingual support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-4 w-4 text-[#8A2BE2]" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 md:col-start-7"
          >
            <div className="aspect-video bg-[#8A2BE2]/5 overflow-hidden relative">
              <img
                src="/voice-agent.svg"
                alt="Voice Agent Interface"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center text-white">
                  <div className="w-3 h-3 bg-[#8A2BE2] rounded-full animate-pulse mr-2"></div>
                  <p className="text-sm font-medium">Interview in progress</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 2: AI Data Extraction */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 md:col-start-2"
          >
            <div className="aspect-video bg-[#2EB8B8]/5 overflow-hidden relative">
              <img
                src="/data-extraction.svg"
                alt="Data Extraction Process"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 md:col-start-7"
          >
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#2EB8B8]/10 backdrop-blur-sm"></div>
              <div className="relative bg-gray-800 p-8 shadow-lg border border-[#2EB8B8]/30">
                <FileText className="h-10 w-10 text-[#2EB8B8] mb-4" />
                <h3 className="text-2xl font-medium mb-3 text-white">Data Aggregation</h3>
                <p className="text-gray-300 mb-6">
                  Aggregate primary and secondary data sources under a single pane of glass
                </p>
                <ul className="space-y-3">
                  {["Expert call transcripts", "Data rooms", "Public filings"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-4 w-4 text-[#2EB8B8]" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 3: Deliverable Generation */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 md:col-start-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#E1AD01]/10 backdrop-blur-sm"></div>
              <div className="relative bg-gray-800 p-8 shadow-lg border border-[#E1AD01]/30">
                <BarChart3 className="h-10 w-10 text-[#E1AD01] mb-4" />
                <h3 className="text-2xl font-medium mb-3 text-white">Deliverable Generation</h3>
                <p className="text-gray-300 mb-6">
                  Automatically generate professional financial reports, presentations, and
                  dashboards from your research data.
                </p>
                <ul className="space-y-3">
                  {[
                    "Customizable templates",
                    "Interactive dashboards",
                    "Export to multiple formats",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-4 w-4 text-[#E1AD01]" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 md:col-start-7"
          >
            <div className="aspect-video bg-[#E1AD01]/5 overflow-hidden relative">
              <img
                src="/deliverable-generation.svg"
                alt="Report Generation"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
