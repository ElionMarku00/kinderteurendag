import React from 'react'
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackButton, Cloud, ForwardButton, GameZone, Layout, TopBar, BottomBar } from '../Components';
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

function GamePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [ans, setAns] = React.useState(" ")

  const { currentGame, text, type, prompt, numPages } = location.state;
  const { gameType, data, checkAnsw, getGameDataByName } = React.useContext(AppContext)

  const [_, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)

  return (

    <Layout>
      <TopBar imgProps={{ src: `/images${currGameImage}`, alt: `${currGameImage}` }} />

      <MainAttraction>
        {currGameTitle ? <h1 style={{ justifyContent: 'center', color: 'black', alignContent: 'center' }}>
          {currGameTitle}
        </h1> : null}
        <Cloud arrowUp={false} text={text === "" || !text ? prompt : text} />

        <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-start', justifySelf: 'center', gridArea: "2/3/2/4" }} />

        {numPages === 2 || <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} setAns={setAns} checker={checkAnsw} currentGame={currentGame} data={data} />}

      </MainAttraction>
      {/* <BottomBar forwardprops={{arrowStyle:{color:"red"}}} /> */}

      {numPages === 2 ?
        <BottomBar forwardprops={{ currentGame: currentGame, nextPage: `/gamep2` }} />
        :
        <BottomBar barProps={{ style: { justifyContent: "center" } }} renderForward={false} />
      }

    </Layout>


  )
}

const MainAttraction = styled.div`

    grid-area:2/1/4/6;  

`;


export default GamePage