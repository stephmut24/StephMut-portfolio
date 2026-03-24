/**
 * Horizontal infinite marquee — same tech items as the Skills section (no soft skills).
 */

import { MARQUEE_ICON_BY_SKILL, SKILLS_GROUPS } from "../data/skillsCatalog";

const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH_LOGOS = {
  javascript: `${DEVICON_CDN}/javascript/javascript-original.svg`,
  typescript: `${DEVICON_CDN}/typescript/typescript-original.svg`,
  python: `${DEVICON_CDN}/python/python-original.svg`,
  go: `${DEVICON_CDN}/go/go-original.svg`,
  react: `${DEVICON_CDN}/react/react-original.svg`,
  nodejs: `${DEVICON_CDN}/nodejs/nodejs-original.svg`,
  express: `${DEVICON_CDN}/express/express-original.svg`,
  nestjs: `${DEVICON_CDN}/nestjs/nestjs-original.svg`,
  git: `${DEVICON_CDN}/git/git-original.svg`,
  github: `${DEVICON_CDN}/github/github-original.svg`,
  docker: `${DEVICON_CDN}/docker/docker-original.svg`,
  postman: `${DEVICON_CDN}/postman/postman-original.svg`,
  openapi: `${DEVICON_CDN}/openapi/openapi-original.svg`,
  jest: `${DEVICON_CDN}/jest/jest-plain.svg`,
  prisma: `${DEVICON_CDN}/prisma/prisma-original.svg`,
  vscode: `${DEVICON_CDN}/vscode/vscode-original.svg`,
  linux: `${DEVICON_CDN}/linux/linux-original.svg`,
  postgresql: `${DEVICON_CDN}/postgresql/postgresql-original.svg`,
  mysql: `${DEVICON_CDN}/mysql/mysql-original.svg`,
  mongodb: `${DEVICON_CDN}/mongodb/mongodb-original.svg`,
  firebase: `${DEVICON_CDN}/firebase/firebase-plain.svg`,
  vercel: `${DEVICON_CDN}/vercel/vercel-original.svg`,
};

function buildStackConfig() {
  return SKILLS_GROUPS.filter((g) => g.title !== "Soft Skills").flatMap((g) =>
    g.items.map((name) => ({
      name,
      icon: MARQUEE_ICON_BY_SKILL[name] ?? null,
    })),
  );
}

const STACK_CONFIG = buildStackConfig();

const ACCENT_BORDERS = [
  "hover:border-blue-500/30",
  "hover:border-cyan-500/30",
  "hover:border-teal-500/30",
  "hover:border-amber-500/30",
];

function TechItem({ name, icon, index }) {
  const src = icon ? TECH_LOGOS[icon] : undefined;
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
