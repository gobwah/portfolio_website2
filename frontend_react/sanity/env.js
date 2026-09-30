// The project id is public (it also ships in the Studio bundle); only the
// read token is secret, and it is read server-side in src/sanity/fetch.js.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bgu6nodr'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2022-02-01'
