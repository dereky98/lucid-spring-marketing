import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface CTASectionProps {
  fadeIn: any;
}

export default function CTASection({ fadeIn }: CTASectionProps) {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/10 to-[#2EB8B8]/10 skew-y-3 transform origin-top-right"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 border border-[#8A2BE2]/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl sm:text-4xl font-light mb-4 text-white">
                  Ready to Transform Your Financial Research?
                </h2>
                <p className="text-xl text-gray-300 mb-8 font-light">
                  Join leading financial institutions using our AI research platform to gain deeper
                  market insights faster.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#8A2BE2] text-white hover:bg-[#8A2BE2]/90 border-0 rounded-none px-8"
                  >
                    Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#8A2BE2]/50 text-[#8A2BE2] hover:bg-[#8A2BE2]/10 rounded-none px-8"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full bg-[#2EB8B8]/20 transform rotate-3 border border-[#2EB8B8]/30"></div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#E1AD01]/20 transform -rotate-3 border border-[#E1AD01]/30"></div>
                  <div className="relative bg-black/70 backdrop-blur-sm p-6 border border-[#8A2BE2]/30">
                    <h3 className="text-lg font-medium mb-2 text-white">Free Consultation</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Book a 30-minute consultation with our financial research experts to discuss
                      your needs.
                    </p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Check className="h-4 w-4 text-[#2EB8B8] mr-2" /> No credit card required
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Check className="h-4 w-4 text-[#2EB8B8] mr-2" /> Cancel anytime
                    </div>
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
