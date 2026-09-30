## portfolio_website2

Personal portfolio site, live at vincent-dellalibera.netlify.app. One npm project in `frontend_react/` (the folder name predates the move to Next.js): Next.js 16 App Router, React 19, Sass, Framer Motion, with the Sanity Studio (v6, via next-sanity) embedded at `/studio`. There is no root manifest. Site content is authored in that studio, not in this repo.

## Policy

- Pushing to `master` publishes the live site — Netlify auto-deploys from it. Use a branch when a change is not ready to go live.
- Never commit `.env*` files or the Sanity API token; `frontend_react/.env.example` shows the shape. The token is read server-side only (`src/sanity/fetch.js`); never give it a `NEXT_PUBLIC_` name.
- Never hand-edit `frontend_react/.next/` — build output.

## Where things are

- Page sections are one folder each under `frontend_react/src/container/`; `src/app/[lang]/page.jsx` fetches all Sanity content on the server and passes it to them as props. They are client components (`'use client'`).
- Routes: `src/app/[lang]/` renders the site as `/en` and `/fr`; `src/proxy.js` serves `/` from one of them (language cookie, else `Accept-Language`). `src/app/studio/` is the Studio, with its own root layout.
- Sanity: `sanity.config.js` (Studio), `sanity.cli.js` (CLI), `sanity/env.js` (project id and dataset), `sanity/schemas/` (content types, each registered in `schema.js`). Image URL builder: `src/client.js`.
- Netlify build settings: `frontend_react/netlify.toml` overrides the UI (publish `.next`); the UI base directory stays `frontend_react`. The token env var on Netlify is still named `REACT_APP_SANITY_TOKEN`, which `src/sanity/fetch.js` accepts alongside `SANITY_API_READ_TOKEN`. A new env var added only locally is silently empty in production.

## Running and verifying

- Run npm commands inside `frontend_react/`.
- `npm run dev` or `npm run build && npm start`. The project id defaults to the real one, so no `.env` is needed unless the dataset is private. If Sanity is unreachable, the build still succeeds and every section comes up empty.
- There are no tests: check changes in the browser.
- The Studio only logs in from origins listed under API > CORS origins (with credentials) on sanity.io/manage.

## Conventions that differ from defaults

- A new content type needs three edits, not one: a schema file in `sanity/schemas/`, its registration in `sanity/schemas/schema.js`, and a key in the GROQ query in `src/sanity/fetch.js` passed to the container that renders it. The schema's `name` is the string the query matches on (`*[_type == "works"]`).
- Published content reaches the site within 60 seconds (`revalidate = 60` in `src/app/[lang]/page.jsx`), not instantly.
