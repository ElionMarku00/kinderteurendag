import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components'
import { Layout, TopBar, BottomBar, Cloud } from '../Components';

// import { useTranslation } from 'react-i18next';
import { AppContext } from '../context';

function CorrectPage() {

  const { playerName } = React.useContext(AppContext)

  const location = useLocation();
  const navigate = useNavigate();
  const { currGameImage, currGameHost, rightText, rightGreenText } = location.state;

  return (
    <Layout>

      <TopBar imgProps={{ src: `/images${currGameImage}` }} />

      <MainAttraction>
        <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-start', justifySelf: 'center', gridArea: "2/1/2/4" }} />
        <Cloud arrowUp={true} text={[<h3 key={`new`} style={{ color: 'green' }}>{rightGreenText.replace('{{playerName}}', playerName)}</h3>, rightText.replace('{{playerName}}', playerName)]} />

      </MainAttraction>

      <BottomBar
        barProps={{ style: { justifySelf: "center" } }}
        renderBackward={false}

        forwardprops={{ onClickEvent: () => navigate(`/home`) }}
      />

    </Layout>
  )
}

const MainAttraction = styled.div`

    grid-area:2/1/4/6;  

`;

export default CorrectPage