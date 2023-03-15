import React from 'react'
import { useNavigate } from "react-router-dom";

import styled from 'styled-components'

import { TextField } from "@mui/material";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Cloud from '../Components/Cloud';

function GiveAnswerPage() {

    const navigate = useNavigate()

    return (
        <Grid>
            <Flex>
                <FamilyRestroomIcon sx={{ fontSize: 100 }} style={{ alignSelf: 'flex-end' }} />
                <FamilyRestroomIcon sx={{ fontSize: 70 }} style={{ alignSelf: 'flex-start' }} />
            </Flex>

            <Cloud arrowUp={true} text='When performing the operation, you will see a letter inside the box. Which letter is it?' />
            <TextField id="outlined-basic" label="What's your answer?" variant="outlined" style={{ margin: '0 1rem' }} />

            <button onClick={() => navigate('/correct')} >correct</button>
            <button onClick={() => navigate('/incorrect')} >incorrect</button>

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

export default GiveAnswerPage