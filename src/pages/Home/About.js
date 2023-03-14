import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
export default function About() {
  const scrollRef = useRef(null)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.7, backIn: [0.17, 0.67, 0.83, 0.67] }}
      className="container">
      <div className="hero flex items-center my-64 flex-col lg:flex-row">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={require('../../assets/img/png/wisuda.jpg')} className="max-w-[90vw] md:max-w-md lg:max-w-lg rounded-lg shadow-2xl object-cover" alt="Firman Subagja" />
        <div id='about' className='pl-0 lg:pl-10 mt-14'>
          <h1 className="text-5xl font-bold"> <Typewriter
            options={{
              strings: [`About Me`],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          <p className='py-6 text-justify'>Hello, my name is Firman Subagja, you can call me Firman. I graduated from D3 Telecommunications Technology at the most famous private university in southern Bandung, namely Telkom University from 2017 to 2021. for now I live in the city of Bandung</p>
          <p className='py-1 text-justify'>For more than 1 year I have been a learn by doing and wanted to switch careers and had ambitions to become a front end developer by participating in several trainings from Kominfo, namely the Vacation School Graduate Academy in the position of Junior Web developer. There I learned about HTML, CSS, basic Javascript, MySQL, and the PHP Programming Language and have taken competency certification from the National Professional Certification Agency (BNSP) as a Junior Web Developer with satisfactory results and passed the quickest during the competency test session compared to participants who currently taking a competency exam.</p>
          <div className="py-6 text-justify">To finalize and adjust the hard skills needed in the industrial world, I took part in one of the bootcamps, namely fazztrack, where I learned a lot, one of which was to deepen javascript. For the Front End, I learned about ReactJS, NextJS, and React Native and for the Back End, I learned about NodeJS, ExpressJS, and postgreSQL with satisfactory results at index B.</div>
        </div>
      </div>
    </motion.section>
  )
} 