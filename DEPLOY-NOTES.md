# Deploy Notes

## Current Verified Build

- Last local verification: `npm run lint` and `npm run build`
- Expected generated routes: `239`
- Runtime: Next.js on Node.js, container port `3000`
- Default branch in this workspace: `master`

## Required Production Environment

Set these values in the deployment runtime:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_AUTH=true
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=hello@interlex.work
CONTACT_FROM_EMAIL=no-reply@interlex.work
CONTACT_BCC_EMAIL=
CF_TURNSTILE_SECRET=
NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY=
NEXT_PUBLIC_GSC_VERIFICATION=
NEXT_PUBLIC_YANDEX_VERIFICATION=
NEXT_PUBLIC_BING_VERIFICATION=
```

`NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY` is a build-time value. In Docker/Coolify it must be passed as a build argument, not only as a runtime env var.

## Staging Mailpit

`docker-compose.yml` includes a `mailserver` service based on Mailpit. It is useful for staging because no email leaves the container network.

For production, use an external SMTP relay and set:

```bash
SMTP_HOST=<provider host>
SMTP_PORT=587
SMTP_SECURE=false
SMTP_AUTH=true
SMTP_USER=<provider user>
SMTP_PASS=<provider password>
```

Use `SMTP_PORT=465` and `SMTP_SECURE=true` only for implicit TLS providers.

## Smoke Tests After Deploy

1. Open `/ru/contact`, submit a valid contact inquiry, and confirm the InterLex notification arrives at `CONTACT_TO_EMAIL`.
2. Confirm the client autoreply arrives at the submitter address and uses `CONTACT_FROM_EMAIL`.
3. Open `/ru/briefs`, request one brief, and confirm the requester receives the `.docx` attachment.
4. Open one project page under `/ru/invest-projects/...`, submit the project modal, and confirm the lead arrives through `/api/contact`.
5. With Turnstile enabled, confirm forms cannot submit before the widget returns a token.
6. Check `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, and one localized page source for correct `hreflang` and `lang`.

## Rollback

Keep the previous successful image or commit available in the deployment platform. Roll back if SMTP delivery fails in production and cannot be fixed by environment variables alone.
