import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container bg-base-100">
      <div className="navbar py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About</a></li>
              <li><a>Skill</a></li>
              <li><a>Portofolio</a></li>
            </ul>
          </div>
          <a className="link no-underline normal-case text-xl"><span className='font-bold'>FRMN.</span>SBGJ</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#about' className='font-bold'>About</a></li>
            <li><a className='font-bold'>Skill</a></li>
            <li><a href='#portofolio' className='font-bold'>Portofolio</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://drive.google.com/file/d/18QE210WUOaUHDx4900JrKp77p7RZfYxr/view?usp=sharing">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn rounded-full btn-primary shadow-primary shadow-2xl">Resume CV</motion.button>
          </a>
        </div>
      </div>
    </div>
  )
}
