'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import en from './en'
import fr from './fr'
import { LANGUAGES, LANGUAGE_COOKIE } from './languages'

const dictionaries = { en, fr }
const STORAGE_KEY = 'language'
const ONE_YEAR = 60 * 60 * 24 * 365

const getStoredLanguage = () => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (LANGUAGES.includes(stored)) return stored
    } catch (e) {
        // localStorage can be unavailable (private mode, blocked storage)
    }
    return null
}

const hasLanguageCookie = () =>
    document.cookie.split('; ').some((c) => c.startsWith(`${LANGUAGE_COOKIE}=`))

const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
    t: (key) => en[key] ?? key,
})

// The server picks the first language (cookie, else browser setting, see
// the rewrites in next.config.mjs) so the page arrives already translated.
export const LanguageProvider = ({ initialLanguage = 'en', children }) => {
    const [language, setLanguage] = useState(initialLanguage)

    // Visitors who chose a language on the CRA site only have it in
    // localStorage: honour it once, the cookie takes over from then on.
    useEffect(() => {
        const stored = getStoredLanguage()
        if (stored && stored !== initialLanguage && !hasLanguageCookie()) {
            setLanguage(stored)
        }
    }, [initialLanguage])

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, language)
        } catch (e) {
            // ignore: the choice just won't persist
        }
        document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=${ONE_YEAR}; samesite=lax`

        const dict = dictionaries[language]
        document.documentElement.lang = language
        document.title = dict['meta.title']
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', dict['meta.description'])
    }, [language])

    const t = (key) => dictionaries[language][key] ?? en[key] ?? key

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
