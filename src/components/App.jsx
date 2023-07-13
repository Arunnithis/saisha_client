import React, { useState } from 'react'
import { styled , keyframes } from 'styled-components'


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
  width: 300px;
  height: 240px;
  padding: 20px;
  margin : 15px;
  border-radius : 15px;

  &:hover {
    box-shadow : 2px 5px 5px transparent;
  }
`
const Loader = styled.div`
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

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
    animation : ${animationForButton} 2s ease no-repeat;
`
const animationForButton = keyframes`
  0%{
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: blue;
    text-align: start;
    margin: 5px;
  }
  25%{
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: blue;
    text-align: center;
    margin: 5px;
  }
  50%{
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: red;
    text-align: end;
    margin: 5px;
  }
  100%{
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 12px;
    border-radius:5px;
    color: white;
    background: blue;
    text-align: none;
    margin: 5px;
  }
`

const App = ({app}) => {
  const[bg , setBg] = useState("000")
  const[status , setStatus] = useState("Completed")
  const handleClick = () =>{
    setBg("0A7E00")
    setStatus("✓")
  }
  return (
    <Container>
      <Wrapper>
        <Content><b>Name</b>  : {app.name}</Content>
        <Content><b>Email</b> : {app.email}</Content>
        <Content><b>Phone</b> : {app.phone}</Content>
        <Content><b>Date</b> : {app.date}</Content>
        <Button class="button type1" onClick={handleClick} bg={bg}>{status}</Button>
      </Wrapper>
    </Container>
  )
}

export default App