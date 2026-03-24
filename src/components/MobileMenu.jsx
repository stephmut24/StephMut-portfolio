import { AnimatePresence, motion as Motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { XSocialIcon } from "./icons/XSocialIcon";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech-stack", label: "Tech" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen ? (
        <Motion.div
          key="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Motion.button
            type="button"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            &times;
          </Motion.button>
          {NAV_LINKS.map((link, i) => (
            <Motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-white my-4 focus:outline-none focus:text-blue-400"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                delay: 0.06 + i * 0.04,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {link.label}
            </Motion.a>
          ))}
          <Motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            <a
              href="https://github.com/stephmut24"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephane-mugisho-mutarushwa/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/StephMutarushwa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="X"
            >
              <XSocialIcon size={22} />
            </a>
          </Motion.div>
        </Motion.div>
      ) : null}
    </AnimatePresence>
  );
};
