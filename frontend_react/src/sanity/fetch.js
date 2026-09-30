import 'server-only'
import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '../../sanity/env'

// REACT_APP_SANITY_TOKEN is the name already set on Netlify for the CRA site
const token =
    process.env.SANITY_API_READ_TOKEN || process.env.REACT_APP_SANITY_TOKEN

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token,
})

const QUERY = `{
    "abouts": *[_type == "abouts"],
    "works": *[_type == "works"],
    "skills": *[_type == "skills"],
    "experiences": *[_type == "experiences"],
    "testimonials": *[_type == "testimonials"],
    "brands": *[_type == "brands"]
}`

const EMPTY = {
    abouts: [],
    works: [],
    skills: [],
    experiences: [],
    testimonials: [],
    brands: [],
}

// One request for every section. If Sanity is unreachable the page still
// renders with empty sections, as the CRA site did.
export const getSiteContent = async () => {
    try {
        const data = await client.fetch(QUERY)
        return { ...EMPTY, ...data }
    } catch (error) {
        console.error('Sanity fetch failed:', error.message)
        return EMPTY
    }
}
