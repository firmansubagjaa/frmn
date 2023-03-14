import React from 'react'

export default function Portofolio() {
  return (
    <section id='portofolio' className='flex justify-center items-center'>
      <div className="">
        <div className="container">
          <div className="mt-40 flex-col lg:flex-row">
            <div className=''>
              <div className="my-10 leading-loose">
                <h1 className="text-5xl font-bold">Portofolio</h1>
                <p className='py-1 font-semibold'>Making projects happen. Specializing in project consultation and management <br /> to deliver quality results. Let's make it happen!</p>
              </div>
              <div className="flex flex-col lg:flex-row my-24">
                {[1, 2, 3].map(() => {
                  return (
                    <>
                      <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={require('../../assets/img/png/portofolio1.jpg')} alt="Portofolio" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">Hiring App</h2>
                          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, corporis magni voluptatem harum culpa nisi beatae debitis obcaecati cum. Exercitationem totam autem minima architecto nam cupiditate atque nesciunt distinctio placeat.</p>
                          <div className="card-actions justify-end my-10">
                            <button className="btn btn-primary btn-block rounded-full shadow-primary shadow-2xl">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
