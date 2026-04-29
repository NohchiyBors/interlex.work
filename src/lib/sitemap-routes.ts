import fs from "fs";
import path from "path";
import { getHubSeoPageSlugs } from "@/lib/hub-seo-pages";

/**
 * Sitemap priority/frequency overrides for specific slugs.
 * All other routes default to { changeFrequency: "monthly", priority: 0.7 }.
 */
export type SitemapRouteConfig = {
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

const routeOverrides: Record<string, SitemapRouteConfig> = {
  "": { changeFrequency: "weekly", priority: 1 },
  "invest-projects": { changeFrequency: "weekly", priority: 0.9 },
  "cross-border": { changeFrequency: "monthly", priority: 0.85 },
  about: { changeFrequency: "monthly", priority: 0.8 },
  contact: { changeFrequency: "monthly", priority: 0.8 },
};

export const defaultRouteConfig: SitemapRouteConfig = {
  changeFrequency: "monthly",
  priority: 0.7,
};

export function getRouteConfig(slug: string): SitemapRouteConfig {
  return routeOverrides[slug] ?? defaultRouteConfig;
}

/**
 * Auto-discovers all static route slugs by scanning src/app/[locale]/ for page.tsx files.
 *
 * Rules:
 *  - The locale root page (src/app/[locale]/page.tsx) yields slug ""
 *  - Subdirectory pages yield their path relative to [locale], e.g. "invest-projects/khorgos"
 *  - Directories whose name starts with "[" are skipped (dynamic segments)
 *  - Hub SEO pages served by [...slug] are collected via getHubSeoPageSlugs() and appended
 */
export function collectRouteSlugs(): string[] {
  const localeDir = path.join(process.cwd(), "src", "app", "[locale]");
  const staticSlugs = scanStaticSlugs(localeDir);
  const hubSlugs = getHubSeoPageSlugs();
  return [...staticSlugs, ...hubSlugs];
}

function scanStaticSlugs(localeDir: string): string[] {
  const slugs: string[] = [];

  function walk(dir: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip dynamic param segments like [locale], [...slug], [id], etc.
        if (entry.name.startsWith("[")) continue;
        walk(path.join(dir, entry.name));
      } else if (entry.name === "page.tsx") {
        const relative = path.relative(localeDir, dir);
        // path.relative returns "" when dir === localeDir (root locale page)
        slugs.push(relative === "" ? "" : relative.split(path.sep).join("/"));
      }
    }
  }

  walk(localeDir);
  return slugs;
}
