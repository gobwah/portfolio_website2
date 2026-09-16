<!-- bmad:context -->
<!-- Verified 2026-09-15 against af5750c9. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## portfolio_website2

Personal portfolio site, live at vincent-dellalibera.netlify.app. Two independent npm projects with no root manifest: `frontend_react` (Create React App 5, React 18, Sass, Framer Motion) and `backend_sanity` (Sanity Studio v5). Site content is authored in the Sanity studio, not in this repo.

## Policy

- Pushing to `master` publishes the live site — Netlify auto-deploys from it. Use a branch when a change is not ready to go live.
- Never commit `.env` or the Sanity API token in it; `frontend_react/.env.example` shows the shape.
- Never hand-edit `frontend_react/build/` or `backend_sanity/dist/` — build output.

## Where things are

- Page sections are one folder each under `frontend_react/src/container/`; `src/App.js` composes them.
- Sanity client and image URL builder: `frontend_react/src/client.js`.
- Content schemas: `backend_sanity/schemas/`, each registered in `schemas/schema.js`.
- Netlify build settings live in the Netlify UI, not in this repo: base `frontend_react`, build `npm run build`, publish `frontend_react/build`. `REACT_APP_SANITY_PROJECT_ID` and `REACT_APP_SANITY_TOKEN` are set there too — a new env var added only locally is silently empty in production.

## Running and verifying

- Run npm commands inside `frontend_react/` or `backend_sanity/`; there is no root `package.json`.
- `frontend_react` needs a local `.env` with `REACT_APP_SANITY_PROJECT_ID` and `REACT_APP_SANITY_TOKEN`; without it the app still builds and renders, but every section comes up empty.
- There are no tests. `npm test` starts the CRA watcher over zero test files — it verifies nothing, so check changes in the browser.

## Conventions that differ from defaults

- A new content type needs three edits, not one: a schema file in `backend_sanity/schemas/`, its registration in `schemas/schema.js`, and a GROQ query in the container that renders it. The schema's `name` is the string the frontend matches on (`*[_type == "works"]`).

<!-- /bmad:context -->
