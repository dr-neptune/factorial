"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Roboto_Slab } from "next/font/google";

/**
 * Use Roboto Slab in the typography below.
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
  // We know 50 steps with scaleX=25 => max X ~1250 for full width
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
    <div className="flex flex-col items-center justify-start min-h-screen">

      {/*
        A container to hold both the animation as a background
        and the ad-read text overlapping it.
        Add padding-top to push it down from the top bar.
      */}
      <div className="relative w-full min-h-[250px] pt-16">
        {/* The animation as a background */}
        <div className="absolute inset-0 z-0">
          <motion.svg
            className="w-full h-full"
            viewBox="0 0 1250 250"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <rect x="0" y="0" width="1250" height="250" />

            {paths.map((pathD, i) => (
              <motion.path
                key={i}
                d={pathD}
                stroke={colors[i]}
                strokeWidth="2"
                fill="none"
                style={{ opacity: 0.25 }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            ))}
          </motion.svg>
        </div>

        {/*
          The ad-read text container with an overlap:
          push it upward a bit so it overlaps the background.
        */}
        <div
          className={`${robotoSlab.className} relative z-10 max-w-2xl mx-auto px-4 sm:px-8 text-center pt-10 pb-6`}
          style={{ marginTop: "-40px" }}
        >
          <p className="text-2xl sm:text-3xl font-semibold leading-snug text-foreground mb-4">
            We make <span className="text-pink-500">Factorial</span>—a groundbreaking platform
            forged to ignite a{" "}
            <span className="text-pink-500">new era of investing</span>{" "}
            <span role="img" aria-label="rocket">🚀</span>. This is your laboratory{" "}
            <span role="img" aria-label="test tube">🧪</span> for financial ideas: rapidly design,
            rigorously test, and effortlessly launch quant-powered investment
            strategies that were once out of reach.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Born at the cutting edge of finance and technology,{" "}
            <span className="text-pink-500">Factorial</span> fuels a{" "}
            <span className="text-pink-500">global community</span>{" "}
            <span role="img" aria-label="globe">🌎</span> of bold investors, agile advisors, and
            creative quants reshaping markets on their own terms. The future of
            investing isn't just calculated—
            <span className="text-pink-500">it's crafted</span>{" "}
            <span role="img" aria-label="sparkles">✨</span>. Come build it with us.
          </p>
        </div>
      </div>

      {/*
        Modern, minimalistic, asymmetrical content area with padding
        to separate it from the text above
      */}
      <div className="relative w-screen mt-24 px-4 sm:px-8">
        {/*
          Background color block behind placeholders,
          extends ~50px top/bottom, from left=40% to the right edge of the screen
        */}
        <div
          className="absolute z-0 top-[-50px] bottom-[-50px] right-0"
          style={{ left: "40%", backgroundColor: "rgba(236, 72, 153, 0.2)" }}
        />
        {/*
          The container that holds our two placeholders.
        */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 z-10">
          {/* Left content area (larger) -> pic1.webp in /public */}
          <div className="flex-1 relative bg-white shadow-lg aspect-[16/9] overflow-hidden">
            <img
              src="/pic1.webp"
              alt="Large placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content area (smaller) -> pic2.webp in /public */}
          <div className="relative w-full md:w-[300px] flex-shrink-0 h-auto">
            <div className="bg-white shadow-lg aspect-[4/3] overflow-hidden">
              <img
                src="/pic2.webp"
                alt="Smaller placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
