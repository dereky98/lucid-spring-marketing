"use client";

import BuiltForScale from "@/components/BuiltForScale";
import DesignedToScale from "@/components/DesignedToScale";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import FundMemory from "@/components/FundMemory";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function ClientHome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero isVisible={isVisible} fadeIn={fadeIn} />
      <FundMemory />
      <FeatureCards />
      <DesignedToScale />
      <Integrations />
      <BuiltForScale />
      <Footer />
    </div>
  );
}
