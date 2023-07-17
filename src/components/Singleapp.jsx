import React from 'react'
import { useState } from 'react';
import { styled } from 'styled-components';

import axios from 'axios';

const Container = styled.div`
  display : flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content :center;
  width: 100vw;
`
const Name = styled.h1`
    text-align:center;
    margin: 5px;
    padding: 3px;
    font-weight:500;
`

const Phone = styled.h3`
    text-align:center;
    margin: 5px;
    padding: 3px;
    font-weight:500;
`

const Date = styled.h4`
    text-align:center;
    margin: 5px;
    padding: 3px;
    font-weight:500;
`
const ButtonContainer = styled.div`
  display : flex;
  flex-wrap: wrap;
  justify-content :center;
`
const Button = styled.button`
  width : 20%;
  height : 30px;
  padding: 15px;
  margin: 10px;
  display :flex;
  justify-content: center;
  align-items: center;
`
const UpdateForm = styled.form`
  display : flex;
  flex-direction:column;
  flex-wrap : wrap;
  padding: 10px 25px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`

const Query = styled.input`
  width : 20%;
  height : 30px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`
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
        setUpdateMode(false)
    }
    const handleDelete = async ()=>{
        window.location.reload();
        const fo = await axios.delete(`http://localhost:5000/api/contact/${props.phone}`)
        setUpdateMode(false)
    }
  return (
    <Container>
        <Name>{props.name}</Name>
        <Phone>{props.phone}</Phone>
        <Date>{props.date}</Date>
        <ButtonContainer>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </ButtonContainer>
        
        {
            updateMode && (
                <UpdateForm onSubmit={handleSubmit}>
                    <Query type='date' name='date'onChange={(e)=> setDate(e.target.value)} />
                    <Button type='submit'>Submit</Button>
                </UpdateForm>
            )
        }
    </Container>
  )
}

export default Singleapp