import { useState, useEffect } from "react";

const SECTION_IDS = ["home", "about", "tech-stack", "skills", "certifications", "projects", "contact"];

/**
 * Returns the ID of the section currently in view.
 * Used for navbar active state (scroll spy).
 */
export function useScrollSpy() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      let current = "home";
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          const threshold = offsetTop - viewportHeight / 3;
          if (scrollY >= threshold) {
            current = SECTION_IDS[i];
            break;
          }
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeId;
}
