import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { div, img } from 'motion/react-client'
import { motion } from "motion/react"


const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'><h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>
                Customers  <span className='underline underline-offset-4 under font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those Who found Home With Us</p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center ' >
                        <img src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>
                            {testimonial.name}
                        </h2><p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, inex) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600' >{testimonial.text}</p>
                    </div>
                ))}
            </div>



        </motion.div>

    )
}

export default Testimonials