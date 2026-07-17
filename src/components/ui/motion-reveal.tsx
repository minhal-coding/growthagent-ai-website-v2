"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export function MotionReveal({ children, className, delay = 0, y = 18 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("ga-motion-safe", className)}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ hidden: {}, shown: { transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.075 } } }}
    >
      {Children.map(children, (child) => (
        <motion.div className="ga-motion-safe" variants={reduceMotion ? undefined : { hidden: { opacity: 0, y: 14 }, shown: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } } }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function GlowCard({ children, className, tone = "teal" }: { children: ReactNode; className?: string; tone?: "teal" | "gold" }) {
  return (
    <div
      className={cn("ga-glow-card", tone === "gold" ? "ga-glow-card-gold" : "ga-glow-card-teal", className)}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
      }}
    >
      {children}
    </div>
  );
}
