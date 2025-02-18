import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId,speciality}) => {
    const {doctors} = useContext(AppContext)
    const [relDoc ,setRelDoc] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const relatedDocs = doctors.filter(doc => doc.speciality === speciality && doc._id!== docId)
        setRelDoc(relatedDocs)
    }, [speciality, docId, doctors])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl  text-gray-600 font-medium'>Top Doctors to Book</h1>
    <p className='w-1/3 text-center font-semibold text-sm'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {
        relDoc.slice(0, 5).map((doctors, index) => (
          <div onClick={()=>{navigate(`/appointment/${doctors._id}`) ; scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}> 
            <img className='bg-blue-50' src={doctors.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                <p className='w-2 h-2 rounded-full bg-green-500'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{doctors.name}</p>
              <p className='text-gray-500 text-sm'>{doctors.speciality}</p>
            </div>
          </div>
        ))
      }
    </div>
    <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)} } className='bg-primary mt-10 rounded-full px-12 py-3 text-white'>More</button>
  </div>
  )
}

export default RelatedDoctors
