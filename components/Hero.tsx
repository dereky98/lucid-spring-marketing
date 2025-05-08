import { motion, Variants } from "framer-motion";

interface HeroProps {
  isVisible: boolean;
  fadeIn: Variants;
}

export default function Hero({ isVisible, fadeIn }: HeroProps) {
  return (
    <div className="p-4 pt-20 bg-[#f6f6e9] min-h-screen flex items-center justify-center">
      <section
        className="relative w-full h-[90vh] flex items-center justify-center rounded-md overflow-hidden"
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
          <h1 className="text-xl font-playfair font-light text-white leading-tight">
            The OS for Private Market Research
          </h1>
        </motion.div>

        <div className="absolute left-[25%] bottom-[10%] z-10 max-w-xs">
          <p className="text-white/80 text-sm font-light">
            Agents that help you run commercial diligences in 24 hours instead of weeks.
          </p>
        </div>
      </section>
    </div>
  );
}
