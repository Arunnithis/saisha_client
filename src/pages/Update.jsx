import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Singleapp from '../components/Singleapp';

const Update = () => {
    const [phone ,setPhone] = useState("")
    const [data ,setData] = useState([])
    const [isClicked ,setIsClicked] = useState(false)
    const handleSubmit =async (e)=>{
        e.preventDefault()
        const phNumber = phone;
        const fo = await axios.get(`http://localhost:5000/api/contact/find/${phNumber}`)
        setData(fo.data)
        setIsClicked(true)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='phone' name='phone' placeholder='Phone' onChange={(e)=> setPhone(e.target.value)} required/>
            <button type='submit'>Submit</button>
        </form>
        {
            isClicked && (
                <Singleapp props= {data}/>
            )
        }
  </div>
  )
}

export default Update