import React from 'react'
import { images } from '../../constants'
import './Footer.scss'
import { AppWrap, MotionWrap } from '../../wrapper'

const EMAIL = 'vincent.dellalibera@gmail.com'

const Footer = () => {
    return (
        <>
            <h2 className="head-text">Take a coffee &amp; talk with me</h2>

            <p className="p-text app__footer-intro">
                I&apos;m open to new opportunities and interesting projects. The
                quickest way to reach me is by email.
            </p>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href={`mailto:${EMAIL}`} className="p-text">
                        {EMAIL}
                    </a>
                </div>
            </div>

            <a href={`mailto:${EMAIL}`} className="app__footer-cta">
                Send me an email
            </a>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
