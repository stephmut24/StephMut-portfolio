import { RevealOnScroll } from "../RevealOnScroll";
import { MapPin, Calendar, Code2, Sparkles } from "lucide-react";

const stats = [
  { value: "2+", label: "Years", color: "from-blue-500 to-cyan-400" },
  { value: "Fullstack", label: "Specialization", color: "from-cyan-400 to-teal-400" },
  { value: "Kigali", label: "Based", color: "from-amber-400 to-orange-500" },
];

const valueTags = [
  "Clean Code",
  "User-Focused",
  "Problem Solver",
  "Team Player",
  "Continuous Learner",
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            About Me
          </h2>
          <p className="text-gray-500 text-sm md:text-base -mt-6 mb-4 font-medium max-w-md mx-auto">
            Building digital experiences that matter.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group cursor-default transition-transform duration-200 hover:scale-105"
              >
                <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent block`}>
                  {stat.value}
                </span>
                <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto text-left">
            {/* Left: Profile */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative group/avatar mb-6">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-blue-500/30 blur-sm opacity-60 group-hover/avatar:opacity-80 transition-opacity" />
                <div className="relative w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Code2 size={40} className="text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">StephMut Dev</h3>
              <p className="text-cyan-400/90 mt-1 text-sm">Fullstack Developer</p>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin size={14} className="flex-shrink-0 text-cyan-500/60" />
                  Kigali, Rwanda
                </p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Calendar size={14} className="flex-shrink-0 text-cyan-500/60" />
                  2+ years experience
                </p>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 px-5 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-0.5"
                >
                  Get in touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block border border-white/20 py-2.5 px-5 rounded-lg text-sm hover:bg-white/5 hover:border-cyan-500/30 transition-all"
                >
                  Résumé
                </a>
              </div>
            </div>

            {/* Right: Bio + tags */}
            <div className="lg:col-span-3 space-y-5">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/20 transition-colors">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400" />
                  Overview
                </h4>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  Software Engineering graduate with a strong foundation in programming,
                  algorithms, and data structures. I deliver clean, maintainable code and
                  user-focused solutions. Adaptable and committed to continuous learning,
                  I thrive in collaborative environments and am ready to contribute to
                  meaningful projects.
                </p>
                <p className="mt-4 text-sm text-cyan-400/90 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to opportunities
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {valueTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300/90 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
