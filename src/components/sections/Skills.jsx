import { motion as Motion } from "motion/react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Code2, Layers, Wrench, Database, MessageCircle } from "lucide-react";
import { SKILLS_GROUPS } from "../../data/skillsCatalog";

const ICON_BY_KEY = {
  languages: Code2,
  frameworks: Layers,
  tools: Wrench,
  platforms: Database,
  soft: MessageCircle,
};

const skillsData = SKILLS_GROUPS.map((g) => ({
  title: g.title,
  icon: ICON_BY_KEY[g.iconKey],
  color: g.color,
  items: g.items,
}));

const colorClasses = {
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  teal: "bg-teal-500/10 border-teal-500/20 text-teal-400",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
};

const skillsStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const skillCard = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Skills
          </h2>
          <Motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={skillsStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skillsData.map((group, i) => {
              const Icon = group.icon;
              const colorClass = colorClasses[group.color];
              return (
                <Motion.div
                  key={i}
                  variants={skillCard}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors"
                >
                  <div className={`inline-flex p-2.5 rounded-lg border mb-4 ${colorClass}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-gray-400 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </Motion.div>
              );
            })}
          </Motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
