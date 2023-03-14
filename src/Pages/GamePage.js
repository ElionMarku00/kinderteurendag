import React from 'react'
import styled from 'styled-components'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate } from 'react-router-dom';


function GamePage() {

  
  const navigate = useNavigate()
  const navigateGameP2 = () => navigate(`/gamep2`)

  return (



    <Grid>

      <FamilyRestroomIcon sx={{ fontSize: 70 }} style={{ alignSelf: 'flex-start', justifySelf: 'flex-end' }} />

      <CustomH1>Welcome to the laparoscopy demo!</CustomH1>
      <Cloud> Here you can perform an operation yourself like a real doctor! Do you want to give it a try?   </Cloud>

      <Flex>


        <ImgContainer >

          <FamilyRestroomIcon sx={{ fontSize: 70 }} />
        </ImgContainer>

        <ImgContainer >

          <FamilyRestroomIcon sx={{ fontSize: 70 }} onClick={() => { navigateGameP2() }} />
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

const Cloud = styled.p`
 & {
	// layout
	position: relative;
	max-width: 30em;

 margin:0 20px;

  color:black;
	
	// looks
	background-color: #fff;
	padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 2rem;
  box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
}

&:before {
	// layout
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	/* bottom: 100%; */
	left: 1.5em; // offset should move with padding of parent
	border: .75rem solid transparent;
	border-top: none;
  top:100%;
  transform: rotate(180deg);
  

	// looks
	border-bottom-color: #192229;
	filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
}

// dressing
& html {
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
	line-height: 1.5;
	font-weight: 300;
	color: #192229;
	background: linear-gradient(135deg, #F4F2F3, #BFC6D0);
}

& html, body {
	height: 100%;
	display:flex;
	justify-content:center;
	align-items:center;
}

& body {
	padding: 0 2rem;
}
`;

export default GamePage