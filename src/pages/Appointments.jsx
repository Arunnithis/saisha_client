import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Apps from '../components/Apps'

const Appointments = () => {
    const[apps , setApps] = useState(null)
    const[isFetched , setisFetched] = useState(false)

    useEffect(()=>{
        const fetched = async ()=>{
            const fetching = await axios.get(`http://localhost:5000/api/contact`)
            const data = fetching.data;
            setApps(data)
            setisFetched(true)
        }
        fetched()
    })


  return (
    <div>
        {
          isFetched && (
          <Apps props={apps} />
          )
        }
    </div>
  )
}

export default Appointments