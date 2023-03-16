import React from 'react'
import styled from 'styled-components'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';
import Cloud from '../Components/Cloud';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function GamePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.currentGame;

  return (

    <Grid>

      <ImgContainer style={{ justifySelf: 'end' }}>
        <FamilyRestroomIcon sx={{ fontSize: 70 }} />
      </ImgContainer>

      <CustomH1>Welcome to the laparoscopy demo!</CustomH1>
      <Cloud arrowUp={false} text='Here you can perform an operation yourself like a real doctor! Do you want to give it a try?' />

      <Flex>

        <ImgContainer >
          <FamilyRestroomIcon sx={{ fontSize: 70 }} />
        </ImgContainer>

        <ImgContainer >
          <ArrowForwardIcon style={{ color: 'black' }} sx={{ fontSize: 70 }} onClick={() => navigate(`/gamep2`, { state: { currentGame: item } })} />
        </ImgContainer>

      </Flex >

    </Grid>
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


const ImgContainer = styled.div`

    border-radius: 50%;
    border-color: black;
    border: 5px solid #555;
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