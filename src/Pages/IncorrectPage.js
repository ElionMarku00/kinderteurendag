import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from '../context';
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ReplayIcon from '@mui/icons-material/Replay';
import { useTranslation } from 'react-i18next';

import Cloud from '../Components/Cloud';
function IncorrectPage() {

  const location = useLocation();
  const { currGameImage, currGameHost, wrongText, wrongRedText } = location.state;
  const { playerName } = React.useContext(AppContext)
  const { t } = useTranslation();

  const navigate = useNavigate()

  return (
    <Grid>
      <Flex>
        <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="40%" height="auto" style={{ alignSelf: 'flex-end' }} />
        <img src={`/images${currGameImage}`} alt={`${currGameImage}`} width="30%" height="auto" style={{ alignSelf: 'flex-start' }} />
      </Flex>

      {/* <Cloud arrowUp={true} text={[<h3 key={`new`} style={{ color: 'red' }}>{t("wrongpage.redtext")}</h3>, t("wrongpage.message")]} /> */}
      <Cloud arrowUp={true} text={[<h3 key={`new`} style={{ color: 'red' }}>{wrongRedText.replace('{{playerName}}', playerName)}</h3>, wrongText.replace('{{playerName}}', playerName)]} />
      <ReplayIcon sx={{ fontSize: 100 }} onClick={() => navigate(-1)} style={{ alignSelf: 'center', justifySelf: 'center', color: 'black' }} />

    </Grid >
  )
}

const Grid = styled.main`

    color:green;
    display:grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr;
    grid-gap:3rem;
    align-items:center;
    grid-column: 1 / 3;
    justify-self: center;

    height:100vh;
    width:100vw;
`;

const Flex = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
height: 100%
`;


export default IncorrectPage