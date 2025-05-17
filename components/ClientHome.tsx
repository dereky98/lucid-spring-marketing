"use client";

import { useEffect, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import WaitlistModal from "@/components/WaitlistModal";
import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import PrivateByDesign from "./PrivateByDesign";

const NAVBAR_HEIGHT_ESTIMATE = 72; // px, adjust if Navbar height changes
const DARK_BG_COLOR = "bg-[#0A0C1B]";
const LIGHT_BG_COLOR = "bg-white";

export default function ClientHome() {
  const [isVisible, setIsVisible] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState<"dark" | "light">("dark");
  const [appBgTheme, setAppBgTheme] = useState<"dark" | "light">("light");

  /* ────────── section refs ────────── */
  const heroRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const privateByDesignRef = useRef<HTMLDivElement>(null);

  /* ────────── visibility flags for general animations ────────── */
  const [dataInView, setDataInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
  const [privateByDesignInView, setPrivateByDesignInView] = useState(false);

  /* ────────── state for navbar theme control based on Hero scroll ────────── */
  const [isPastHeroSection, setIsPastHeroSection] = useState(false);

  /* ────────── mount / intersection observers ────────── */
  useEffect(() => {
    setIsVisible(true);

    const generalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === testimonialsRef.current) {
            setTestimonialsInView(entry.isIntersecting);
          } else if (entry.target === privateByDesignRef.current) {
            setPrivateByDesignInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.05, rootMargin: "-100px" }
    );

    const howItWorksObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === dataRef.current) {
            // Set dataInView to true as soon as it enters the viewport
            // This ensures the card scrolling works properly
            setDataInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.00001 }
    );

    const currentDataRef = dataRef.current;
    const currentTestimonialsRef = testimonialsRef.current;
    const currentPrivateByDesignRef = privateByDesignRef.current;

    if (currentDataRef) howItWorksObserver.observe(currentDataRef);
    if (currentTestimonialsRef) generalObserver.observe(currentTestimonialsRef);
    if (currentPrivateByDesignRef) generalObserver.observe(currentPrivateByDesignRef);

    return () => {
      if (currentDataRef) howItWorksObserver.unobserve(currentDataRef);
      if (currentTestimonialsRef) generalObserver.unobserve(currentTestimonialsRef);
      if (currentPrivateByDesignRef) generalObserver.unobserve(currentPrivateByDesignRef);
      generalObserver.disconnect();
      howItWorksObserver.disconnect();
    };
  }, []);

  // Add state to track scroll position relative to HowItWorks
  const [entryProgress, setEntryProgress] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update the scroll handler to set the progress state variables
  useEffect(() => {
    const handleScroll = () => {
      const howItWorksElement = dataRef.current;
      if (!howItWorksElement) return;

      const rect = howItWorksElement.getBoundingClientRect();
      const totalHeight = howItWorksElement.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far the section has entered the viewport (negative value = entering from bottom)
      const newEntryProgress = rect.top / viewportHeight;

      // Calculate how far we've scrolled through the entire section
      const newScrollProgress = -rect.top / (totalHeight - viewportHeight);

      // Update state with new progress values
      setEntryProgress(newEntryProgress);
      setScrollProgress(newScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call immediately to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Remove the empty effect and restore the original theme control
  useEffect(() => {
    if (dataInView) {
      // When HowItWorks is in view, use more complex logic for theme
      if (
        // Two cases for dark theme:
        // 1. Normal case: Section is mostly in view (80% or more) but we haven't scrolled too far
        (entryProgress <= 0.2 && scrollProgress < 0.8) ||
        // 2. Special case: We're at the very bottom of the HowItWorks section
        // This accounts for the extra viewport height added to the section
        (scrollProgress >= 0.8 && scrollProgress <= 1.0)
      ) {
        setNavbarTheme("dark");
        setAppBgTheme("dark");
      } else {
        // Light background but navbar theme depends on hero section
        setAppBgTheme("light");
        setNavbarTheme(isPastHeroSection ? "light" : "dark");
      }
    } else {
      // When HowItWorks is not in view, use simpler logic
      setAppBgTheme("light");
      setNavbarTheme(isPastHeroSection ? "light" : "dark");
    }
  }, [dataInView, isPastHeroSection, entryProgress, scrollProgress]);

  useEffect(() => {
    const currentHeroRef = heroRef.current;
    if (!currentHeroRef) return;

    const navbarSpecificObserver = new IntersectionObserver(
      ([entry]) => {
        setIsPastHeroSection(!entry.isIntersecting);
      },
      {
        rootMargin: `-${NAVBAR_HEIGHT_ESTIMATE}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    navbarSpecificObserver.observe(currentHeroRef);

    return () => {
      navbarSpecificObserver.unobserve(currentHeroRef);
      navbarSpecificObserver.disconnect();
    };
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

  const currentAppBgColor = appBgTheme === "dark" ? DARK_BG_COLOR : LIGHT_BG_COLOR;
  const otherSectionsVisibilityClass =
    appBgTheme === "dark" ? "opacity-0 invisible" : "opacity-100 visible";

  return (
    <div
      className={`flex flex-col min-h-screen ${currentAppBgColor} transition-colors duration-500`}
    >
      <Navbar navbarTheme={navbarTheme} />
      <div ref={heroRef} className="h-screen snap-start absolute top-0 left-0 w-full">
        <Hero isVisible={isVisible} fadeIn={fadeIn} />
      </div>
      <div className="h-screen"></div> {/* Spacer to push content below hero */}
      <div
        ref={testimonialsRef}
        className={`py-12 flex justify-center ${otherSectionsVisibilityClass} transition-opacity duration-500`}
      >
        <Testimonials isVisible={testimonialsInView} />
      </div>
      <div className={`${otherSectionsVisibilityClass} transition-opacity duration-500`}>
        <FeaturesSection fadeIn={fadeIn} />
      </div>
      <HowItWorks dataRef={dataRef} dataInView={dataInView} fadeIn={fadeIn} />
      <div
        ref={privateByDesignRef}
        className={`${otherSectionsVisibilityClass} transition-opacity duration-500`}
      >
        <PrivateByDesign isVisible={privateByDesignInView} />
      </div>
      <div className={`${otherSectionsVisibilityClass} transition-opacity duration-500`}>
        <CTASection fadeIn={fadeIn} />
      </div>
      <div className={`${otherSectionsVisibilityClass} transition-opacity duration-500`}>
        <Footer />
      </div>
      {/* Global Modal */}
      <WaitlistModal />
    </div>
  );
}
