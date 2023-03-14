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
          <a href='https://doc-0k-ao-docs.googleusercontent.com/docs/securesc/vjl67f97md9hmu5i7oijkerrufi36o9t/qea7c84d4f88udflbvb24lu7iiheeg23/1678812450000/11258709872982021182/11258709872982021182/18QE210WUOaUHDx4900JrKp77p7RZfYxr?e=download&ax=AB85Z1AQ08BXm8P7FuijuNn3lzhhXkBlyi3Sfl8JAwqJJY0-dDtEO-r7--Bo6bMdeTDbhHmHB9neutlhbUQi5gDeH8bJvJeVSeLBu9w7l3cYKGIY9bxVpHEPLAPdn6600IBE96bxl_1l3g4gLaqPeRQwfKjY-GU-f41VGbp_MAcd2uydX0i7xcbuJcLG_hj-3Eac_t7HJSB-n6Sa6Nz34WsHvuNoTaaj9rFWrLSz-ggHNx8Kibu0ebH3Yd2Rr6Pe1Rxkp6WQJyOBmKzBSEcC6a7mkirlN1562ez3UV5EJehY8BfOEIDls0gD1bJqii-pMl4GP6ANuQ2s7ydAVHi8az_p5Z34-M--qodkWzDZ5aW1R7y_q65qgpTg9h7lV1p0uRWKd3KYomh2YMFsp2MqJPBbaA7JTs92ZcT6hkYh0YVG2p30-gSO-o-mBi8k6a72B2HYHN3T8mp6a2-BtkxHUDNnc2eXOvrRbcglHIxmSfd8vb4c3X2D0dHrrevWvCfvlGj7Ya_yIc_luo5M9qdR4ZyO1L93D7fAc3-B_Fbqfz_Ju22Hb9MtH8oGe6yl35pA6aRxp94O8n56oAaTQtkXNANuSXdobHu5BTbDMICNhbHLwQLvWQQZTBE5GL_mGI-3WW2JEMEEJ7lEz05nyIXSSyK2QVd5hLT9Kff9KNPoTr7hYeipNAFAHlcPIo6MxOfzgbw1Cz03HNAnxHkRm-IChxbvUdrkEApTaaYRiYlyI_kMlxDoGVhaPhOghCRJ3av29iX0NYvP8Bn1PBxeO2d4P2AP9f88aYVyTgQfIGefqqq5HkFqn-gienoxLRo0oK_STe5P_QcnvA0NZ2fTzaERqc97ysR2A7L68xl6VQjPmAV5bXa_SzpySswmFc2zVusyNhXYI_TKTiHPbUC3f1obgq_2WO6YQml67vY0qVlwpB0DpNtGFhzO7Mk-Sg1maLbAq1R26x-WqULd73n0P-scnILrzCbTfQrn_gnHNNjBeA&uuid=3a309d12-d28f-48cd-a560-8ab8267df798&authuser=0&nonce=3uld25psjapqc&user=11258709872982021182&hash=6c58lgnplh36qlg4d8gm7rn1fhgmsajf'>
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
