import type { Transition, Variants } from "framer-motion";

/** Ease Out Expo — hard, precise, no bounce. The one curve used everywhere. */
export const EASE_LUXURY: Transition["ease"] = [0.16, 1, 0.3, 1];

export const HOVER_TRANSITION: Transition = {
  duration: 0.25,
  ease: EASE_LUXURY,
};

export const REVEAL_TRANSITION: Transition = {
  duration: 0.7,
  ease: EASE_LUXURY,
};

/** Fade + rise, 24px, no overshoot. Use with whileInView on a single element. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: REVEAL_TRANSITION },
};

/** Parent for staggered lists — pair with `revealVariants` on each child. */
export const staggerContainer = (
  staggerChildren = 0.06,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Spring with zero bounce, for interactive elements (accordions, dots). */
export const springNoBounce: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.45,
};

export const inViewOnce = { once: true, margin: "-80px 0px" } as const;
