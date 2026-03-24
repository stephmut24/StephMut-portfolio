import { Github, Linkedin } from "lucide-react";
import { XSocialIcon } from "./icons/XSocialIcon";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-transform transition-opacity duration-300 ease-in-out
        ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        About
      </a>
      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Experience
      </a>
      <a
        href="#tech-stack"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Tech
      </a>
      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Skills
      </a>
      <a
        href="#certifications"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Certifications
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 focus:outline-none focus:text-blue-400
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
      >
        Contact
      </a>
      <div className="flex gap-4 mt-6">
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
      </div>
    </div>
  );
};
