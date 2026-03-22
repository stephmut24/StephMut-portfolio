import { RevealOnScroll } from "../RevealOnScroll";
import { Award } from "lucide-react";

const certificationsData = [
  {
    name: "Software Development Program",
    issuer: "A2SV Ethiopia",
    date: "2025",
    url: "",
  },
  {
    name: "Exemple: Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "—",
    url: "",
  },
  {
    name: "Exemple: JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "—",
    url: "",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl border border-white/10 hover:border-cyan-500/20 hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] transition-all"
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
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
