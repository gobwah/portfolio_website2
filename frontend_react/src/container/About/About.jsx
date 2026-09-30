'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import localize from '../../i18n/localize'
import { useLanguage } from '../../i18n'

import './About.scss'
const About = ({ abouts = [] }) => {
    const { t, language: lang } = useLanguage()

    return (
        <>
            <h2 className="head-text">
                {t('about.title')} <span>{t('about.titleHighlight')}</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img
                            src={urlFor(about.imgUrl)}
                            alt={localize(about, 'title', lang)}
                        />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {localize(about, 'title', lang)}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {localize(about, 'description', lang)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
