"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FeatureCards from "@/components/FeatureCards";
import DesignedToScale from "@/components/DesignedToScale";
import Integrations from "@/components/Integrations";
import BuiltForScale from "@/components/BuiltForScale";

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
      <Navbar navbarTheme="dark" />
      <Hero isVisible={isVisible} fadeIn={fadeIn} />
      <Features />
      <FeatureCards />
      <DesignedToScale />
      <Integrations />
      <BuiltForScale />
    </div>
  );
}