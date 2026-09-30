# To see global README.md

Click [here](https://github.com/gobwah/portfolio_website2)

# Portfolio site (Next.js + embedded Sanity Studio)

- `npm run dev`: site on http://localhost:3000, Studio on http://localhost:3000/studio
- `npm run build` then `npm start`: production build
- `npx sanity <command>`: Sanity CLI (configured by `sanity.cli.js`)

Content schemas live in `sanity/schemas/`. Pages fetch their content on the server (`src/sanity/fetch.js`) and refresh every 60 seconds.
