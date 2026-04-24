## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Email Delivery

The contact form sends submissions through the server-side route `src/app/api/contact/route.ts` and delivers them by SMTP.

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
