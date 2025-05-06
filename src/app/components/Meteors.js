"use client";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteors = React.useMemo(() => {
    return new Array(number || 20).fill(true).map((_, idx) => {
      const meteorCount = number || 20;
      const position = idx * (800 / meteorCount) - 400;
      
      // Use consistent seeds for random values
      const delay = (idx * 0.25) % 5; // Spreads delays from 0-5s
      const duration = 5 + (idx % 5); // Durations from 5-10s
      
      return {
        position,
        delay,
        duration
      };
    });
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            left: meteor.position + "px",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </motion.div>
  );
};
