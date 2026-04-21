# TODO: interlex.work

## Current Status
- [x] Separate Next.js repo exists at `D:\Data\OneDrive\source\www\interlex.work`
- [x] `StatusProject` is active for this workspace
- [x] Base hub homepage was created and validated
- [x] Second product layer implemented for `interlex.work`
- [x] Navigation and supporting pages added: `About`, `Cross-border`, `Contact`
- [x] Multilingual locale routing implemented
- [x] Supported locales added: `en`, `ru`, `zh`, `it`, `fr`, `ka`, `de`, `ar`, `tr`, `es`
- [x] Language switching available as both flag buttons and a dropdown menu
- [x] Metadata aligned with `interlex.work`
- [x] `robots.txt` generated through Next metadata route
- [x] `sitemap.xml` generated through Next metadata route with locale alternates
- [x] Page content strengthened for SEO intent coverage
- [x] Structured data added for organization, website, breadcrumbs, and FAQ
- [x] Browser-language routing added for root and unprefixed core pages
- [x] `x-default` locale alternates added to metadata and sitemap
- [x] Locale-specific Open Graph and Twitter preview images generated
- [x] `manifest.webmanifest` added
- [x] Clean routing maintained to `interlex.kz` and `interlex.ge`
- [x] Local production verification passed via `npm run build`

## Completed In This Session
- [x] Read `TODO.md`, `MEMORY.md`, `PROJECT-RESUME.md`, and `STATUS-LOG.md`
- [x] Reviewed current `interlex.work` app files
- [x] Reviewed relevant Next.js 16 docs from `node_modules/next/dist/docs`
- [x] Reviewed reference pages from `D:\Data\OneDrive\source\www\InteLex\interlex`
- [x] Introduced shared site shell and navigation
- [x] Expanded homepage into a fuller brand hub without duplicating the market sites
- [x] Added standalone pages for `About`, `Cross-border`, and `Contact`
- [x] Realigned the visual design to match the `D:\Data\OneDrive\source\www\InteLex` reference more closely
- [x] Rebuilt the app around locale-based routes under `app/[locale]/...`
- [x] Added multilingual content dictionaries and language switcher
- [x] Added dual language UI: flags plus dropdown selector
- [x] Added `robots.ts` and `sitemap.ts` for SEO baseline
- [x] Added SEO helper layer with keyword-rich descriptions and JSON-LD
- [x] Added visible search-intent and FAQ content to the homepage
- [x] Added `proxy.ts` browser-language detection for `/`, `/about`, `/cross-border`, and `/contact`
- [x] Added `x-default` alternate metadata and sitemap entries
- [x] Added localized Open Graph and Twitter image routes under `app/[locale]/...`
- [x] Added web manifest metadata route
- [x] Updated project state files after implementation

## Remaining Work
- [ ] Prepare deploy notes and production environment details when deployment is in scope
- [ ] Add real intake channels or form handling if live lead capture becomes a product requirement
- [ ] Decide whether to split sitemap strategy later by market, content type, or deployment environment
- [ ] Decide whether social previews later need market-specific copy variants instead of the current brand-level shared composition

## Guardrails
- [x] `interlex.work` remains a neutral brand hub, not a replacement for `interlex.kz` or `interlex.ge`
- [x] `InterLex` brand spelling preserved
- [x] Domain names kept lowercase: `interlex.work`, `interlex.kz`, `interlex.ge`
- [x] Regional execution remains on separate market-specific sites

## Important Files
- `D:\Data\OneDrive\source\www\interlex.work\src\app\page.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\proxy.ts`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\layout.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\page.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\about\page.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\cross-border\page.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\contact\page.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\opengraph-image.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\[locale]\twitter-image.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\app\manifest.ts`
- `D:\Data\OneDrive\source\www\interlex.work\src\lib\i18n.ts`
- `D:\Data\OneDrive\source\www\interlex.work\src\lib\locale-routing.ts`
- `D:\Data\OneDrive\source\www\interlex.work\src\lib\social-image.tsx`
- `D:\Data\OneDrive\source\www\interlex.work\src\components\site-frame.tsx`

## Definition Of Done Check
- [x] `interlex.work` reads as a global InterLex hub
- [x] The site is no longer a single-screen landing page
- [x] Navigation and page hierarchy are coherent
- [x] Handoff to `interlex.kz` and `interlex.ge` is explicit
- [x] `npm run build` passes
- [x] State files are updated
