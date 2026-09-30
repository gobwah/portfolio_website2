import { NextResponse } from 'next/server'
import { LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_COOKIE } from './i18n/languages'

// "/" is served from the pre-rendered /en or /fr page: the visitor's saved
// choice first, else their browser's preferred language, as on the CRA site.
const pickLanguage = (request) => {
    const saved = request.cookies.get(LANGUAGE_COOKIE)?.value
    if (LANGUAGES.includes(saved)) return saved

    const browser = (request.headers.get('accept-language') || '')
        .slice(0, 2)
        .toLowerCase()
    return LANGUAGES.includes(browser) ? browser : DEFAULT_LANGUAGE
}

export function proxy(request) {
    const url = request.nextUrl.clone()
    url.pathname = `/${pickLanguage(request)}`
    return NextResponse.rewrite(url)
}

export const config = {
    matcher: '/',
}
