/**
 * SEO — source unique pour SeoHead (react-helmet-async).
 * Pour un autre domaine : définir VITE_SITE_URL dans .env (ex. https://stephmut.dev)
 */

export function getSiteUrl() {
  const raw = import.meta.env?.VITE_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  return "https://stephmut24.github.io/StephMut-portfolio";
}

export function getCanonicalUrl() {
  return `${getSiteUrl()}/`;
}

export const SEO = {
  title: "StephMut — Fullstack Developer Portfolio",
  shortTitle: "StephMut",
  description:
    "Fullstack developer based in Kigali, Rwanda. Portfolio: React, Node.js, NestJS, PostgreSQL, backend APIs, and client projects. Open to opportunities.",
  keywords:
    "StephMut, Stephane Mugisho Mutarushwa, Fullstack Developer, Software Engineer, React, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB, Web Development, Kigali, Rwanda, Portfolio",
  author: "Stephane Mugisho Mutarushwa",
  twitterHandle: "@StephMutarushwa",
  locale: "en_US",
  lang: "en",
  ogImagePath: "/og-image.png",
  sameAs: [
    "https://github.com/stephmut24",
    "https://www.linkedin.com/in/stephane-mugisho-mutarushwa/",
    "https://x.com/StephMutarushwa",
  ],
};

export function getOgImageUrl() {
  return `${getSiteUrl()}${SEO.ogImagePath}`;
}

export function buildJsonLd() {
  const url = getCanonicalUrl();
  const image = getOgImageUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: SEO.shortTitle,
        description: SEO.description,
        inLanguage: SEO.lang,
        publisher: { "@id": `${url}#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: SEO.title,
        description: SEO.description,
        inLanguage: SEO.lang,
        isPartOf: { "@id": `${url}#website` },
        mainEntity: { "@id": `${url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: SEO.author,
        alternateName: SEO.shortTitle,
        url,
        image: { "@type": "ImageObject", url: image },
        jobTitle: "Fullstack Developer",
        description: SEO.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kigali",
          addressCountry: "RW",
        },
        sameAs: SEO.sameAs,
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "REST APIs",
          "Web Development",
        ],
      },
    ],
  };
}
