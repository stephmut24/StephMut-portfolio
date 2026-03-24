import { useEffect } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

export const Toast = ({ message, type = "success", visible, onClose }) => {
  useEffect(() => {
    if (visible && message) {
      const timer = setTimeout(() => onClose?.(), 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, message, onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <AnimatePresence>
        {visible && message ? (
          <Motion.div
            role="alert"
            aria-live="polite"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={`pointer-events-auto px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border max-w-[min(100%,28rem)] ${
              isSuccess
                ? "bg-green-500/20 border-green-400/30 text-green-100"
                : "bg-red-500/20 border-red-400/30 text-red-100"
            }`}
          >
            <span className="font-medium">
              {isSuccess ? "✓ " : "✗ "}
              {message}
            </span>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
