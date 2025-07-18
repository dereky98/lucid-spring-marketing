"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingSquares() {
  const [shapes, setShapes] = useState<any[]>([]);

  // Simple deterministic random number generator
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Manually define positions for a more organic, scattered look
  // Each entry: [column, y-position]
  const shapePositions = [
    // Column 0 (4 shapes)
    [0, 80],
    [0, 210],
    [0, 480],
    [0, 620],
    // Column 1 (5 shapes)
    [1, 140],
    [1, 260],
    [1, 380],
    [1, 540],
    [1, 680],
    // Column 2 (4 shapes)
    [2, 230],
    [2, 450],
    [2, 640],
    [2, 720],
    // Column 3 (3 shapes)
    [3, 60],
    [3, 210],
    [3, 600],
    // Column 4 (4 shapes)
    [4, 140],
    [4, 290],
    [4, 420],
    [4, 700],
    // Column 5 (2 shapes)
    [5, 250],
    [5, 460],
    // Column 6 (3 shapes)
    [6, 90],
    [6, 290],
    [6, 480],
    // Column 7 (4 shapes)
    [7, 60],
    [7, 160],
    [7, 280],
    [7, 400],
    // Column 8 (4 shapes)
    [8, 140],
    [8, 290],
    [8, 500],
    [8, 630],
    // Column 9 (2 shapes)
    [9, 220],
    [9, 580],
    // Column 10 (2 shapes)
    [10, 360],
    [10, 490],
    // Column 11 (3 shapes)
    [11, 300],
    [11, 450],
    [11, 520],
    // Column 12 (3 shapes)
    [12, 340],
    [12, 500],
    [12, 580],
    // Column 13 (2 shapes) - reverse
    [13, 470],
    [13, 540],
    // Column 14 (4 shapes) - reverse
    [14, 340],
    [14, 440],
    [14, 520],
    [14, 610],
    // Column 15 (2 shapes) - reverse
    [15, 440],
    [15, 520],
  ];

  useEffect(() => {
    const generatedShapes: any[] = [];
    const baseX = 30;
    const spacingX = 45;
    const shapeWidth = 36;
    const shapeHeight = 60;

    shapePositions.forEach(([col, y], index) => {
      const x = baseX + col * spacingX;

      // Columns 13-15 have opposite skew
      const skew = col >= 13 ? -15 : 15;

      // Use deterministic randomness based on index
      const xOffset = seededRandom(index * 2) * 6 - 3;
      const yOffset = seededRandom(index * 3) * 10 - 5;

      // Vary opacity
      const opacity = 0.35 + seededRandom(index * 5) * 0.25;

      generatedShapes.push({
        w: shapeWidth + seededRandom(index * 7) * 4 - 2,
        h: shapeHeight + seededRandom(index * 11) * 6 - 3,
        x: x + xOffset,
        y: y + yOffset,
        opacity: opacity,
        delay: seededRandom(index * 13) * 2,
        skew: skew,
        col: col,
      });
    });

    setShapes(generatedShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Container that shifts left on smaller screens */}
      <div className="relative w-full h-full transform xl:translate-x-0 lg:-translate-x-[180px] md:-translate-x-[360px] sm:-translate-x-[540px] -translate-x-[540px]">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${
              shape.col < 4
                ? "hidden xl:block"
                : shape.col < 8
                ? "hidden lg:block"
                : shape.col < 12
                ? "hidden md:block"
                : ""
            }`}
            style={{
              width: `${shape.w}px`,
              height: `${shape.h}px`,
              left: `${shape.x}px`,
              top: `${shape.y}px`,
              backgroundColor: `rgba(255, 255, 255, ${shape.opacity})`,
              borderRadius: "2px",
              transformOrigin: "center",
            }}
            initial={{
              skewY: shape.skew,
              y: 0,
            }}
            animate={{
              y: [0, -8, 0],
              skewY: shape.skew,
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
