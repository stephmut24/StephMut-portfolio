import { RevealOnScroll } from "../RevealOnScroll";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperienceData = [
  {
    role: "Backend Developer Intern",
    company: "SOLVIT AFRICA",
    period: "12/2025 – Present",
    location: "Kigali, Rwanda",
    description: "Design and implementation of scalable backend systems with Express.js, NestJS. REST APIs, Docker, testing.",
  },
  {
    role: "Backend Developer Intern",
    company: "HNG-Tech",
    period: "09/2025 – 11/2025",
    location: "Remote",
    description: "Project-driven backend internship. Collaborating with global peers to build real-world scalable applications.",
  },
  {
    role: "FullStack Developer",
    company: "Bittwok Technologie Ltd",
    period: "07/2025 – 10/2025",
    location: "Kigali, Rwanda",
    description: "MERN stack development. Caching, JWT auth, collaboration with senior developers on production projects.",
  },
];

const educationData = [
  {
    degree: "BSc in Software Engineering",
    institution: "Université Libre des Pays des Grands Lacs (ULPGL)",
    location: "Goma, DRC",
    period: "2021 – 2025",
    coursework: "Programming Fundamentals, Data Structures & Algorithms, Software Engineering, Database Systems, Operating Systems, Computer Networks, Computer Architecture, Web & Mobile Development.",
  },
  {
    degree: "Software Engineer",
    institution: "Africa to Silicon Valley (A2SV)",
    location: "Remote",
    period: "2025 – Present",
    description: "Intensive program in data structures, algorithms, and real-world problem solving. Backend engineering with Go: scalable APIs, performance optimization, distributed systems.",
  },
  {
    degree: "Backend Developer",
    institution: "United Students Developers (USD)",
    location: "",
    period: "",
    description: "Intensive coding academy in backend and full-stack development. Real-world applications, team collaboration, scalable and maintainable solutions.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Briefcase size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {workExperienceData.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-white/10 hover:border-cyan-500/20 transition-all bg-white/[0.02]"
                  >
                    <h4 className="font-semibold text-white">{item.role}</h4>
                    <p className="text-cyan-400 text-sm mt-0.5">{item.company}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.period}</p>
                    {item.location && (
                      <p className="text-gray-500 text-xs mt-0.5">{item.location}</p>
                    )}
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <GraduationCap size={20} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-white/10 hover:border-amber-500/20 transition-all bg-white/[0.02]"
                  >
                    <h4 className="font-semibold text-white">{item.degree}</h4>
                    <p className="text-cyan-400 text-sm mt-0.5">{item.institution}</p>
                    {(item.location || item.period) && (
                      <p className="text-gray-500 text-xs mt-1">
                        {[item.location, item.period].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {item.coursework && (
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                        <span className="text-gray-500">Relevant Coursework:</span> {item.coursework}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
