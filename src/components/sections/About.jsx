import { RevealOnScroll } from "../RevealOnScroll";
import { MapPin, Calendar, GraduationCap, Briefcase, Code2 } from "lucide-react";

const educationData = [
  {
    degree: "Software Development Program",
    institution: "A2SV Ethiopia",
    location: "Remote",
    period: "2025 – Present",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "ULPGL Goma",
    location: "Goma, DRC",
    period: "2021 – 2025",
  },
];

const workExperienceData = [
  {
    role: "Software Engineering Intern",
    company: "Bittwok Technology Ltd",
    period: "July 2025 – Present",
  },
  {
    role: "Intern",
    company: "Initiam",
    period: "June – July 2025",
  },
];

const stats = [
  { value: "2+", label: "Years", color: "from-blue-500 to-cyan-400" },
  { value: "Fullstack", label: "Specialization", color: "from-cyan-400 to-teal-400" },
  { value: "Kigali", label: "Based", color: "from-amber-400 to-orange-500" },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            About Me
          </h2>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent block`}>
                  {stat.value}
                </span>
                <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
            {/* Left: Profile */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Code2 size={40} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">StephMut Dev</h3>
              <p className="text-gray-400 mt-1">Fullstack Developer</p>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin size={14} />
                  Kigali, Rwanda
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Calendar size={14} />
                  2+ years experience
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-5 rounded text-sm font-medium hover:opacity-90 transition"
                >
                  Get in touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block border border-white/20 py-2.5 px-5 rounded text-sm hover:bg-white/5 transition"
                >
                  Résumé
                </a>
              </div>
            </div>

            {/* Right: Bio + Experience + Education */}
            <div className="lg:col-span-3 space-y-10 text-left">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Overview
                </h4>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  Software Engineering graduate with a strong foundation in programming,
                  algorithms, and data structures. I deliver clean, maintainable code and
                  user-focused solutions. Adaptable and committed to continuous learning,
                  I thrive in collaborative environments and am ready to contribute to
                  meaningful projects.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Experience
                </h4>
                <div className="space-y-5">
                  {workExperienceData.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded flex items-center justify-center ${i === 0 ? "bg-cyan-500/20" : "bg-teal-500/20"}`}>
                        <Briefcase size={18} className={i === 0 ? "text-cyan-400" : "text-teal-400"} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{item.role}</h5>
                        <p className="text-blue-400/90 text-sm">{item.company}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{item.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Education
                </h4>
                <div className="space-y-5">
                  {educationData.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded flex items-center justify-center ${i === 0 ? "bg-amber-500/20" : "bg-orange-500/20"}`}>
                        <GraduationCap size={18} className={i === 0 ? "text-amber-400" : "text-orange-400"} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{item.degree}</h5>
                        <p className="text-blue-400/90 text-sm">{item.institution}</p>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {item.location} · {item.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
