"use client";

import BuiltForScale from "@/components/BuiltForScale";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import PortfolioAnalysis from "@/components/PortfolioAnalysis";
import SimplifiedReporting from "@/components/SimplifiedReporting";
import TeamInSync from "@/components/TeamInSync";

export default function ClientHome() {
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
      <Footer />
    </div>
  );
}
