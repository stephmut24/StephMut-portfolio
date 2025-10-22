import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Project } from "./components/sections/Project";
import {Contact} from "./components/sections/Contact"
import "./index.css";
import MotionLayout from "./components/MotionLayout";
import { motion as Motion } from "framer-motion";
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
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
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

        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          {/* Staggered entrance for main sections */}
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <Motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 2 } }}>
              <Home />
            </Motion.div>
            <Motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <About />
            </Motion.div>
            <Motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <Project />
            </Motion.div>
            <Motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
              <Contact />
            </Motion.div>
          </Motion.div>
        </div>
      </MotionLayout>
    </>
  );
}

export default App;
