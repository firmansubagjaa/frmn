import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'


export default function Portofolio() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'BreezeCof',
      Description: 'My first project where the website was inspired by the largest startup in Indonesia, which has a service to order food and drinks using "Ojek Online" as a delivery medium from producers to consumers. here I got an idea to create a website called "BreezeCof", where one of the coffee shops wants to have an independent website without cooperation with third parties.',
      images: require('../../assets/img/png/breezeCof.png'),
      website: 'https://breezecof-fe.vercel.app/'
    },
    {
      id: 2,
      title: 'Hiring App',
      Description: 'This second project I was not alone to develop this website but developed with the project team. The purpose of this website has an idea like other job portal websites but with the advantage of getting Talent who has good competence and is recognized nationally who still has difficulty getting a job. So this website was developed.',
      images: require('../../assets/img/png/hiring-app.jpg'),
      website: 'https://hiring-apps-fe.vercel.app/',
    },
    {
      id: 3,
      title: 'Fazzpay',
      Description: 'This third project, I created a website where in everyday life, we have the desire to save money with the aim of each of us, it could be for long-term investment, saving to have an item that has been dreamed of but is always difficult because it is always reduced and used money, so I created a website in the form of an e-wallet with the aim of saving money.',
      images: require('../../assets/img/png/fazzpay.png'),
      website: 'https://fazzpay-fe-beta.vercel.app/'
    },
    {
      id: 4,
      title: 'Tickitz',
      Description: 'This project with other talents made a project team, by designing a website where users can order tickets without having to come to the counter at the movie venue and can book tickets in advance. This project was created using NextJS technology as a framework for ReactJS and on the Backend using NodeJS using the ExpressJS framework library.',
      images: require('../../assets/img/png/Ticktitz.png'),
      website: 'https://tickitz-stringify.vercel.app/'
    },
    {
      id: 5,
      title: 'Firman Portfolio',
      Description: 'Everything about Firman Subagja, we can see on hes portfolio website starts from the journey before and will be someone who will have a career in the field of Front-End Web Developer.',
      images: require('../../assets/img/png/portfolio.jpeg'),
      website: 'https://frmn.vercel.app/'
    },
  ])

  const scrollRef = useRef(null)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.7, backIn: [0.17, 0.67, 0.83, 0.67] }}
      id='portofolio' className='flex justify-center items-center'>
      <div className="">
        <div className="container">
          <div className="mt-12 flex-col lg:flex-row">
            <div className=''>
              <div className="my-10">
                <h1 className="text-5xl font-bold -ml-1">Portofolio</h1>
                <p className='py-1 font-semibold'>Making projects happen. Specializing in project consultation and management <br /> to deliver quality results. Let's make it happen!</p>
              </div>
              <div className="flex flex-wrap justify-center items-center my-24">
                {data.map((items) => {
                  return (
                    <div key={items.id} className="lg:mr-5">
                      <div className="card w-80 h-screen bg-base-100 shadow-xl mb-6 ">
                        <figure className='h-screen'><img src={items.images} alt="Portofolio" className='h-56 w-full object-cover' /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{items.title}</h2>
                          <p className='text-justify'>{items.Description}</p>
                          <div className="card-actions justify-end my-10">
                            <a href={items.website} className='w-full'>
                              <button className="btn btn-primary btn-block rounded-full shadow-primary shadow-2xl">Go to Website</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
