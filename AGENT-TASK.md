# Agent Task: interlex.work

## Context

You are working on a new standalone project:

- New project workspace: [D:\Data\OneDrive\source\www\interlex.work](D:/Data/OneDrive/source/www/interlex.work)
- Current live product reference project: [D:\Data\OneDrive\source\www\InteLex](D:/Data/OneDrive/source/www/InteLex)

This is a separate repo by design. Do not merge it back into the existing `InteLex` app.

## Product Role

`interlex.work` is not a replacement for `interlex.kz` or `interlex.ge`.

It should work as:
- a neutral brand hub for `InterLex`
- a clean entry point for region selection
- a routing layer into the market-specific sites

Current market-specific sites:
- `interlex.kz` = RU-first market site
- `interlex.ge` = EN-first market site

## Current State

The new project already exists and has a validated bootstrap:

- Main page: [src/app/page.tsx](D:/Data/OneDrive/source/www/interlex.work/src/app/page.tsx)
- Layout and metadata: [src/app/layout.tsx](D:/Data/OneDrive/source/www/interlex.work/src/app/layout.tsx)
- Global styling: [src/app/globals.css](D:/Data/OneDrive/source/www/interlex.work/src/app/globals.css)

Project state files:
- [TODO.md](D:/Data/OneDrive/source/www/interlex.work/TODO.md)
- [MEMORY.md](D:/Data/OneDrive/source/www/interlex.work/MEMORY.md)
- [PROJECT-RESUME.md](D:/Data/OneDrive/source/www/interlex.work/PROJECT-RESUME.md)
- [STATUS-LOG.md](D:/Data/OneDrive/source/www/interlex.work/STATUS-LOG.md)

The existing InterLex reference project and its status files:
- Root project: [D:\Data\OneDrive\source\www\InteLex](D:/Data/OneDrive/source/www/InteLex)
- [TODO.md](D:/Data/OneDrive/source/www/InteLex/TODO.md)
- [MEMORY.md](D:/Data/OneDrive/source/www/InteLex/MEMORY.md)
- [PROJECT-RESUME.md](D:/Data/OneDrive/source/www/InteLex/PROJECT-RESUME.md)
- [STATUS-LOG.md](D:/Data/OneDrive/source/www/InteLex/STATUS-LOG.md)

Important application reference from the current site:
- App root: [D:\Data\OneDrive\source\www\InteLex\interlex](D:/Data/OneDrive/source/www/InteLex/interlex)
- Main homepage reference: [page.tsx](D:/Data/OneDrive/source/www/InteLex/interlex/src/app/page.tsx)
- Services page reference: [services/page.tsx](D:/Data/OneDrive/source/www/InteLex/interlex/src/app/services/page.tsx)
- Kazakhstan page reference: [kz/page.tsx](D:/Data/OneDrive/source/www/InteLex/interlex/src/app/kz/page.tsx)
- Georgia page reference: [ge/page.tsx](D:/Data/OneDrive/source/www/InteLex/interlex/src/app/ge/page.tsx)

## Non-Negotiable Rules

- Brand name must be written as `InterLex`
- Domain names must stay lowercase: `interlex.work`, `interlex.kz`, `interlex.ge`
- `interlex.work` must remain a separate project
- Do not turn `interlex.work` into a full duplicate of the current market site
- Do not break the role split:
  - `interlex.work` = hub
  - `interlex.kz` = Kazakhstan market site
  - `interlex.ge` = Georgia market site

## What To Use As Reference

Use the current `InteLex` project to borrow:
- brand tone
- positioning
- service language
- market differentiation between Kazakhstan and Georgia

Do not copy blindly:
- the full service-catalog architecture
- the full domain-locale logic
- country-specific execution layers that belong inside `interlex.kz` and `interlex.ge`

## Task

Design and implement the next product layer for `interlex.work`.

Target outcome:
- keep the existing hub homepage
- extend the site into a more complete brand hub
- preserve fast routing into Kazakhstan and Georgia

## Expected Scope

Build the next sensible version of the site with pages such as:
- `About`
- `Cross-border`
- `Contact`

You may adjust page names if you find a better information architecture, but the site must still remain visibly lighter and more global than the current `InteLex` market site.

## UX Direction

The site should feel:
- premium
- international
- editorial
- more brand-led than transactional

The homepage should still make region selection obvious.

## Deliverables

1. Updated information architecture for `interlex.work`
2. Implemented pages and navigation
3. Metadata consistent with `interlex.work`
4. Clean internal links to `interlex.kz` and `interlex.ge`
5. Updated project state files in this repo:
   - `TODO.md`
   - `MEMORY.md`
   - `PROJECT-RESUME.md`
   - `STATUS-LOG.md` if the task is long enough
6. Successful local verification with `npm run build`

## Working Rules

Before making major edits:
- read [TODO.md](D:/Data/OneDrive/source/www/interlex.work/TODO.md)
- read [MEMORY.md](D:/Data/OneDrive/source/www/interlex.work/MEMORY.md)
- read [PROJECT-RESUME.md](D:/Data/OneDrive/source/www/interlex.work/PROJECT-RESUME.md)
- read [STATUS-LOG.md](D:/Data/OneDrive/source/www/interlex.work/STATUS-LOG.md)

When using the current `InteLex` repo as reference:
- inspect structure and content
- reuse positioning logic
- do not port over unnecessary complexity

## Definition Of Done

The task is done when:
- `interlex.work` clearly reads as a global InterLex hub
- the site has more than a single landing screen
- navigation and page hierarchy are coherent
- handoff to `interlex.kz` and `interlex.ge` is still explicit
- `npm run build` passes
- state files are updated
