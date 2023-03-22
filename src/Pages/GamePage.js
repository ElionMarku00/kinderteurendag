import React from 'react'
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';
import {Cloud} from '../Components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { AppContext } from '../context';

function GamePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { currentGame, gameHost, text, type } = location.state;

  const { data } = React.useContext(AppContext)
  const image = data.find(x => x.name === currentGame).icon

  return (

    <Grid>

      <ImgContainer style={{ justifySelf: 'end' }}>
        <img src={`/images${image}`} alt={`${image}`} width="80%" height="auto" />
      </ImgContainer>

      <CustomH1>Welcome to the laparoscopy demo!</CustomH1>
      <Cloud arrowUp={false} text={text} />

      <Flex>

        <ImgContainer>
          {/* <FamilyRestroomIcon sx={{ fontSize: 70 }} /> */}
          <img src={`/images${gameHost}`} alt={`${gameHost}`} width="80%" height="auto" />
        </ImgContainer>

        <ImgContainer style={{ alignSelf: 'center' }} >
          <ArrowForwardIcon
            style={{ color: 'black' }}
            sx={{ fontSize: 70 }}
            onClick={() => navigate(`/gamep2`, { state: { currentGame, gameImage: image, gameHost, gameType: type } })} />
        </ImgContainer>

      </Flex >

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

    row-gap: 0;

`;


const ImgContainer = styled.div`

    /* border-radius: 50%;
    border-color: black;
    border: 5px solid #555; */
`;

const Flex = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;


`;

const CustomH1 = styled.h1`

text-align:center;
color:black;
`;


export default GamePage