import React, { useState, useEffect } from 'react'
import { Tooltip as ReactToolTip } from 'react-tooltip'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import localize from '../../i18n/localize'
import useContentLanguage from '../../i18n/useContentLanguage'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [experience, setExperience] = useState([])
    const lang = useContentLanguage()

    useEffect(() => {
        const queryExperience = '*[_type == "experiences"]'
        const querySkills = '*[_type == "skills"]'

        client.fetch(queryExperience).then((data) => {
            setExperience(data)
        })

        client.fetch(querySkills).then((data) => {
            setSkills(data)
        })
    }, [])

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills
                        ?.sort((skill1, skill2) =>
                            skill1.name.localeCompare(skill2.name)
                        )
                        .map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="app__skills-item app__flex"
                                key={skill.name}
                            >
                                <div
                                    className="app__flex"
                                    style={{ backgroundColor: skill.bgColor }}
                                >
                                    <img
                                        src={urlFor(skill.icon)}
                                        alt={skill.name}
                                    />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        ))}
                </motion.div>

                <motion.div className="app__skills-exp">
                    {experience
                        ?.sort((exp1, exp2) => exp1.year - exp2.year)
                        .map((experience) => (
                            <motion.div
                                className="app__skills-exp-item"
                                key={experience.year}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">
                                        {experience.year}
                                    </p>
                                </div>
                                <motion.div className="app__skills-exp-works">
                                    {experience.works.map((work) => (
                                        <div key={work.name}>
                                            <motion.div
                                                whileInView={{
                                                    opacity: [0, 1],
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="app__skills-exp-work"
                                                data-tooltip-id={work.name}
                                                data-tooltip-content={localize(
                                                    work,
                                                    'desc',
                                                    lang
                                                )}
                                            >
                                                <h4 className="bold-text">
                                                    {localize(
                                                        work,
                                                        'name',
                                                        lang
                                                    )}
                                                </h4>
                                                <p className="p-text">
                                                    {work.company}
                                                </p>
                                            </motion.div>
                                            <ReactToolTip
                                                id={work.name}
                                                place="top"
                                                effect="solid"
                                                arrowColor="#fff"
                                                className="skills-tooltip"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
)
