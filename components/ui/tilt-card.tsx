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

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

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
          className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 via-blue-600/30 to-indigo-600/30 dark:from-violet-500/40 dark:via-blue-500/40 dark:to-indigo-500/40 blur-3xl rounded-xl -z-10 transition-opacity duration-500"
        />

        {/* --- CARD CONTENT --- */}
        <div style={{ transform: "translateZ(20px)" }} className="h-full bg-white dark:bg-slate-900/80 rounded-xl overflow-hidden">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}