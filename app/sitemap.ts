import type { MetadataRoute } from "next";
import { posts, projects } from "@/lib/content";
import { languages, localizedPath } from "@/lib/i18n";
import { pageSlugs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = languages.flatMap((lang) => [
    ...pageSlugs.map((page) => `${site.url}${localizedPath(lang, page)}`),
    ...projects.map((project) => `${site.url}${localizedPath(lang, `portfolio/${project.slug}`)}`),
    ...posts.map((post) => `${site.url}${localizedPath(lang, `blog/${post.slug}`)}`)
  ]);

  return urls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: url.includes("/portfolio") ? 0.9 : 0.7
  }));
}
