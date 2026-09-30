'use client'

import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX, HiMoon, HiSun } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useLanguage, LANGUAGES } from '../../i18n'
import { useTheme } from '../../theme'

const Navbar = () => {
    const [toogle, setToogle] = useState(false)
    const { language, setLanguage, t } = useLanguage()
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'
    return (
        <nav className="app__navbar">
            <a className="app__navbar-logo" href="/">
                <img src={images.logo} alt={'logo'} />
            </a>
            <ul className="app__navbar-links">
                {[
                    'home',
                    'about',
                    'work',
                    'skills',
                    'testimonials',
                    'contact',
                ].map((item) => (
                    <li key={`link-${item}`} className="app__flex p-text">
                        <div></div>
                        <a href={`#${item}`} onClick={() => setToogle(false)}>
                            {t(`nav.${item}`)}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className="app__navbar-lang"
                role="group"
                aria-label={t('nav.language')}
            >
                {LANGUAGES.map((lang, index) => (
                    <React.Fragment key={lang}>
                        {index > 0 && <span aria-hidden="true">|</span>}
                        <button
                            type="button"
                            className={lang === language ? 'active' : ''}
                            aria-pressed={lang === language}
                            lang={lang}
                            onClick={() => setLanguage(lang)}
                        >
                            {lang.toUpperCase()}
                        </button>
                    </React.Fragment>
                ))}
            </div>

            <button
                type="button"
                className="app__navbar-theme"
                aria-label={t(isDark ? 'nav.themeToLight' : 'nav.themeToDark')}
                title={t(isDark ? 'nav.themeToLight' : 'nav.themeToDark')}
                onClick={toggleTheme}
            >
                {isDark ? <HiSun /> : <HiMoon />}
            </button>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToogle(true)} />

                {toogle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToogle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setToogle(false)}
                                        >
                                            {t(`nav.${item}`)}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
