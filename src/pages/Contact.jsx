import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Header Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center my-10 mb-28 text-sm text-center md:text-left">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[360px] mx-auto"
          src={assets.contact_image}
          alt="Contact Us"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-6 justify-center items-center md:items-start md:w-2/3">
          <p className="font-semibold">OUR OFFICE</p>
          <p>8 KHALEL ABDELAZEZ ALARBEEN <br /> EL NOZHA</p>
          <p>
            TEL: 01095604355 <br /> Email: beshoynasry0@gmail.com
          </p>
          <p>Career at BNE</p>
          <p>Learn more about our team</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
