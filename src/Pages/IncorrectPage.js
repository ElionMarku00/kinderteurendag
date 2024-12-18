import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from '../context';
import styled from 'styled-components'
import ReplayIcon from '@mui/icons-material/Replay';
import { useTranslation } from 'react-i18next';
import { Layout, Cloud, TopBar } from '../Components';

function IncorrectPage() {

  const location = useLocation();
  const { currGameImage, currGameHost, wrongText, wrongRedText } = location.state;
  const { playerName } = React.useContext(AppContext)
  const { t } = useTranslation();

  const navigate = useNavigate()

  return (
    <Layout>

      <TopBar imgProps={{ src: `/images${currGameImage}` }} />

      <MainAttraction>
        <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-start', justifySelf: 'center', gridArea: "2/1/2/4" }} />
        <Cloud arrowUp={true} style={{ gridArea: "3/2/4/6" }} text={[<h3 key={`new`} style={{ color: 'red' }}>{wrongRedText.replace('{{playerName}}', playerName)}</h3>, wrongText.replace('{{playerName}}', playerName)]} /> *
      </MainAttraction>

      <ReplayIcon sx={{ fontSize: 100 }} onClick={() => navigate(-1)} style={{ alignSelf: 'center', justifySelf: 'center', color: 'black', gridArea: "5/2/6/5" }} />

    </Layout >
  )
}

const MainAttraction = styled.div`

    grid-area:2/1/4/6;  

`;

export default IncorrectPage