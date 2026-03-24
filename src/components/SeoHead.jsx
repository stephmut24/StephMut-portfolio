import { Helmet } from "react-helmet-async";
import {
  SEO,
  getCanonicalUrl,
  getOgImageUrl,
  buildJsonLd,
} from "@/config/seo";

export function SeoHead() {
  const canonical = getCanonicalUrl();
  const ogImage = getOgImageUrl();
  const jsonLd = buildJsonLd();

  return (
    <Helmet htmlAttributes={{ lang: SEO.lang }}>
      <title>{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta name="author" content={SEO.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SEO.shortTitle} />
      <meta property="og:locale" content={SEO.locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SEO.shortTitle} — Fullstack Developer Portfolio`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO.twitterHandle} />
      <meta name="twitter:creator" content={SEO.twitterHandle} />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
