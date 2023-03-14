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
                src={require('../../assets/img/png/sidang.jpg')} className="max-w-[90vw] md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt="Firman Subagja" />
            </figure>
            <div>
              <div className="mt-12 lg:mt-0">
                <fieldset className='border-2 border-solid border-primary w-48 lg:w-60'></fieldset>
                <div className='-mt-4 w-75 lg:w-96 text-end'>
                  <h2 className='uppercase text-primary font-semibold'>firman subagja</h2>
                </div>
                {/* <div className='border-2 border-solid border-primary w-72'></div> */}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold w-full pr-28">
                Creative Thinker Minimalism Lover
              </h1>
              <p className='py-6'>Passionate about crafting beautiful digital experiences with HTML, CSS and Javascript. Always on the lookout for new challenges and learning opportunities.</p>
              <a href="https://doc-0k-ao-docs.googleusercontent.com/docs/securesc/vjl67f97md9hmu5i7oijkerrufi36o9t/qea7c84d4f88udflbvb24lu7iiheeg23/1678812450000/11258709872982021182/11258709872982021182/18QE210WUOaUHDx4900JrKp77p7RZfYxr?e=download&ax=AB85Z1AQ08BXm8P7FuijuNn3lzhhXkBlyi3Sfl8JAwqJJY0-dDtEO-r7--Bo6bMdeTDbhHmHB9neutlhbUQi5gDeH8bJvJeVSeLBu9w7l3cYKGIY9bxVpHEPLAPdn6600IBE96bxl_1l3g4gLaqPeRQwfKjY-GU-f41VGbp_MAcd2uydX0i7xcbuJcLG_hj-3Eac_t7HJSB-n6Sa6Nz34WsHvuNoTaaj9rFWrLSz-ggHNx8Kibu0ebH3Yd2Rr6Pe1Rxkp6WQJyOBmKzBSEcC6a7mkirlN1562ez3UV5EJehY8BfOEIDls0gD1bJqii-pMl4GP6ANuQ2s7ydAVHi8az_p5Z34-M--qodkWzDZ5aW1R7y_q65qgpTg9h7lV1p0uRWKd3KYomh2YMFsp2MqJPBbaA7JTs92ZcT6hkYh0YVG2p30-gSO-o-mBi8k6a72B2HYHN3T8mp6a2-BtkxHUDNnc2eXOvrRbcglHIxmSfd8vb4c3X2D0dHrrevWvCfvlGj7Ya_yIc_luo5M9qdR4ZyO1L93D7fAc3-B_Fbqfz_Ju22Hb9MtH8oGe6yl35pA6aRxp94O8n56oAaTQtkXNANuSXdobHu5BTbDMICNhbHLwQLvWQQZTBE5GL_mGI-3WW2JEMEEJ7lEz05nyIXSSyK2QVd5hLT9Kff9KNPoTr7hYeipNAFAHlcPIo6MxOfzgbw1Cz03HNAnxHkRm-IChxbvUdrkEApTaaYRiYlyI_kMlxDoGVhaPhOghCRJ3av29iX0NYvP8Bn1PBxeO2d4P2AP9f88aYVyTgQfIGefqqq5HkFqn-gienoxLRo0oK_STe5P_QcnvA0NZ2fTzaERqc97ysR2A7L68xl6VQjPmAV5bXa_SzpySswmFc2zVusyNhXYI_TKTiHPbUC3f1obgq_2WO6YQml67vY0qVlwpB0DpNtGFhzO7Mk-Sg1maLbAq1R26x-WqULd73n0P-scnILrzCbTfQrn_gnHNNjBeA&uuid=3a309d12-d28f-48cd-a560-8ab8267df798&authuser=0&nonce=3uld25psjapqc&user=11258709872982021182&hash=6c58lgnplh36qlg4d8gm7rn1fhgmsajf">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-primary rounded-full btn-wide shadow-primary shadow-2xl">Resume CV</motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
