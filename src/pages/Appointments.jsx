import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [DocInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const fetchDocInfo = async () => {
    const DocInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(DocInfo);
  };

  const getAvailableSlots = async () => {
    const slots = [];
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 00:00:00 for consistent date comparison

    // Looping through 7 days (0 to 6) including today
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today); // Start with today's date
      currentDate.setDate(today.getDate() + i); // Add `i` days to today

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Set end time to 9:00 PM

      // Adjust current date's time based on whether it's today or a future day
      if (i === 0) {
        // If it's today, set the start time to the current time, but at least 10 AM
        currentDate.setHours(today.getHours() > 10 ? today.getHours() : 10);
        currentDate.setMinutes(today.getMinutes() > 30 ? 30 : 0);
      } else {
        // For future days, start at 10 AM
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        timeSlots.push({
          dataTime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
      }
      slots.push(timeSlots); // Collect all the slots for each day
    }

    setDocSlots(slots); // Set all slots at once after accumulating them
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    if (DocInfo) {
      getAvailableSlots();
    }
  }, [DocInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return DocInfo && (
    <div className="p-4">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 sm:w-72">
          <img
            className="bg-primary w-full h-auto max-w-full rounded-lg object-cover"
            src={DocInfo.image}
            alt={`${DocInfo.name}'s profile`}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-6 bg-white">
          <p className="text-lg font-semibold flex items-center gap-2">
            {DocInfo.name}
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              {DocInfo.degree} - {DocInfo.speciality}
            </p>
            <button className="mt-2 bg-primary text-white rounded-md px-3 py-1 text-sm">
              {DocInfo.experience} years experience
            </button>
          </div>

          <div className="mt-4">
            <p className="text-md font-medium flex items-center gap-2">
              About
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </p>
            <p className="text-sm text-gray-600 mt-1">{DocInfo.about}</p>
          </div>
          <p className='text-gray font-medium mt-4'>
            Appointment fee : ${DocInfo.fees}
          </p>
        </div>
      </div>
      
      {/* Appointment Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>
          Booking slots 
        </p> 
        <div className='flex gap-3 items-center mt-4 w-full overflow-x-scroll'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div
                className={`text-center rounded-full py-6 min-w-16 cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                key={index}
                onClick={() => setSlotIndex(index)} // Set selected slot
              >
                <p>{item[0] && dayOfWeeks[item[0].dataTime.getDay()]}</p>
                <p>{item[0] && item[0].dataTime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex gap-3 items-center mt-4 w-full overflow-x-scroll rounded-full '>
          {
            docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
              <div
                className={`text-sm  px-5 py-2 flex-shrink-0 border border-gray-200  cursor-pointer rounded-full ${slotTime === item.time.toLowerCase() ? 'bg-primary text-white' : ''}`}
                key={index}
                onClick={() => setSlotTime(item.time.toLowerCase())} // Set selected time
              >
                {item.time}
              </div>
            ))
          }
        </div>
        <button className='bg-primary text-white rounded-full px-4 py-2 mt-4'>
          Book Appointment 
        </button>
         
      </div>
      {/* {---------------------------------------related Doctors----------------------------------- } */}
      <div>
        <RelatedDoctors docId={docId} speciality={DocInfo.speciality}/>
      </div>
    </div>
  );
};

export default Appointments;
