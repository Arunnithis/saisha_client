import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Singleapp = ({props}) => {
    const [date ,setDate] = useState("")
    const[updateMode ,setUpdateMode] = useState(false)
    const handleUpdate = async ()=>{
        setUpdateMode(true)
    }
    const handleSubmit = async (e) =>{

        const updatedDate = {
            date
        }
        e.preventDefault();
        const fo = await axios.put(`http://localhost:5000/api/contact/${props.phone}`,updatedDate)
        console.log(date);
        setUpdateMode(false)
    }
    const handleDelete = async ()=>{
        const fo = await axios.delete(`http://localhost:5000/api/contact/find/${props.phone}`)
        setUpdateMode(false)
    }
  return (
    <>
        <div>{props.name}</div>
        <div>{props.phone}</div>
        <div>{props.date}</div>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        {
            updateMode && (
                <form onSubmit={handleSubmit}>
                    <input type='date' name='date'onChange={(e)=> setDate(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
            )
        }
    </>
  )
}

export default Singleapp