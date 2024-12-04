import React from 'react'
import OurServiceCard from './OurServiceCard'

function OurService() {
  return (
    <section className="bg-brand text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
{/* 
      <p className="mt-4 text-gray-300">
      Expert Digital Solutions Tailored to Your Needs.
      </p> */}
    </div>

    <div className="pt-6">
     <OurServiceCard />
    </div>

   
  </div>
</section>
  )
}

export default OurService