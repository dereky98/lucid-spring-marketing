"use client";

import BottomCTA from "@/components/BottomCTA";
import BuiltForScale from "@/components/BuiltForScale";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import PortfolioAnalysis from "@/components/PortfolioAnalysis";
import SimplifiedReporting from "@/components/SimplifiedReporting";
import TeamInSync from "@/components/TeamInSync";
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

      {/* New hero includes the dashboard image and background */}
      <Hero />
      <PortfolioAnalysis />
      <SimplifiedReporting />
      <TeamInSync />
      <Integrations />
      <BuiltForScale />
      <BottomCTA />
      <Footer />
    </div>
  );
}
