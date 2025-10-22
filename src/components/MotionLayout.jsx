import { AnimatePresence, motion as Motion } from "framer-motion";
import PropTypes from "prop-types";

export default function MotionLayout({ children, className = "" }) {
  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -8 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.45,
  };

  return (
    <AnimatePresence mode="wait">
      <Motion.div
        key="app-root"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={className}
      >
        {children}
      </Motion.div>
    </AnimatePresence>
  );
}

MotionLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
