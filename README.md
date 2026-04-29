## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Form Email Delivery

The contact form and investment project modal send submissions through `src/app/api/contact/route.ts`. The brief request form sends through `src/app/api/brief/route.ts` and attaches the selected `.docx` file. Both routes deliver by SMTP.

Set these variables in `.env.local`:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
CONTACT_TO_EMAIL=hello@interlex.work
CONTACT_FROM_EMAIL=no-reply@interlex.work
CONTACT_BCC_EMAIL=
```

Notes:

- `CONTACT_TO_EMAIL` may contain several recipients separated by commas or semicolons.
- `CONTACT_FROM_EMAIL` should be allowed by your SMTP provider.
- If your SMTP server uses implicit TLS, set `SMTP_PORT=465` and `SMTP_SECURE=true`.
- Turnstile uses `NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY` in the browser and `CF_TURNSTILE_SECRET` on the server.
- For production deployment details and smoke tests, see `DEPLOY-NOTES.md`.
