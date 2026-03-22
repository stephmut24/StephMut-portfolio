/**
 * Horizontal infinite marquee displaying tech stack logos.
 * Logos sweep from left to right continuously.
 */

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH_LOGOS = {
  react: `${DEVICON_CDN}/react/react-original.svg`,
  nextjs: `${DEVICON_CDN}/nextjs/nextjs-original.svg`,
  tailwind: `${DEVICON_CDN}/tailwindcss/tailwindcss-original.svg`,
  typescript: `${DEVICON_CDN}/typescript/typescript-original.svg`,
  nodejs: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,
  express: `${DEVICON_CDN}/express/express-original.svg`,
  nestjs: `${DEVICON_CDN}/nestjs/nestjs-original.svg`,
  python: `${DEVICON_CDN}/python/python-original.svg`,
  mongodb: `${DEVICON_CDN}/mongodb/mongodb-original.svg`,
  postgresql: `${DEVICON_CDN}/postgresql/postgresql-original.svg`,
};

const STACK_CONFIG = [
  { name: "React", icon: "react" },
  { name: "Next", icon: "nextjs" },
  { name: "TailwindCSS", icon: "tailwind" },
  { name: "Typescript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "Nest.js", icon: "nestjs" },
  { name: "Python", icon: "python" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
];

const ACCENT_BORDERS = [
  "hover:border-blue-500/30",
  "hover:border-cyan-500/30",
  "hover:border-teal-500/30",
  "hover:border-amber-500/30",
];

function TechItem({ name, icon, index }) {
  const src = TECH_LOGOS[icon];
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-3 hover:bg-white/10 transition-colors ${ACCENT_BORDERS[index % ACCENT_BORDERS.length]}`}
      title={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-8 w-8 object-contain"
          loading="lazy"
        />
      ) : null}
      <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TechStackMarquee() {
  const items = [...STACK_CONFIG, ...STACK_CONFIG];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {items.map((tech, index) => (
          <TechItem key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} index={index} />
        ))}
      </div>
    </div>
  );
}
