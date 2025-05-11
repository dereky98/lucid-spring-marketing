import { motion, Variants } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

interface HowItWorksProps {
  dataRef: RefObject<HTMLDivElement | null>;
  dataInView: boolean;
  fadeIn: Variants;
}

const cardImages = ["/agent-army.png", "/knowledge-graph.png", "/custom-materials.png"];

const cardTitles = [
  "An army of AI research agents",
  "Proprietary Intelligence Graph",
  "Customized Materials Creation",
];

const cardDescriptions = [
  "Our AI agents can conduct calls, validate information shared by data providers, and tailor information to your stated request or thesis.",
  "Lucid Spring is built on a proprietary data lake - giving our research agents and outputs a contextual edge.",
  "Generate research summaries ready to share with your investment committee or LPs.",
];

const CARD_SCROLL_DURATION_VH = 100; // Each card gets 100vh of scroll "space"
const EXTRA_SCROLL_PAGES_FOR_LAST_CARD = 1; // Add 1 extra viewport scroll for the last card

export default function HowItWorks({ dataRef, dataInView, fadeIn }: HowItWorksProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = dataRef; // Renaming for clarity within this component
  const stickyContainerRef = useRef<HTMLDivElement>(null); // For the div that actually sticks

  // Increase total scroll height to give the last card extra duration
  const totalSectionScrollHeight =
    (cardImages.length + EXTRA_SCROLL_PAGES_FOR_LAST_CARD) * CARD_SCROLL_DURATION_VH;

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!dataInView || !currentSectionRef) {
      return;
    }

    const handleScroll = () => {
      const sectionRect = currentSectionRef.getBoundingClientRect();
      let scrollProgressWithinSection = -sectionRect.top;
      if (scrollProgressWithinSection < 0) {
        scrollProgressWithinSection = 0;
      }
      const pixelsPerCardCycle = window.innerHeight * (CARD_SCROLL_DURATION_VH / 100);
      let newIndex = 0;
      if (pixelsPerCardCycle > 0) {
        newIndex = Math.floor(scrollProgressWithinSection / pixelsPerCardCycle);
      }
      newIndex = Math.max(0, Math.min(cardImages.length - 1, newIndex));
      setActiveCardIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dataInView, sectionRef, cardImages.length]); // cardImages.length in dep array is fine as it's stable

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0C1B] text-white"
      style={{ height: `${totalSectionScrollHeight}vh` }} // Use updated scrollable height
    >
      {/* This div sticks to the viewport and acts as the stage */}
      <div ref={stickyContainerRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Container to center content within the sticky stage, using flex */}
        <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-start relative py-12 md:py-16">
          <motion.div
            initial="hidden"
            animate={dataInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-8 md:mb-10 text-center z-10 mt-8"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-medium">How we do it</h2>
          </motion.div>

          {/* Cards Area: Takes up available space in the sticky stage, cards overlay */}
          <div className="relative flex-grow w-full flex items-center justify-center">
            {cardImages.map((img, i) => (
              <motion.div
                key={img + i} // Ensure unique key if img might not be unique
                initial={{ opacity: 0 }}
                animate={{ opacity: i === activeCardIndex ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // Card itself is absolutely positioned to fill its parent (the flex-grow div)
                className="absolute inset-0 flex flex-col md:flex-row rounded-xl shadow-2xl overflow-hidden items-stretch"
              >
                {/* Animated glowing border wrapper */}
                <div className="absolute inset-0 rounded-xl glow-border"></div>

                <div className="absolute inset-0 bg-black rounded-xl z-10 flex flex-col md:flex-row">
                  {/* Left Pane: Contains title in middle and description at bottom */}
                  <div className="md:w-1/3 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col h-full order-2 md:order-1">
                    {/* Title centered vertically */}
                    <div className="flex-grow flex items-center">
                      <h3 className="text-3xl font-playfair mb-4 text-white">{cardTitles[i]}</h3>
                    </div>

                    {/* Description placed at bottom of left panel */}
                    <p className="text-base sm:text-lg text-gray-400 font-extralight mt-auto pt-4">
                      {cardDescriptions[i]}
                    </p>
                  </div>

                  {/* Right Pane: Image */}
                  <div className="md:w-2/3 order-1 md:order-2 h-[200px] xs:h-[250px] sm:h-[300px] md:h-auto relative">
                    <img src={img} alt={cardTitles[i]} className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animation for the glowing border */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 6px 2px rgba(138, 43, 226, 0.3);
          }
          50% {
            box-shadow: 0 0 12px 4px rgba(138, 43, 226, 0.5);
          }
          100% {
            box-shadow: 0 0 6px 2px rgba(138, 43, 226, 0.3);
          }
        }

        .glow-border {
          animation: glowPulse 3s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
