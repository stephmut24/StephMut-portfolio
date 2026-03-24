import { useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import { XSocialIcon } from "./icons/XSocialIcon";
import { useScrollSpy } from "@/hooks";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const activeId = useScrollSpy();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white font-robotoFlex">
            StephMut<span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">.Dev</span>
          </a>

          <button
            type="button"
            className="md:hidden text-white text-3xl cursor-pointer z-40 p-2 -m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            &#9776;
          </button>

          {/*Desktop menu*/}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { href: "#home", label: "Home", id: "home" },
              { href: "#about", label: "About", id: "about" },
              { href: "#experience", label: "Experience", id: "experience" },
              { href: "#tech-stack", label: "Tech", id: "tech-stack" },
              { href: "#skills", label: "Skills", id: "skills" },
              { href: "#certifications", label: "Certifications", id: "certifications" },
              { href: "#projects", label: "Projects", id: "projects" },
              { href: "#contact", label: "Contact", id: "contact" },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors focus:outline-none focus:text-blue-500 ${
                  activeId === link.id
                    ? "text-blue-400 font-medium"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/20">
              <a
                href="https://github.com/stephmut24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[hsl(0,0%,4%)]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/stephane-mugisho-mutarushwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[hsl(0,0%,4%)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/StephMutarushwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[hsl(0,0%,4%)]"
                aria-label="X"
              >
                <XSocialIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
