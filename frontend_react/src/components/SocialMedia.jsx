'use client'

import React from 'react'
import { BsLinkedin } from 'react-icons/bs'

const handleClick = (url) => {
    window.open(url, '_blank')
}

function SocialMedia() {
    return (
        <div className="app__social">
            <div
                onClick={() =>
                    handleClick('https://www.malt.fr/profile/vincentdellalibera')
                }
            >
                <span className="app__social-malt" aria-label="Malt" />
            </div>
            <div
                onClick={() =>
                    handleClick(
                        'https://www.linkedin.com/in/vincent-dellalibera/'
                    )
                }
            >
                <BsLinkedin />
            </div>
        </div>
    )
}

export default SocialMedia
