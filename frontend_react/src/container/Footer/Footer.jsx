import React from 'react'
import { images } from '../../constants'
import './Footer.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { useLanguage } from '../../i18n'

const EMAIL = 'vincent.dellalibera@gmail.com'

const Footer = () => {
    const { t } = useLanguage()
    return (
        <>
            <h2 className="head-text">{t('footer.title')}</h2>

            <p className="p-text app__footer-intro">{t('footer.intro')}</p>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href={`mailto:${EMAIL}`} className="p-text">
                        {EMAIL}
                    </a>
                </div>
            </div>

            <a href={`mailto:${EMAIL}`} className="app__footer-cta">
                {t('footer.cta')}
            </a>
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)
