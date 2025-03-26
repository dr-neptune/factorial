"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Roboto_Slab } from "next/font/google";

/**
 * Use Roboto Slab in the animation for the word "Factorial".
 */
const robotoSlab = Roboto_Slab({
  weight: "700",
  subsets: ["latin"],
});

/**
 * Generate an array of points representing a basic Geometric Brownian Motion (GBM)
 */
function generateGBM(
  steps = 50,
  S0 = 100,
  mu = 0.05,
  sigma = 0.2,
  dt = 1
): Array<{ x: number; y: number }> {
  const points = [];
  let S = S0;

  for (let i = 0; i < steps; i++) {
    // Simple random normal
    const z =
      Math.sqrt(-2.0 * Math.log(Math.random())) *
      Math.cos(2.0 * Math.PI * Math.random());
    // GBM update formula
    S =
      S *
      Math.exp(
        (mu - 0.5 * sigma * sigma) * dt + sigma * Math.sqrt(dt) * z
      );
    points.push({ x: i, y: S });
  }

  return points;
}

/**
 * Create an SVG path "d" attribute string from the array of points.
 */
function createPath(points: Array<{ x: number; y: number }>) {
  if (!points || points.length === 0) return "";
  // Adjust these values to position and scale your curves
  const scaleX = 25;
  const offsetY = 200;
  const scaleY = 0.8;

  let d = `M ${points[0].x * scaleX} ${offsetY - points[0].y * scaleY}`;

  for (let i = 1; i < points.length; i++) {
    d += ` L ${points[i].x * scaleX} ${
      offsetY - points[i].y * scaleY
    }`;
  }
  return d;
}

export default function Home() {
  // We want 5 lines, each a separate GBM path, all starting at the same S0.
  const colors = [
    "#ec4899", // pink
    "#fbffa7",
    "#ff764d",
    "#b1c5ff",
    "#b6ffc0",
  ];

  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    // Generate 5 lines
    const newPaths: string[] = colors.map(() => {
      const data = generateGBM(50, 100);
      return createPath(data);
    });
    setPaths(newPaths);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-0 sm:p-0">
      <motion.svg
        width="800"
        height="400"
        className="bg-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Define a dotted pattern in the SVG */}
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#333333" />
          </pattern>
        </defs>
        {/* Slightly wider dotted rectangle so lines can extend beyond the top or sides */}
        <rect
          x="0"
          y="0"
          width="900"
          height="300"
          fill="url(#dots)"
        />

        {/* Animate each path with Framer Motion */}
        {paths.map((pathD, i) => (
          <motion.path
            key={i}
            d={pathD}
            stroke={colors[i]}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        ))}

        {/* Logo (text) in the middle of the framer animation using Roboto Slab */}
        <motion.text
          textAnchor="middle"
          dominantBaseline="middle"
          x="50%"
          y="40%"
          className={robotoSlab.className}
          fill="#ec4899"
          fontSize="72"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
         F☄️ctorial
        </motion.text>
      </motion.svg>
    </div>
  );
}
