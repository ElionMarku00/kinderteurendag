import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Cloud,Title} from '../Components';
import { TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';

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
  const {t} = useTranslation()

  return (

    <Flex>
      <Title text={t("title")} />

      <div>
        <img src={`/images/marielukas.png`} alt={`marielukas`} width="30%" height="auto" />
        <Cloud arrowUp={true} text={t("guesscodepage.almostmsg")} />
      </div>
      <Title text={t("guesscodepage.text")} />
      <TextField id="outlined-basic" label={t("guesscodepage.textbox")} variant="outlined" style={{ margin: '0 1rem' }} />

      <div>
        <button onClick={() => navigate(-1)} >Previous!</button>
        <button onClick={() => navigate('/finalpage',)} >Next!</button>
      </div>



    </Flex>




  )
}

export default GuessCodePage