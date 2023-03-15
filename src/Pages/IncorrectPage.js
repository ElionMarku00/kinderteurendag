import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import Cloud from '../Components/Cloud';
function IncorrectPage(props) {

  const { Icon } = props

  const navigate = useNavigate()

  return (
    <Grid>
      <Flex>
        <Icon sx={{ fontSize: 100 }} style={{ alignSelf: 'flex-end' }} />
        <Icon sx={{ fontSize: 70 }} style={{ alignSelf: 'flex-start' }} />
      </Flex>

      <Cloud arrowUp={true} text={[<h3 key={`new`} style={{ color: 'red' }}>Almost!</h3>, "Try again, you can do it!"]}/>

      <button onClick={() => navigate(-1)} > <FamilyRestroomIcon sx={{ fontSize: 100 }} />
      </button>

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