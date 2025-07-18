"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingSquares() {
  const [shapes, setShapes] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Simple deterministic random number generator
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const generatedShapes: any[] = [];
    
    // Calculate the available width for squares (closer to text)
    let availableWidth: number;
    if (dimensions.width >= 1536) { // 2xl screens
      availableWidth = dimensions.width * 0.45;
    } else if (dimensions.width >= 1280) { // xl screens
      availableWidth = dimensions.width * 0.42;
    } else if (dimensions.width >= 1024) { // lg screens
      availableWidth = dimensions.width * 0.38;
    } else if (dimensions.width >= 768) { // md screens
      availableWidth = dimensions.width * 0.35;
    } else { // small screens
      availableWidth = dimensions.width * 0.3;
    }
    
    // Dynamic sizing based on viewport
    const vw = dimensions.width / 100;
    const baseX = vw * 2; // Start 2% from left edge
    const spacingX = Math.max(35, Math.min(50, vw * 3)); // Dynamic spacing
    const shapeWidth = Math.max(24, Math.min(40, vw * 2.5));
    const shapeHeight = Math.max(40, Math.min(70, vw * 4));
    const minVerticalGap = shapeHeight * 0.3; // Minimum 30% gap between shapes
    
    // Calculate number of columns that fit in available width
    const maxColumns = Math.floor((availableWidth - baseX * 2) / spacingX);
    const numColumns = Math.min(maxColumns, 16); // Cap at 16 columns max
    
    // Generate shapes dynamically
    for (let col = 0; col < numColumns; col++) {
      // Adjust number of shapes per column - more shapes for leftmost columns
      let baseShapes: number;
      let extraShapes: number;
      
      if (col < 3) {
        // Leftmost columns get 4-6 shapes
        baseShapes = 4;
        extraShapes = 2;
      } else if (col < 6) {
        // Early-middle columns get 3-5 shapes
        baseShapes = 3;
        extraShapes = 2;
      } else if (col >= numColumns - 3) {
        // Rightmost columns get 2-3 shapes to prevent overlap
        baseShapes = 2;
        extraShapes = 1;
      } else {
        // Middle columns get 3-4 shapes
        baseShapes = 3;
        extraShapes = 1;
      }
      
      const shapesInColumn = baseShapes + Math.floor(seededRandom(col * 7) * (extraShapes + 1));
      
      for (let i = 0; i < shapesInColumn; i++) {
        // Calculate vertical compression for rightmost columns
        const compressionFactor = col >= numColumns - 3 
          ? 0.2 + (numColumns - 1 - col) * 0.05  // Even tighter compression (0.2 to 0.3)
          : 1;  // Normal distribution for other columns
        
        // Position rightmost columns lower in the viewport
        const centerY = col >= numColumns - 3 
          ? dimensions.height * 0.6  // Lower center for rightmost columns
          : dimensions.height / 2;
          
        let baseY: number;
        
        if (col >= numColumns - 3) {
          // For rightmost columns, compress towards lower center with proper spacing
          const minSpacing = shapeHeight + minVerticalGap;
          const availableSpace = dimensions.height * compressionFactor;
          const spacing = Math.max(minSpacing, availableSpace / Math.max(shapesInColumn - 1, 1));
          const totalHeight = spacing * (shapesInColumn - 1);
          const startY = centerY - totalHeight / 2;
          baseY = startY + (spacing * i);
        } else {
          // Progressive tapering effect
          const colProgress = col / (numColumns - 3); // Progress excluding the last 3 columns
          
          // Left columns use most height but stay within bounds
          const verticalPadding = dimensions.height * (0.12 + colProgress * 0.08); // 12% to 20% padding
          const taperFactor = 1 - (colProgress * 0.4); // Reduces by up to 40%
          
          // Calculate available space
          const totalAvailable = dimensions.height - (verticalPadding * 2);
          const effectiveHeight = totalAvailable * taperFactor;
          
          // Center the tapered distribution
          const startY = verticalPadding + (totalAvailable - effectiveHeight) / 2;
          
          // Distribute shapes across the effective height
          if (shapesInColumn === 1) {
            baseY = startY + effectiveHeight / 2;
          } else {
            const spacing = effectiveHeight / (shapesInColumn - 1);
            baseY = startY + spacing * i;
          }
        }
        
        const yVariation = (seededRandom(col * 100 + i * 13) - 0.5) * dimensions.height * 0.08;
        const y = Math.max(30, Math.min(dimensions.height - 30, baseY + yVariation));
        
        const x = baseX + col * spacingX;
        const xVariation = (seededRandom(col * 50 + i * 7) - 0.5) * spacingX * 0.2;
        
        // Skew direction - last 3 columns have opposite skew
        const isRightmostColumns = col >= numColumns - 3;
        const skewBase = isRightmostColumns ? -15 : 15;
        const skewProgression = isRightmostColumns 
          ? ((numColumns - 1 - col) / 3) * 5  // Reduce skew for rightmost columns
          : (col / (numColumns - 3)) * 10;     // Increase skew for left columns
        const skew = skewBase + (isRightmostColumns ? skewProgression : skewProgression);
        
        // Vary opacity - increase opacity for rightmost columns
        let baseOpacity: number;
        if (col >= numColumns - 6) {
          // Rightmost 6 columns are more opaque
          baseOpacity = 0.7;
          // Bottom half tiles are even more opaque
          const verticalPosition = y / dimensions.height;
          if (verticalPosition > 0.5) {
            baseOpacity += 0.15 * ((verticalPosition - 0.5) * 2); // Gradually increase opacity towards bottom
          }
        } else {
          // Other columns fade slightly from left to right
          baseOpacity = 0.6 - ((col / (numColumns - 6)) * 0.1);
        }
        const opacity = baseOpacity + seededRandom(col * 20 + i * 5) * 0.1;
        
        generatedShapes.push({
          w: shapeWidth + (seededRandom(col * 30 + i * 11) - 0.5) * shapeWidth * 0.3,
          h: shapeHeight + (seededRandom(col * 40 + i * 13) - 0.5) * shapeHeight * 0.2,
          x: x + xVariation,
          y: y,
          opacity: Math.max(0.4, Math.min(0.85, opacity)),
          delay: seededRandom(col * 60 + i * 17) * 2,
          skew: skew,
          duration: 12 + seededRandom(col * 70 + i * 19) * 6,
        });
      }
    }

    setShapes(generatedShapes);
  }, [dimensions]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute"
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
              opacity: 0,
            }}
            animate={{
              y: [0, -8, 0],
              skewY: shape.skew,
              opacity: shape.opacity,
            }}
            transition={{
              y: {
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.8,
                delay: shape.delay * 0.5,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}