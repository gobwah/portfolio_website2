import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { useLanguage } from '../i18n'

const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        const { t } = useLanguage()
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className="app__wrapper app__flex">
                    <Component />

                    <div className="copyright">
                        <p className="p-text">
                            © {new Date().getFullYear()} Vincent Della-Libera
                        </p>
                        <p className="p-text">{t('copyright.rights')}</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        )
    }

export default AppWrap
