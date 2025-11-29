"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Smooth out the mouse movements
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // 3. Calculate Rotation (Tilt)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // 4. Calculate Backlight Position (Opposite to mouse for parallax)
  const backlightX = useTransform(mouseX, [-0.5, 0.5], ["-20%", "20%"]);
  const backlightY = useTransform(mouseY, [-0.5, 0.5], ["-20%", "20%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXRelative = e.clientX - rect.left;
    const mouseYRelative = e.clientY - rect.top;

    const xPct = (mouseXRelative / width) - 0.5;
    const yPct = (mouseYRelative / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="relative h-full w-full flex items-center justify-center"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-full w-full transition-all duration-200 ease-linear",
          className
        )}
      >
        {/* --- BACKLIGHT GLOW --- */}
        <motion.div
          style={{
            x: backlightX,
            y: backlightY,
            opacity: isHovered ? 1 : 0,
            transform: "translateZ(-50px)",
          }}
          // Light Mode: Slightly darker green/teal with low opacity for a "colored shadow" look
          // Dark Mode: Bright emerald/teal with higher opacity for a "neon glow" look
          className="absolute -inset-4 bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-emerald-600/30 dark:from-emerald-500/50 dark:via-teal-500/50 dark:to-emerald-500/50 blur-3xl rounded-xl -z-10 transition-opacity duration-500"
        />

        {/* --- CARD CONTENT --- */}
        <div style={{ transform: "translateZ(20px)" }} className="h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}