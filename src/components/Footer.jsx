import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
   
    <div className='md:mx-20'>
     <div  className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
         {/* {------------------LEFT SIDE----------------} */}
      <div >
        <img className='mb-5 w-40' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 '>Find trusted doctors and book appointments easily with our platform. We connect you with top healthcare professionals in various specialties, ensuring quality care tailored to your needs. Browse doctor profiles, check availability, and schedule visits effortlessly. Your health is our priority, providing convenience and confidence in every step of your healthcare journey.</p>
      </div>
      {/* {------------------CENTER SIDE----------------} */}
      <div>
        <p className='text-xl font-medium mb-5 '>Company</p>
        <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy and Policy </li>
        </ul>
      </div>
      {/* {------------------RIGHT SIDE----------------} */}
      <div>
        <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>01095604355</li>
            <li>beshoynasry0@gmail.com</li>
        </ul>
      </div>
     
     </div>
     <div >
        <hr />
        <p className='py-5 text-center text-sm'>Copyright 2025 @ BNE.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
