import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  fadeIn: Variants;
}

export default function CTASection({ fadeIn }: CTASectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-playfair font-semibold mb-10 text-gray-900">
            Ready to supercharge your research?
          </h2>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 h-auto text-md font-light rounded-md"
          >
            Submit a Research Request <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
