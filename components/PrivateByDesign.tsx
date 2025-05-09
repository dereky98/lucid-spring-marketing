// PrivateByDesign.tsx

"use client";

import { motion } from "framer-motion";
import { Key, Lock, Shield, XCircle } from "lucide-react";

interface PrivateByDesignProps {
  isVisible?: boolean;
}

export default function PrivateByDesign({ isVisible = true }: PrivateByDesignProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-[#25282B] px-6 py-12 md:p-12"
        >
          <div className="mb-2">
            <h2 className="text-3xl md:text-4xl font-playfair text-white mb-3">
              Private by design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Security Features */}
            <div>
              <p className="text-purple-400 mb-6 font-playfair">
                Where private market data stays private.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white text-base font-playfair">Enterprise-grade security</p>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white text-base font-playfair">
                    No training on your firm&apos;s data
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Key className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white text-base font-playfair">
                    End to end encryption on all data and workflows
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white text-base font-playfair">
                    Requests and research outputs are never shared externally
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Compliance */}
            <div>
              <p className="text-purple-400 mb-6 font-playfair">Built to be compliant with:</p>
              <div className="space-y-5">
                <p className="text-white text-base font-playfair">SOC-2</p>
                <p className="text-white text-base font-playfair">CCPA and CPRA</p>
                <p className="text-white text-base font-playfair">GDPR</p>
                <p className="text-white text-base font-playfair">
                  Data Residency / Sovereignty Frameworks
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
