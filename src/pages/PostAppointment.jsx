import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius : 20px;
    flex-direction: column;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Input = styled.input`
    margin: 12px;
    width: 300px;
    height: 20px;
    padding: 10px;
    border-radius : 5px;
    outline: none;
    border: 1px solid;
`
const Button = styled.button`
    width: 300px;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: #000;
    text-align: center;
    margin: 5px;

`
const Message = styled.span`
    border: 1px solid red;
    width: 300px;
    font-size :15px;
    margin: 15px;
    padding: 25px;
    border-radius : 5px;
    background-color: #FFD1D1;
    font-weight: 500;
`

const PostAppointment = () => {
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [phone ,setPhone] = useState("")
    const [date ,setDate] = useState("")
    const[err ,setErr] = useState(false)
    const[res ,setRes] = useState("")


    const handleSubmit = async (e)=>{
      e.preventDefault();
      setErr(false)
      try{
        const newAppointment = {
          name,
          email,
          phone,
          date
        }
        const res = await axios.post("http://localhost:5000/api/contact",newAppointment);
        console.log(res.data);
        setRes(res.data)
      }catch(err){
        setErr(true)
      }
    }
  return (
    <Container>
        <Wrapper>
            <Form onSubmit={handleSubmit}>
            <Input type='name' name='name' placeholder='Username' onChange={(e)=> setName(e.target.value)}  required/>
            <Input type='email' name='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} required/>
            <Input type='phone' name='phone' placeholder='Phone' onChange={(e)=> setPhone(e.target.value)} required/>
            <Input type='date' name='date'onChange={(e)=> setDate(e.target.value)} required/>
            <Button type='submit'>Submit</Button>
        </Form>
        {
            err && (<Message>{res.name} Already appointment scheduled for this phone number {res.date}</Message>)
        }
        </Wrapper>
    </Container>
  )
}

export default PostAppointment