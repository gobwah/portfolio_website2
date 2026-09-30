// "/" is served from the pre-rendered /en or /fr page: the visitor's saved
// choice (cookie set by the language switch) first, else their browser's
// preferred language. Plain rewrites rather than a proxy, so Netlify serves
// them from its CDN routing.
const toLanguage = (lang, has) => ({
    source: '/',
    has,
    destination: `/${lang}`,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return {
            beforeFiles: [
                toLanguage('fr', [
                    { type: 'cookie', key: 'language', value: 'fr' },
                ]),
                toLanguage('en', [
                    { type: 'cookie', key: 'language', value: 'en' },
                ]),
                toLanguage('fr', [
                    { type: 'header', key: 'accept-language', value: 'fr.*' },
                ]),
                { source: '/', destination: '/en' },
            ],
        }
    },
}

export default nextConfig
