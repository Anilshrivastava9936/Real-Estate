import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div
         initial={{opacity:0,y:200}}
                transition={{duration:1.5}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
        className='flex flex-col items-center justify-center container 
    mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
            <h1   className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light '>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 '>Passionate About Properties , Dedicated to your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className=''>10+</p>
                            <p className=''>Years of Excellence</p>
                        </div>
                        <div>
                            <p className=''>12+</p>
                            <p className=''>Projects Completed</p>
                        </div>
                        <div>
                            <p className=''>20+</p>
                            <p className=''>Mn Sq Ft Deliverd</p>
                        </div>
                        <div>
                            <p className=''>25+</p>
                            <p className=''>Ongoing Projects</p>
                        </div>

                    </div>
                    <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  eveniet quibusdam laboriosam aspernatur eligendi vero odio dolorum voluptates, at tenetur ab soluta id veniam! Laborum fugit ut quam, distinctio facere reprehenderit nobis asperiores ad assumenda, possimus vel dolore autem perferendis impedit quaerat voluptatum repellendus debitis officia facilis consequuntur vitae enim commodi ea iste. Voluptate, minima accusantium harum id quas voluptates fugit laboriosam cumque quo tempora vel earum.</p>
                    <button className='bg-blue-600 text-white px-2 py-2 rounded'>Learn more</button>

                </div>

            </div>
        </motion.div>
    )
}

export default About