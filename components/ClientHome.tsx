"use client";

import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import CTASection from "@/components/CTASection";
import DataEnrichment from "@/components/DataEnrichment";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function ClientHome() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation controls (if you need them elsewhere)
  const fadeControls = useAnimation();

  /* ────────── section refs & visibility flags ────────── */
  const researchRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  const [researchInView, setResearchInView] = useState(false);
  const [dataInView, setDataInView] = useState(false);

  /* ────────── mount / intersection observers ────────── */
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === researchRef.current) {
            setResearchInView(entry.isIntersecting);
          } else if (entry.target === dataRef.current) {
            setDataInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px" }
    );

    if (researchRef.current) observer.observe(researchRef.current);
    if (dataRef.current) observer.observe(dataRef.current);

    return () => observer.disconnect();
  }, []);

  /* ────────── animation variants ────────── */
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300">
      <Navbar />
      <Hero isVisible={isVisible} fadeIn={fadeIn} />
      <FeaturesSection fadeIn={fadeIn} />
      <DataEnrichment dataRef={dataRef} dataInView={dataInView} fadeIn={fadeIn} />
      <CTASection fadeIn={fadeIn} />
      <Footer />
    </div>
  );
}
