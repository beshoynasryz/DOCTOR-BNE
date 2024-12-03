import React, { useContext } from 'react'

const Appointments = () => {
  const {docId} = useParams()
  const {doctors} = useContext(appContext)
  return (
    <div>
    
    </div>
  )
}

export default Appointments
