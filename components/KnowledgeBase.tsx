import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

interface KnowledgeBaseProps {
  fadeIn: any;
}

export default function KnowledgeBase({ fadeIn }: KnowledgeBaseProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="New York City Skyline"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 text-white">
            Vast Knowledge Base for Financial Firms
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Access deep financial insights across markets, sectors, and asset classes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Financial Markets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-medium text-white mb-2">Market Analysis</h3>
              <p className="text-gray-300 font-light mb-4">
                Comprehensive analysis of global financial markets and trends
              </p>
              <div className="flex items-center text-[#E1AD01] group-hover:translate-x-2 transition-transform">
                <span className="text-sm mr-2">Explore</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Corporate Buildings"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-medium text-white mb-2">Corporate Intelligence</h3>
              <p className="text-gray-300 font-light mb-4">
                Deep insights into corporate strategies, leadership, and performance
              </p>
              <div className="flex items-center text-[#2EB8B8] group-hover:translate-x-2 transition-transform">
                <span className="text-sm mr-2">Explore</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Data Visualization"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-medium text-white mb-2">Investment Research</h3>
              <p className="text-gray-300 font-light mb-4">
                Actionable investment insights across asset classes and regions
              </p>
              <div className="flex items-center text-[#8A2BE2] group-hover:translate-x-2 transition-transform">
                <span className="text-sm mr-2">Explore</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-transparent hover:bg-[#E1AD01]/10 text-[#E1AD01] border border-[#E1AD01]/50 rounded-none px-8 py-6">
            Explore Full Knowledge Base <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
