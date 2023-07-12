import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  display : flex;
  justify-content:start;
  align-items: start;
  flex-direction: column;
  border :1px solid black;
  width: 400px;
  height: 240px;
  padding: 20px;
  margin : 15px 0;
  border-radius : 15px;
`
const Content = styled.p`
  font-size :20px;
  font-weight: 200;
  padding: 5px;
  margin: 5px;
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: #000;
    text-align: center;
    margin: 5px;

`

const App = ({app}) => {
  return (
    <Container>
      <Wrapper>
        <Content><b>Name</b>  : {app.name}</Content>
        <Content><b>Email</b> : {app.email}</Content>
        <Content><b>Phone</b> : {app.phone}</Content>
        <Content><b>Date</b> : {app.date}</Content>
        <Button>Closed</Button>
      </Wrapper>
    </Container>
  )
}

export default App