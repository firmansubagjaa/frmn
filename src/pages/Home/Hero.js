import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <>
      <section className=" flex justify-center items-center mt-12">
        <div className="container">
          <motion.div
            className="hero-content flex-col justify-center lg:flex-row-reverse"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
          >
            <figure className='w-full flex justify-center'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={require('../../assets/img/png/sidang.jpg')} className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt="Firman Subagja" />
            </figure>
            <div>
              <div className="mt-12 lg:mt-0">
                <fieldset className='border-2 border-solid border-primary w-48 lg:w-60'></fieldset>
                <div className='-mt-4 w-75 lg:w-96 text-end'>
                  <h2 className='uppercase text-primary font-semibold'>firman subagja</h2>
                </div>
                {/* <div className='border-2 border-solid border-primary w-72'></div> */}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold w-full pr-36">
                Creative Thinker Minimalism Lover
              </h1>
              <p className='py-6'>Passionate about crafting beautiful digital experiences with HTML, CSS and Javascript. Always on the lookout for new challenges and learning opportunities.</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary rounded-full btn-wide shadow-primary shadow-2xl">Resume CV</motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
