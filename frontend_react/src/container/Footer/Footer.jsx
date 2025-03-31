import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const EMAIL = 'vincent.dellalibera@gmail.com'
const TEL = 'soon'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        setLoading(true)
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact).then(() => {
            setLoading(false)
            setIsFormSubmitted(true)
        })
    }

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
