import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Testimonial.scss'

const Testimonial = () => {
    const [brands, setBrands] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const testimonialsQuery = '*[_type == "testimonials"]'
        const brandsQuery = '*[_type == "brands"]'

        client.fetch(testimonialsQuery).then((data) => {
            setTestimonials(data)
        })

        client.fetch(brandsQuery).then((data) => {
            setBrands(data)
        })
    }, [])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <>
            {testimonials.length ? (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img
                            src={urlFor(currentTestimonial.imgurl)}
                            alt="testimonial"
                        />
                        <div className="app__testimonial-content">
                            <p className="p-text">
                                {currentTestimonial.feedback}
                            </p>
                            <div>
                                <h4 className="bold-text">
                                    {currentTestimonial.name}
                                </h4>
                                <h5 className="bold-text">
                                    {currentTestimonial.company}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === 0
                                        ? testimonials.length - 1
                                        : currentIndex - 1
                                )
                            }
                        >
                            <HiChevronLeft />
                        </div>
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === testimonials.length - 1
                                        ? 0
                                        : currentIndex + 1
                                )
                            }
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            ) : (
                <div className="app__testimonial-soon">
                    <p className="p-text">Comming soon</p>
                    <div className="dot-elastic"></div>
                </div>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands
                    .sort((brand1, brand2) =>
                        brand1.name.localeCompare(brand2.name)
                    )
                    .map((brand, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            key={`${index}-${brand.id}`}
                        >
                            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                        </motion.div>
                    ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'testimonials',
    'app__primarybg'
)
