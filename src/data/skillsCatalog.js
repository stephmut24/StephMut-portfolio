/**
 * Single source of truth for Skills section + Tech Stack marquee (tech items only in marquee).
 */

export const SKILLS_GROUPS = [
  {
    title: "Languages",
    iconKey: "languages",
    color: "cyan",
    items: ["Javascript", "Typescript", "Python", "Golang"],
  },
  {
    title: "Frameworks",
    iconKey: "frameworks",
    color: "teal",
    items: ["Node.js", "Nest.js", "React.js", "Express.js"],
  },
  {
    title: "Tools",
    iconKey: "tools",
    color: "amber",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Swagger",
      "Jest",
      "TypeORM",
      "Prisma",
      "Sequelize",
      "VS Code",
    ],
  },
  {
    title: "Platforms",
    iconKey: "platforms",
    color: "blue",
    items: ["Linux", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Render", "Vercel"],
  },
  {
    title: "Soft Skills",
    iconKey: "soft",
    color: "violet",
    items: [
      "Problem-solving",
      "Algorithmic thinking",
      "Clean code mindset",
      "Team collaboration",
      "Communication",
      "Fast learner",
    ],
  },
];

/** Devicon slug -> CDN key used in TECH_LOGOS (TechStackMarquee). Omit entry for text-only items. */
export const MARQUEE_ICON_BY_SKILL = {
  Javascript: "javascript",
  Typescript: "typescript",
  Python: "python",
  Golang: "go",
  "Node.js": "nodejs",
  "Nest.js": "nestjs",
  "React.js": "react",
  "Express.js": "express",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  Postman: "postman",
  Swagger: "openapi",
  Jest: "jest",
  Prisma: "prisma",
  "VS Code": "vscode",
  Linux: "linux",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  Firebase: "firebase",
  Vercel: "vercel",
};
