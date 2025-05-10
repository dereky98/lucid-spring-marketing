import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  isVisible: boolean;
  fadeIn: Variants;
}

export default function Hero({ isVisible, fadeIn }: HeroProps) {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0A0C1B] h-screen w-full flex items-center justify-center">
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#0A0C1B",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero-background.png')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="bg-black/30 w-full h-full absolute"></div>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center px-4 relative z-10"
        >
          <h1 className="text-4xl font-playfair font-light text-white leading-tight">
            The OS for Private Market Research.
          </h1>
        </motion.div>
        <div className="absolute left-8 bottom-8 z-10 max-w-xs flex items-center gap-4">
          <button
            onClick={scrollToNextSection}
            className="flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-neutral-800 border border-white/20 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <ChevronDown className="text-white w-6 h-6" />
          </button>
          <p className="text-white text-lg font-light leading-snug">
            Agents that run CDDs in 24 hours instead of weeks.
          </p>
        </div>
      </section>
    </div>
  );
}
