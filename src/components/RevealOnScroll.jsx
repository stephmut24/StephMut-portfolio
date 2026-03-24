import { motion as Motion } from "motion/react";

/**
 * Scroll-triggered reveal using Motion. Replaces the previous CSS + IntersectionObserver approach.
 */
export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -48px 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Motion.div>
  );
};
