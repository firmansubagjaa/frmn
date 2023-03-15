import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import HTML from "../../assets/img/svg/html.svg"
import CSS from "../../assets/img/svg/css3.svg"
import JavaScript from "../../assets/img/svg/javascript.svg"
import Tailwind from "../../assets/img/svg/tailwind.svg"
import Reactlogo from "../../assets/img/svg/React.svg"

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
                src={require('../../assets/img/png/sidang.jpg')} className="max-w-[90vw] md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt="Firman Subagja" />
            </figure>
            <div>
              <div className="mt-12 lg:mt-0">
                <fieldset className='border-2 border-solid border-primary bg-primary w-48 lg:w-60'></fieldset>
                <div className='-mt-4 w-75 lg:w-96 text-end'>
                  <h2 className='uppercase text-primary font-bold'>firman subagja</h2>
                </div>
                {/* <div className='border-2 border-solid border-primary w-72'></div> */}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold w-full pr-28">
                Creative Thinker Minimalism Lover
              </h1>
              <p className='py-6'>Passionate about crafting beautiful digital experiences with HTML, CSS and Javascript. Always on the lookout for new challenges and learning opportunities.</p>
              <a href="https://drive.google.com/file/d/18QE210WUOaUHDx4900JrKp77p7RZfYxr/view?usp=sharing">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-primary rounded-full btn-block lg:btn-wide shadow-primary shadow-2xl">Resume CV</motion.button>
              </a>
              <div className="flex flex-wrap justify-center lg:justify-start mt-12">
                <div className=''>
                  <img src={HTML} alt="HTML" className='h-16' />
                </div>
                <div className=''>
                  <img src={CSS} alt="HTML" className='h-16' />
                </div>
                <div className=''>
                  <img src={JavaScript} alt="HTML" className='h-16' />
                </div>
                <div className=''>
                  <img src={Tailwind} alt="HTML" className='h-16' />
                </div>
                <div className=''>
                  <img src={Reactlogo} alt="HTML" className='h-16' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
