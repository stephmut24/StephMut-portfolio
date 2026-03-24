import { motion as Motion } from "motion/react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Award } from "lucide-react";

const certStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const certCard = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const certificationsData = [
  {
    name: "Backend Development with Node.js",
    issuer: "Solvit Africa",
    date: "February 2026",
    url: "https://drive.google.com/file/d/1pb2ZN9XV91a3tTp5f5Se4KvHq_l_qSFR/view?usp=sharing",
  },
  {
    name: "Introduction to AI Agents",
    issuer: "DataCamp",
    date: "February 2026",
    url: "https://drive.google.com/file/d/1LcZY8M9ffCjKQkSfoItEGVzNYtfUUton/view?usp=sharing",
  },
  {
    name: "Introduction to Python",
    issuer: "DataCamp",
    date: "February 2026",
    url: "https://drive.google.com/file/d/1mFZxr3K1Pxh2P42p3_FOWNq7hOt1j_Q2/view?usp=sharing",
  },
  {
    name: "Backend Development Intern",
    issuer: "HNG",
    date: "November 2025",
    url: "https://drive.google.com/file/d/1XM6QQGLNU2T_R8Jkppi4bsE0LHxI76Br/view?usp=sharing",
  },
  {
    name: "Web development",
    issuer: "USD's United Student Developer",
    date: "September 2025",
    url: "https://drive.google.com/file/d/1mH8oJCHSam1t9yPvnOJbsxXFOsdQjAt_/view?usp=sharing",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold m-8 md:m-12 text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-robotoFlex">
            Certifications
          </h2>
          <Motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={certStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {certificationsData.map((cert, i) => (
              <Motion.div
                key={i}
                variants={certCard}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex gap-4 p-6 rounded-xl border border-white/10 hover:border-cyan-500/20 hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Award size={24} className="text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{cert.name}</h3>
                  <p className="text-cyan-400/90 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 text-sm mt-2 inline-block hover:underline"
                    >
                      Voir le certificat →
                    </a>
                  )}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
