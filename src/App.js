import './App.css';
import Appointments from './pages/Appointments';
import Update from './pages/Update';
import PostAppointment from './pages/PostAppointment';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin :75px;
`

function App() {
  return (
    <Container>
      <Wrapper>
        {/* <PostAppointment /> */}
        <Appointments />
        {/* <Update /> */}
      </Wrapper>
    </Container>
  );
}

export default App;
