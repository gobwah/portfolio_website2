import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import { localize, useContentLanguage } from '../../i18n'

import './About.scss'
const About = () => {
    const [abouts, setAbouts] = useState([])
    const lang = useContentLanguage()

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query).then((data) => setAbouts(data))
    }, [])

    return (
        <>
            <h2 className="head-text">
                A little about <span>me</span>
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
