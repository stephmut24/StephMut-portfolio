import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import VariableProximity from "../motions/VariableProximity";
import GradientText from "../motions/GradientText"

export const Home = () => {
  const containerRef = useRef(null);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div ref={containerRef} className="inline-block mb-4">
            <VariableProximity
              label={"Hi, I'm StephMut.Dev"}
              className="text-2xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight font-robotoFlex"
              fromFontVariationSettings="'wght' 200, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={200}
              falloff="exponential"
            />
          </div>
          
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-lg mb-8 max-w-xl mx-auto gap-8"
          >
            A passionate web developer, I design modern websites and
            applications tailored to real needs and focused on user experience.
            I enjoy continuous learning and taking on new challenges to deliver
            creative and efficient solutions. Explore my portfolio to discover
            my projects and skills.
          </GradientText>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover: -translate-y-0.5 hover: shadow-[0_0)15px_rgba(59, 130,2246, 0.4 )]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover: -translate-y-0.5 hover: shadow-[0_0)15px_rgba(59, 130,2246, 0.2 )] hover:bg-blue-500/10 "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
