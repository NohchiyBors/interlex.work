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

const localizedSlugs = new Set(["/", "/about", "/cross-border", "/contact"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".") ||
    publicFiles.some((file) => pathname === file || pathname.startsWith(`${file}/`)) ||
    hasLocalePrefix(pathname) ||
    !localizedSlugs.has(pathname)
  ) {
    return NextResponse.next();
  }

  const locale = detectLocaleFromHeader(request.headers.get("accept-language"));
  const slug = pathname === "/" ? "" : pathname.slice(1);
  const url = request.nextUrl.clone();

  url.pathname = localePath(locale, slug);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
