import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { detectLocaleFromHeader, hasLocalePrefix } from "@/lib/locale-routing";
import { localePath } from "@/lib/i18n";

const publicFiles = [
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/site.webmanifest",
];

const localizedSlugs = new Set([
  "/",
  "/about",
  "/cross-border",
  "/contact",
  "/kz",
  "/kz/sez",
  "/kz/aifc",
  "/ge",
  "/ge/vz",
  "/ma",
  "/ma/dd",
  "/investors",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPathname = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (
    normalizedPathname.startsWith("/_next/") ||
    normalizedPathname.startsWith("/api/") ||
    normalizedPathname.includes(".") ||
    publicFiles.some((file) => normalizedPathname === file || normalizedPathname.startsWith(`${file}/`)) ||
    hasLocalePrefix(normalizedPathname) ||
    !localizedSlugs.has(normalizedPathname)
  ) {
    return NextResponse.next();
  }

  const locale = detectLocaleFromHeader(request.headers.get("accept-language"));
  const slug = normalizedPathname === "/" ? "" : normalizedPathname.slice(1);
  const url = request.nextUrl.clone();

  url.pathname = localePath(locale, slug);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
