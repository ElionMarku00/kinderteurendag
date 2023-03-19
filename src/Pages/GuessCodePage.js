import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../Components/Title';
import Cloud from '../Components/Cloud';
import { TextField } from "@mui/material";

const Flex = styled.main`

height:100vh;
width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

    align-items:center;
    justify-items:center;
    justify-self: center;
    
    overflow-y:scroll;

`;

function GuessCodePage() {

  // const [text, setText] = React.setState('');
  const navigate = useNavigate();

  return (

    <Flex>
      <Title text='DOCTOR FOR 1 DAY' />

      <div>
        <img src={`/images/marielukas.png`} alt={`marielukas`} width="30%" height="auto" />
        <Cloud arrowUp={true} text='You are almost there, you can do it!' />
      </div>
      <Title text='ENTER HERE THE CODE WORD WE ARE LOOKING FOR TO HELP THE PATIENT' />
      <TextField id="outlined-basic" label="What's your answer?" variant="outlined" style={{ margin: '0 1rem' }} />

      <div>
        <button onClick={() => navigate(-1)} >Previous!</button>
        <button onClick={() => navigate('/finalpage',)} >Next!</button>
      </div>



    </Flex>




  )
}

export default GuessCodePage