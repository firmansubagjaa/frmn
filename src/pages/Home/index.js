import React from 'react'
import Navbar from '../../components/navbar'
import Ability from './Ability'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import Portofolio from './Portofolio'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Ability /> */}
      <Portofolio />
      <Footer />
    </>

  )
}
