import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Singleapp from '../components/Singleapp';
import { styled } from 'styled-components';

const Container = styled.div`
  display : flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content :center;
  width: 100vw;
`
const Button = styled.button`
  width : 40%;
  height : 30px;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  display :flex;
  justify-content: center;
  align-items: center;
`
const Query = styled.input`
  width : 50%;
  height : 30px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`
const Filter = styled.form`
  display : flex;
  flex-direction:column;
  flex-wrap : wrap;
  padding: 10px 25px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`
const Message = styled.span`
    font-size: 15px;
    text-align:center;
    margin: 5px;
    padding: 3px;
    font-weight:500;
    color: red;
`


const Update = () => {
    const [phone ,setPhone] = useState("")
    const [msg ,setMsg] = useState("")
    const [data ,setData] = useState([])
    const [isClicked ,setIsClicked] = useState(false)
 
    const handleSubmit =async (e)=>{
        const phNumber = phone;
        e.preventDefault()
        // ${phNumber}
        const fo = await axios.get(`http://localhost:5000/api/contact/find/${phNumber}`)
        if(fo.data===null){
            setMsg("You haven't booked any appointments")
            setData("")
            setIsClicked(false)
        }else{
            setData(fo.data)
            console.log(data)
            setIsClicked(true)
            setMsg("")
        }

    }
  return (
    <Container>
        <Filter onSubmit={handleSubmit}>
            <Query type='phone' name='phone' placeholder='Phone' onChange={(e)=> setPhone(e.target.value)} required/>
            <Button type='submit'>Submit</Button>
        </Filter>
        {
            isClicked && (
                <Singleapp props= {data}/>
            )
        }
        <Message>{msg}</Message>
  </Container>
  )
}

export default Update