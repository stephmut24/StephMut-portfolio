import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Urgence Care",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolore id neque qui amet sunt ducimus maiores autem quo dolorem.",
      tech: ["React", "Node.js", "MongoDB", "Neo4j"],
      status: "in-progress",
      url: "https://example.com/urgence-care",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, animations, and contact integration.",
      tech: ["React", "Tailwind", "Vite"],
      status: "in-progress",
      url: "https://stephmut.dev",
    },
    {
      id: 3,
      title: "Interno",
      description:
        "A demo store with shopping cart and mock checkout flow.",
      tech: ["React", "Stripe", "Node.js"],
      status: "completed",
      url: "",
    }, 
    {
      id: 4,
      title: "Data Visualizer",
      description:
        "Interactive charts and network visualizations built with D3 and custom layouts.",
      tech: ["D3", "React"],
      status: "completed",
      url: "https://example.com/data-visualizer",
    },
  ];

  const statusStyles = {
    "in-progress": "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20",
    completed: "bg-green-500/10 text-green-400 border border-green-400/20",
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl text-center mx-auto px-4">
          <h2 className="text-4xl  font-bold m-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/300 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <span className={`py-1 px-3 rounded-full text-sm ${statusStyles[p.status]}`}>
                    {p.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {p.tech.map((tech, key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  ) : (
                    <span className="text-gray-500">Coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
