"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { inViewOnce, REVEAL_TRANSITION } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

/** Fades a block in and lifts it 24px on scroll into view. Runs once. */
export function Reveal({ delay = 0, variants, ...props }: RevealProps) {
  const withDelay: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { ...REVEAL_TRANSITION, delay } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={variants ?? withDelay}
      {...props}
    />
  );
}
