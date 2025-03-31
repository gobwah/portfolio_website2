import React from 'react'
import { images } from '../../constants'
import './Footer.scss'
import { AppWrap, MotionWrap } from '../../wrapper'

const EMAIL = 'vincent.dellalibera@gmail.com'
const TEL = 'soon'

const Footer = () => {
    return (
        <>
            <h2 className="head-text">Take a coffee & talk with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href={`mailto:${EMAIL}`} className="p-text">
                        {EMAIL}
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:" className="p-text">
                        {TEL}
                    </a>
                </div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
