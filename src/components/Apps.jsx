import React from 'react'
import App from '../components/App'
import { styled } from 'styled-components'

const Container = styled.div`
  display : flex;
  flex-wrap: wrap;
  justify-content :center;
  width: 100vw;
`
const Apps = ({props}) => {



  return (
    <Container>
        {
            props.map((x)=> <App key={x._id} app={x}/>)
        }
    </Container>
  )
}

export default Apps