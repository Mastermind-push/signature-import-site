"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { inViewOnce, revealVariants, staggerContainer } from "@/lib/motion";

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  staggerChildren?: number;
  delayChildren?: number;
};

/** Wraps a list of children; pair with <StaggerItem> for each entry. */
export function StaggerGroup({
  staggerChildren = 0.06,
  delayChildren = 0,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      variants={staggerContainer(staggerChildren, delayChildren)}
      {...props}
    />
  );
}

export function StaggerItem(props: HTMLMotionProps<"div">) {
  return <motion.div variants={revealVariants} {...props} />;
}
