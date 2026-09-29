import React, { createContext, useContext, useEffect, useState } from 'react'

export const THEMES = ['light', 'dark']
const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

const getStoredTheme = () => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (THEMES.includes(stored)) return stored
    } catch (e) {
        // localStorage can be unavailable (private mode, blocked storage)
    }
    return null
}

const getBrowserTheme = () =>
    window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light'

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {},
    toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState(
        () => getStoredTheme() ?? getBrowserTheme()
    )

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    // Until the visitor picks a theme, keep following the browser's setting
    useEffect(() => {
        const media = window.matchMedia?.(DARK_QUERY)
        if (!media?.addEventListener) return
        const onChange = (e) => {
            if (!getStoredTheme()) setThemeState(e.matches ? 'dark' : 'light')
        }
        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    }, [])

    const setTheme = (next) => {
        setThemeState(next)
        try {
            window.localStorage.setItem(STORAGE_KEY, next)
        } catch (e) {
            // ignore: the choice just won't persist
        }
    }

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
