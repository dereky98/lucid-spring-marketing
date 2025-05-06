/* ------------------------------------------------------------
 *  ResearchIntelligenceSection.tsx
 *  ---------------------------------------------------------- */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Database,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { RefObject } from "react";

interface Props {
  sectionRef: RefObject<HTMLDivElement | null>;
  inView: boolean;
  fadeIn: any; // same fade variant you pass in ClientHome
}

export default function ResearchIntelligenceSection({ sectionRef, inView, fadeIn }: Props) {
  /* helper –‑ returns the floating animation config with optional delay */
  const float = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView
      ? {
          opacity: 1,
          y: [0, -6, 0], // bob up 6 px then back
        }
      : { opacity: 0, y: 30 },
    transition: {
      opacity: { duration: 0.6, delay },
      y: {
        duration: 4,
        delay: delay + 0.6, // start bob after fade‑in
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      id="research-intel"
      className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800"
    >
      {/* Decorative grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] opacity-10 [mask-image:linear-gradient(to_bottom,transparent_5%,black_25%,black_75%,transparent_95%)]" />

      {/* ---------- Header ---------- */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center mb-20 container mx-auto px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
          Unified Research Intelligence
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
          One pane of glass for primary interviews, secondary data and Lucid Spring’s proprietary
          intelligence&nbsp;—&nbsp;automatically analysed and delivered.
        </p>
      </motion.div>

      {/* ---------- Cards ---------- */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-3 gap-10">
        {/* 1 ▸ Unified Research */}
        <motion.div
          {...float(0)}
          className="p-6 bg-gray-800/70 backdrop-blur-sm border-l-2 border-teal-400"
        >
          <div className="flex items-center text-teal-400 mb-4">
            <FileText className="h-5 w-5 mr-2" />
            <h3 className="text-xl font-medium">Unified Research</h3>
          </div>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <Search className="h-4 w-4 mr-2 mt-0.5" />
              Ingest PDFs, transcripts &amp; web sources
            </li>
            <li className="flex items-start">
              <UserCheck className="h-4 w-4 mr-2 mt-0.5" />
              Agents schedule &amp; conduct expert calls
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
              All content lands in one secure workspace
            </li>
          </ul>
        </motion.div>

        {/* 2 ▸ Turnkey Analysis */}
        <motion.div
          {...float(0.15)}
          className="p-6 bg-gray-800/70 backdrop-blur-sm border-l-2 border-purple-500"
        >
          <div className="flex items-center text-purple-400 mb-4">
            <BookOpen className="h-5 w-5 mr-2" />
            <h3 className="text-xl font-medium">Turnkey Analysis</h3>
          </div>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <Sparkles className="h-4 w-4 mr-2 mt-0.5" />
              AI tags, clusters &amp; compares insights
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
              Auto‑generated 1‑pagers &amp; slides
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
              Export to BI or your CRM in one click
            </li>
          </ul>
        </motion.div>

        {/* 3 ▸ Proprietary Data Lake */}
        <motion.div
          {...float(0.3)}
          className="p-6 bg-gray-800/70 backdrop-blur-sm border-l-2 border-amber-500"
        >
          <div className="flex items-center text-amber-400 mb-4">
            <Database className="h-5 w-5 mr-2" />
            <h3 className="text-xl font-medium">Proprietary Data Lake</h3>
          </div>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <ShieldCheck className="h-4 w-4 mr-2 mt-0.5" />
              GDPR‑ &amp; SOC‑2‑ready architecture
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
              Enriches every project with exclusive signals
            </li>
            <li className="flex items-start">
              <Sparkles className="h-4 w-4 mr-2 mt-0.5" />
              Improves over time as models learn
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
