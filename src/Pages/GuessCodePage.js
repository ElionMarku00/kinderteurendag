import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Cloud, Title, BottomBar, TopBar } from '../Components';
import { TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context';

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
const LettersFlex = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:100vw;
  justify-content:space-evenly;
  flex-wrap:wrap;

`;

const Letter = styled.div`

padding:1rem;
font-size:large;
margin:1rem ;
border:1px solid black;

`;

function GuessCodePage() {

  const navigate = useNavigate();
  const { t } = useTranslation()

  const { getFoundLetters, finalGameAnswer } = React.useContext(AppContext)

  const [givenAnswer, setGivenAnswer] = React.useState('')

  const foundLetters = getFoundLetters()

  function verifyAnswer() {

    return givenAnswer.trim().toLowerCase() === finalGameAnswer.trim().toLowerCase()

  }

  function routeToFinalPage() {

    if (verifyAnswer()) {
      navigate('/finalpage',)
    }
    else {
      let incorrectState = { currGameImage: "", currGameHost: "/marielukas.png", wrongText: t("guesscodepage.wrongpage.message"), wrongRedText: t("guesscodepage.wrongpage.redtext") }

      navigate('/incorrect', { state: incorrectState })
    }

  }

  return (

    <Flex>
      <TopBar barProps={{ style: { justifyContent: "center", alignSelf: "center" } }} >
        <h1 style={{ alignSelf: "center", margin: "0", padding: "0" }}>{t("title")}</h1>
      </TopBar>
      {/* <Title text={t("title")} /> */}

      <div>
        <img src={`/images/marielukas.png`} alt={`marielukas`} width="30%" height="auto" />
        <Cloud arrowUp={true} text={t("guesscodepage.almostmsg")} />
      </div>
      <Title text={t("guesscodepage.text")} />

      {foundLetters && <LettersFlex>

        {foundLetters && foundLetters.map(lett => {
          return <Letter key={lett}>{lett}</Letter>
        })}

      </LettersFlex>}
      <TextField id="outlined-basic" label={t("guesscodepage.textbox")} variant="outlined" style={{ margin: '0 1rem' }} onChange={(e) => setGivenAnswer(e.target.value)} />

      <BottomBar forwardprops={{ onClickEvent: () => routeToFinalPage() }} />

    </Flex>

  )
}

export default GuessCodePage