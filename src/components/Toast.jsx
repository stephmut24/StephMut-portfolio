import { useEffect } from "react";

export const Toast = ({ message, type = "success", visible, onClose }) => {
  useEffect(() => {
    if (visible && message) {
      const timer = setTimeout(() => onClose?.(), 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, message, onClose]);

  if (!visible || !message) return null;

  const isSuccess = type === "success";
  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
        isSuccess
          ? "bg-green-500/20 border-green-400/30 text-green-100"
          : "bg-red-500/20 border-red-400/30 text-red-100"
      }`}
    >
      <span className="font-medium">
        {isSuccess ? "✓ " : "✗ "}
        {message}
      </span>
    </div>
  );
};
