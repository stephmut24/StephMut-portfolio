import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl text-center mx-auto px-4">
          <h2 className="text-4xl  font-bold m-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/300 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Urgence Care</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolore id neque qui amet sunt ducimus maiores autem quo dolorem.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {["React", "Node.js", "MongoDB", "Neo4j"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/300 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Urgence Care</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolore id neque qui amet sunt ducimus maiores autem quo dolorem.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {["React", "Node.js", "MongoDB", "Neo4j"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/300 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Urgence Care</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolore id neque qui amet sunt ducimus maiores autem quo dolorem.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {["React", "Node.js", "MongoDB", "Neo4j"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/300 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Urgence Care</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                dolore id neque qui amet sunt ducimus maiores autem quo dolorem.
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {["React", "Node.js", "MongoDB", "Neo4j"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
