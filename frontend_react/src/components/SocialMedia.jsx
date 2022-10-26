import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const handleClick = (url) => {
    window.open(url, '_blank')
}

function SocialMedia() {
    return (
        <div className="app__social">
            <div onClick={() => handleClick('https://github.com/gobwah')}>
                <BsGithub />
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
