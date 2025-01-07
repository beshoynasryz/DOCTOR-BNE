import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* About Us Header */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="font-medium text-gray-700">US</span></p>
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[360px] mx-auto"
          src={assets.about_image}
          alt="About Us"
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-3/4 text-center md:text-left">
          <p>Welcome to Prescripto, Your Trusted Partner in Managing.</p>
          <p>Prescripto is Committed.</p>
          <b className='text-gray-800'>OUR VISION</b>
          <p>Our vision at Prescripto.</p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>

      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10  md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>  
          <b>Efficiency :</b>
          <p> stream  appointemnt sculduling  that  </p>
        </div>
        <div className='border px-10  md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>  
        <b>Convenince :</b>
        <p> stream  appointemnt sculduling  that  </p>
        </div>
        <div className='border px-10  md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>  
        <b>Personalization :</b>
        <p> stream  appointemnt sculduling  that  </p>
        </div>
      </div>

    </div>
  )
}

export default About
