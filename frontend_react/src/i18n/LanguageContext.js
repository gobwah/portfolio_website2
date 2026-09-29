import React, { createContext, useContext, useEffect, useState } from 'react'
import en from './en'
import fr from './fr'

const dictionaries = { en, fr }
export const LANGUAGES = Object.keys(dictionaries)
const STORAGE_KEY = 'language'

const getInitialLanguage = () => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (LANGUAGES.includes(stored)) return stored
    } catch (e) {
        // localStorage can be unavailable (private mode, blocked storage)
    }
    const browser = (navigator.language || '').slice(0, 2).toLowerCase()
    return LANGUAGES.includes(browser) ? browser : 'en'
}

const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
    t: (key) => en[key] ?? key,
})

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage)

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, language)
        } catch (e) {
            // ignore: the choice just won't persist
        }

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
