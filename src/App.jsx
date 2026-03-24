import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import "./App.css";
import { SeoHead } from "./components/SeoHead";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { TechStack } from "./components/sections/TechStack";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Project } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import "./index.css";
import MotionLayout from "./components/MotionLayout";
import Particles from "./components/motions/Particles";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Particles configuration: colors and responsive count
  const particleColors = ["#ff7a18", "#af002d", "#319197"];
  const [particleCount, setParticleCount] = useState(200);

  useEffect(() => {
    // reduce particle count on small screens for performance
    const updateCount = () => {
      if (window.innerWidth < 640) setParticleCount(60);
      else if (window.innerWidth < 1024) setParticleCount(140);
      else setParticleCount(300);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);
  return (
    <>
      <SeoHead />
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <LoadingScreen key="loading-screen" onComplete={() => setIsLoaded(true)} />
        ) : null}
      </AnimatePresence>
      <MotionLayout className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 relative overflow-hidden`}>

        {/* Particles background (full-viewport, behind content) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={particleColors}
            particleCount={particleCount}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        <main className="relative z-10" role="main">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Home />
          <About />
          <Experience />
          <TechStack />
          <Skills />
          <Certifications />
          <Project />
          <Contact />
          <Footer />
        </main>
      </MotionLayout>
    </>
  );
}

export default App;
