import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  fadeIn: Variants;
}

export default function CTASection({ fadeIn }: CTASectionProps) {
  return (
    <section className="py-20 bg-[#0A0C1B]">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-playfair font-semibold mb-10 text-white">
            Ready to supercharge your research?
          </h2>

          <Link href="/research-request">
            <Button
              size="lg"
              className="bg-purple-700/90 hover:bg-purple-700/60 text-white px-8 py-2 h-auto text-md font-light rounded-md"
            >
              Submit a Research Request <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
