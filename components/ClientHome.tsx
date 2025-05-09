"use client";

import { useEffect, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import PrivateByDesign from "./PrivateByDesign";

export default function ClientHome() {
  const [isVisible, setIsVisible] = useState(false);

  /* ────────── section refs & visibility flags ────────── */
  const dataRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const privateByDesignRef = useRef<HTMLDivElement>(null);

  const [dataInView, setDataInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
  const [privateByDesignInView, setPrivateByDesignInView] = useState(false);

  /* ────────── mount / intersection observers ────────── */
  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === dataRef.current) {
            setDataInView(entry.isIntersecting);
          } else if (entry.target === testimonialsRef.current) {
            setTestimonialsInView(entry.isIntersecting);
          } else if (entry.target === privateByDesignRef.current) {
            setPrivateByDesignInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px" }
    );

    if (dataRef.current) observer.observe(dataRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (privateByDesignRef.current) observer.observe(privateByDesignRef.current);

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
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero isVisible={isVisible} fadeIn={fadeIn} />
      <div ref={testimonialsRef}>
        <Testimonials isVisible={testimonialsInView} />
      </div>
      <FeaturesSection fadeIn={fadeIn} />
      <section className="py-12 bg-white flex justify-center">
        <img
          src="/product-stack.svg"
          alt="Product Stack Diagram"
          className="w-full max-w-2xl h-auto"
        />
      </section>
      <HowItWorks dataRef={dataRef} dataInView={dataInView} fadeIn={fadeIn} />
      <div ref={privateByDesignRef}>
        <PrivateByDesign isVisible={privateByDesignInView} />
      </div>
      <CTASection fadeIn={fadeIn} />
      <Footer />
    </div>
  );
}
