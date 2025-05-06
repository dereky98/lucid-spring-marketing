import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Database, FileText } from "lucide-react";
import { RefObject } from "react";

interface DataEnrichmentProps {
  dataRef: RefObject<HTMLDivElement | null>;
  dataInView: boolean;
  fadeIn: any;
}

export default function DataEnrichment({ dataRef, dataInView, fadeIn }: DataEnrichmentProps) {
  return (
    <section ref={dataRef} className="py-24 bg-gray-900 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Financial District"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/90 to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={dataInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 text-white">
            Efficient Data Enrichment
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            The turnkey solution for your firm's primary research.
          </p>
        </motion.div>

        {/* Triangle layout with grid */}
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Raw Data - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start"
            >
              <div className="bg-gray-800 p-6 w-full max-w-[320px] border-l-2 border-[#2EB8B8]">
                <div className="flex items-center mb-3">
                  <FileText className="h-6 w-6 mr-2 text-[#2EB8B8]" />
                  <h3 className="text-xl font-medium text-white">Data Lake</h3>
                </div>
                <p className="text-gray-300 font-light">
                  Financial reports, earnings calls, competitors, funding rounds
                </p>

                {/* Simplified data icons */}
                <div className="mt-3 flex space-x-2">
                  {["📄", "🎤", "📊"].map((icon, i) => (
                    <div
                      key={`raw-${i}`}
                      className="w-8 h-8 bg-[#2EB8B8]/10 flex items-center justify-center text-sm border border-[#2EB8B8]/30"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enriched Insights - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={dataInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-end"
            >
              <div className="bg-gray-800 p-6 w-full max-w-[320px] border-l-2 border-[#2EB8B8]">
                <div className="flex items-center mb-3">
                  <BarChart3 className="h-6 w-6 mr-2 text-[#2EB8B8]" />
                  <h3 className="text-xl font-medium text-white">Enriched Insights</h3>
                </div>
                <p className="text-gray-300 font-light">
                  Actionable financial intelligence and enhanced market data
                </p>

                {/* Simplified result visualization */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`insight-${i}`}
                      className="bg-[#2EB8B8] opacity-70"
                      style={{
                        height: `${(i + 1) * 12}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* AI Processing - Center Bottom */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={
                dataInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: -20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 p-6 w-full max-w-[320px] border-l-2 border-[#2EB8B8]"
            >
              <div className="flex items-center mb-3">
                <Database className="h-6 w-6 mr-2 text-[#2EB8B8]" />
                <h3 className="text-xl font-medium text-white">Firm-Specific Training</h3>
              </div>
              <p className="text-gray-300 font-light">
                Training voice and text agents on your firm's data. That data is never shared.
              </p>

              {/* Simplified processing animation */}
              <div className="mt-3 relative h-6 bg-[#2EB8B8]/10 overflow-hidden border border-[#2EB8B8]/30">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#2EB8B8]"
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-300">
                  Processing...
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection lines - SIMPLIFIED */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Path from Raw Data to AI Processing */}
              <motion.path
                d="M25%,25% Q40%,40% 50%,75%"
                stroke="#2EB8B8"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  dataInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 1.5 }}
              />

              {/* Path from AI Processing to Enriched Insights */}
              <motion.path
                d="M50%,75% Q60%,40% 75%,25%"
                stroke="#2EB8B8"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  dataInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 1.5, delay: 0.2 }}
              />

              {/* Path from Enriched Insights back to Raw Data (completing the cycle) */}
              <motion.path
                d="M75%,25% Q50%,10% 25%,25%"
                stroke="#2EB8B8"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  dataInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </svg>

            {/* Simplified data particles */}
            <AnimatePresence>
              {dataInView && (
                <>
                  {/* Left path particles */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={`left-path-${i}`}
                      className="absolute w-2 h-2 bg-[#2EB8B8]"
                      initial={{ opacity: 0, top: "25%", left: "25%" }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        top: ["25%", "75%"],
                        left: ["25%", "50%"],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                    />
                  ))}

                  {/* Right path particles */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={`right-path-${i}`}
                      className="absolute w-2 h-2 bg-[#2EB8B8]"
                      initial={{ opacity: 0, top: "75%", left: "50%" }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        top: ["75%", "25%"],
                        left: ["50%", "75%"],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                    />
                  ))}

                  {/* Top path particles */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={`top-path-${i}`}
                      className="absolute w-2 h-2 bg-[#2EB8B8]"
                      initial={{ opacity: 0, top: "25%", left: "75%" }}
                      animate={{
                        opacity: [0, 0.7, 0],
                        top: ["25%", "25%"],
                        left: ["75%", "25%"],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
