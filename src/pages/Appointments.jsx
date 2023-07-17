import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Apps from '../components/Apps'
import { styled } from 'styled-components'

const Container = styled.div`
  display : flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 25px;
  border-radius: 15px;
  width: 100%;
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
const Query = styled.input`
  width : 20%;
  height : 30px;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
`
const Button = styled.button`
  width : 20%;
  height : 30px;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  display :flex;
  justify-content: center;
  align-items: center;
`

const Appointments = () => {
    const[apps , setApps] = useState(null)
    const[isFetched , setisFetched] = useState(false)
    const[filter , setFilter] = useState("")


    useEffect(()=>{
        const fetched = async ()=>{
            const fetching = await axios.get(`http://localhost:5000/api/contact/${filter}`)
            const data = fetching.data;
            setApps(data)
            setisFetched(true)
        }
        fetched()
    },[filter])

    const handleSubmit =async (e)=>{
      e.preventDefault()
    }
  return (
    <Container>
      <Filter onSubmit={handleSubmit}>
        <Query type='date' onChange={e => setFilter(e.target.value)} />
      </Filter>
        {
          isFetched && (
          <Apps props={apps} />
          )
        }
    </Container>
  )
}

export default Appointments