import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site-config";

const routes = ["", "/about", "/events", "/team", "/contact", "/signup"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
