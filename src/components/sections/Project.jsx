import { ExternalLink, Github, User, Briefcase } from "lucide-react";

/** Personal projects: set `githubUrl` to your repo (e.g. https://github.com/user/repo); leave "" to hide the GitHub link. */
const personalProjects = [
  {
    id: 1,
    title: "Interno",
    description:
      "Interior design and architecture landing page with responsive layout, sections for services, testimonials, portfolio highlights, and contact.",
    tech: ["Javascript", "Tailwind CSS"],
    status: "completed",
    url: "https://interno-001.netlify.app/",
    githubUrl: "https://github.com/stephmut24/interno",
  },
  {
    id: 2,
    title: "Urgence Care",
    description:
      "Plateforme de gestion des urgences médicales reliant patients, ambulances et hôpitaux. Visualisation des flux en temps réel avec graphes de connaissances (Neo4j).",
    tech: ["React", "Node.js", "MongoDB", "Neo4j"],
    status: "in-progress",
    url: "https://drive.google.com/file/d/1DCUCpIgECKOU0QJ3Hy5Y3RSBEdgc_uLF/view?usp=sharing",
    githubUrl: "https://github.com/stephmut24/LocationApp",
  },
  {
    id: 3,
    title: "CodeCircle",
    description:
      "CodeCircle - an AI-powered coding club platform featuring skill verification, courses, clubs, and hackathons.",
    tech: ["React.js", "Tailwind CSS", "Nest.js", "PostgreSQL"],
    status: "completed",
    url: "https://drive.google.com/file/d/1fJ_fK9M1sPEHFdl5UYxd7PRgWBm3IOhd/view?usp=sharing",
    githubUrl: "",
  },
];

const clientProjects = [
  {
    id: 1,
    title: "CLASSIC ART's International SARL",
    description:
      "Web presence for an international art company: responsive frontend and TypeScript API layer with Node.js and Express.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "TypeScript"],
    status: "completed",
    url: "https://international-art.netlify.app/",
  },
  {
    id: 2,
    title: "Miss Excellence",
    description:
      "Official site built with a React and Tailwind CSS frontend and a Node.js / Express backend.",
    tech: ["Tailwind CSS", "React.js", "Node.js", "Express.js"],
    status: "completed",
    url: "https://missexcellence.org/",
  },
  {
    id: 3,
    title: "BG Bridal Paradise",
    description:
      "Bridal and wedding services site: React and Tailwind CSS frontend with Node.js, Express, and PostgreSQL.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    status: "completed",
    url: "https://bgbridalparadises.com/",
  },
];

function ProjectCard({ project }) {
  const statusStyles = {
    "in-progress": "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20",
    completed: "bg-green-500/10 text-green-400 border border-green-400/20",
  };
  const p = project;
  return (
    <div className="group p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] transition-all duration-300">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
        <span className={`py-1 px-3 rounded-full text-sm ${statusStyles[p.status]}`}>
          {p.status === "completed" ? "Completed" : "In Progress"}
        </span>
      </div>
      <p className="text-gray-400 mb-4">{p.description}</p>
      <div className="flex flex-wrap gap-2 my-4">
        {p.tech.map((tech, key) => {
        const colorVariants = [
          "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
          "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20",
          "bg-teal-500/10 text-teal-400 hover:bg-teal-500/20",
          "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20",
        ];
        return (
          <span key={key} className={`py-1 px-4 rounded-full text-sm transition ${colorVariants[key % colorVariants.length]}`}>
            {tech}
          </span>
        );
      })}
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/5">
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <span className="text-gray-500 text-sm italic">Coming soon</span>
        )}
        {"githubUrl" in p && p.githubUrl ? (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/gh"
          >
            <Github size={16} className="group-hover/gh:scale-105 transition-transform" />
            <span>GitHub</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export const Project = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {/* Personal Projects */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <User size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Personal Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>

            {/* Client Projects */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Briefcase size={20} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Client Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clientProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
