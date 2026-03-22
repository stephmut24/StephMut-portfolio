import { RevealOnScroll } from "../RevealOnScroll";
import { TechStackMarquee } from "../TechStackMarquee";

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Tech Stack
          </h2>
          <div className="py-4">
            <TechStackMarquee />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
