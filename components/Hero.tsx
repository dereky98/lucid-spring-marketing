import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  isVisible: boolean;
  fadeIn: any;
}

export default function Hero({ isVisible, fadeIn }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-gray-300 pt-24 pb-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111827]/30 -skew-x-12 transform origin-top-right z-0"></div>

      {/* Abstract shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#8A2BE2]/10 mix-blend-multiply opacity-70"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-[#2EB8B8]/10 mix-blend-multiply opacity-60"></div>
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-[#E1AD01]/10 mix-blend-multiply opacity-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight text-white leading-tight">
              Unlock financial <span className="text-white">insights</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 font-light max-w-xl">
              Transform your primary research through voice agent interviews, data extraction, and
              deliverable generation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]/90 border-0 px-8"
              >
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#8A2BE2] hover:bg-white/10 px-8"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-[#1e293b] rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-[#1e293b] relative">
                <img
                  src="/dashboard-screenshot.png"
                  alt="Platform Demo"
                  className="w-full h-full object-cover object-top-left opacity-80"
                  style={{ objectPosition: "top left" }}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2EB8B8]/20 rounded-none z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E1AD01]/20 rounded-none z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
