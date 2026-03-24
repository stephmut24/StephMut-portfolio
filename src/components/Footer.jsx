import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { XSocialIcon } from "./icons/XSocialIcon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-10 border-t border-white/10 bg-black/50 py-12 px-4"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono font-bold text-white font-robotoFlex">
              StephMut<span className="text-blue-500">.Dev</span>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <Mail size={18} />
              <span>Contact</span>
            </a>
            <a
              href="https://github.com/stephmut24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephane-mugisho-mutarushwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/StephMutarushwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X"
            >
              <XSocialIcon size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} StephMut. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Fullstack Developer • Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};
