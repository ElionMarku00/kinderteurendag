import React from 'react'
import { /* useNavigate ,*/ Link, useLocation } from "react-router-dom";
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Cloud from '../Components/Cloud';

function CorrectPage() {

  // const navigate = useNavigate()
  const location = useLocation();
  const { gameImage, gameHost } = location.state;

  return (
    <Grid>
      <Flex>
        <img src={`/images${gameHost}`} alt={`${gameHost}`} width="40%" height="auto" style={{ alignSelf: 'flex-end' }} />
        <img src={`/images${gameImage}`} alt={`${gameImage}`} width="30%" height="auto" style={{ alignSelf: 'flex-start' }} />
      </Flex>

      <Cloud arrowUp={true}  text={[<h3 key={`new`} style={{ color: 'green' }}>Correct!</h3>, "You can continue when clicking on the arrow."]} />
      {/* <Cloud arrowUp={true} greentext={<h1> Correct!</h1>} text={"You can continue when clicking on the arrow."} /> */}

      {/* <button onClick={() => navigate('')} > <FamilyRestroomIcon sx={{ fontSize: 100 }} /></button> */}
      {/* <button> <Link to='/' ><FamilyRestroomIcon sx={{ fontSize: 100 }} /></Link></button> */}

      <Link to='/' style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }} >
        <ArrowForwardIcon
          style={{ color: 'black' }}
          sx={{ fontSize: 70 }}
        />
      </Link>





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

const Flex = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
height: 100%
`;

export default CorrectPage