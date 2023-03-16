import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Cloud from '../Components/Cloud';
import { AppContext } from '../context';

function CorrectPage() {

  const navigate = useNavigate()


  return (
    <Grid>
      <Flex>
        <FamilyRestroomIcon sx={{ fontSize: 100 }} style={{ alignSelf: 'flex-end' }} />
        <FamilyRestroomIcon sx={{ fontSize: 70 }} style={{ alignSelf: 'flex-start' }} />
      </Flex>

      <Cloud arrowUp={true} text={[<h3 key={`new`} style={{ color: 'green' }}>Correct!</h3>, "You can continue when clicking on the arrow."]} />

      {/* <button onClick={() => navigate('')} > <FamilyRestroomIcon sx={{ fontSize: 100 }} /></button> */}
      <button> <Link to='/' ><FamilyRestroomIcon sx={{ fontSize: 100 }} /></Link></button>

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