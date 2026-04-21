# MEMORY: interlex.work

## Project Identity
- Project: `interlex.work`
- Workspace: `D:\Data\OneDrive\source\www\interlex.work`
- Product role: global brand hub for `InterLex`
- Related market domains: `interlex.kz`, `interlex.ge`

## Stable Product Decisions
- `interlex.work` is a standalone repo and must stay separate from the current `InteLex` application
- `interlex.work` is not a market site and must not become a duplicate of the Kazakhstan or Georgia product layers
- The homepage must keep region selection obvious
- Supporting pages may exist, but the site should remain lighter and more global than the market-specific properties
- Kazakhstan remains the RU-first track and Georgia remains the EN-first track
- The hub now supports these locales: `en`, `ru`, `zh`, `it`, `fr`, `ka`, `de`, `ar`, `tr`, `es`
- The default fallback locale remains `en`

## Implemented Architecture
- Locale-aware shell with persistent header, footer, and language switcher lives in `src/components/site-frame.tsx`
- Interactive language switcher UI lives in `src/components/language-switcher.tsx`
- Translation dictionaries, locale config, and metadata helper live in `src/lib/i18n.ts`
- Accept-Language negotiation for root and unprefixed core pages lives in `proxy.ts` and `src/lib/locale-routing.ts`
- Main routes now live under `app/[locale]/...`
- Root and unprefixed core pages now auto-route through `proxy.ts`; `src/app/page.tsx` remains a safe `/en` fallback
- Route metadata is static per locale and built with a shared helper
- `x-default` alternate links point to the EN route
- Social previews are generated as locale-scoped file-based image routes under `app/[locale]/opengraph-image.tsx` and `app/[locale]/twitter-image.tsx`
- All locale pages are statically rendered and confirmed by `npm run build`

## Design Direction
- Visual language: aligned to the existing `InteLex` design system direction
- Palette: light surface backgrounds, dark navy primary, muted gray text, gold secondary accent
- Tone: brand-led rather than transactional
- Homepage purpose: orient, explain the split, route into the correct market site
- Internal site pages explain the brand and routing logic without importing the full service-catalog architecture

## Technical Notes
- Stack: `Next.js 16.2.4`, App Router, TypeScript, Tailwind CSS 4
- Locale layout is defined in `src/app/[locale]/layout.tsx`
- Route pages export static metadata via `buildMetadata(locale, ...)`
- No CMS, forms backend, or analytics layer is implemented yet
- Locale switching currently uses explicit subpaths, not domain-based language routing
- Locale switching preserves the current route when changing language
- `robots.txt` is generated from `src/app/robots.ts`
- `sitemap.xml` is generated from `src/app/sitemap.ts` and includes localized alternate URLs
- `manifest.webmanifest` is generated from `src/app/manifest.ts`
- SEO helper content and structured data live in `src/lib/seo.ts`
- JSON-LD rendering helper lives in `src/components/json-ld.tsx`

## Do Not Lose
- Brand spelling must stay `InterLex`
- Domain names must stay lowercase
- `interlex.work` must continue acting as a hub and routing layer
- Country-specific execution detail belongs on `interlex.kz` and `interlex.ge`
