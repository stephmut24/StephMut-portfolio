import { useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Motion.div
      className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
    >
      <Motion.div
        className="mb-4 text-4xl font-mono font-bold"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
        <span className="animate-blink ml-1"> | </span>
      </Motion.div>
      <Motion.div
        className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden"
        initial={{ opacity: 0, scaleX: 0.6 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="w-[40px] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </Motion.div>
    </Motion.div>
  );
};
