import React, { useContext, useState } from 'react'
import { useNavigate, useLocation, } from "react-router-dom";

import styled from 'styled-components'

import { TextField } from "@mui/material";
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Cloud from '../Components/Cloud';
import { AppContext } from '../context';

function GiveAnswerPage() {

    const { data, setData } = useContext(AppContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [text, setText] = useState('')

    const { gameImage, currentGame, gameHost } = location.state;


    const checkAnsw = () => {
        let currGameAns = data.find((i) => i.name === currentGame).answer
        const currGameIndx = data.findIndex((i) => i.name === currentGame)

        if (currGameAns === text) {
            console.log('correct');

            let items = [...data];
            let item = { ...data[currGameIndx] };
            item.solved = true;
            items[currGameIndx] = item;
            setData([...items]);

            navigate('/correct', { state: {  gameImage, gameHost } })

        }
        else {
            navigate('/incorrect', { state: {  gameImage, gameHost } })
        }
    }

    return (
        <Grid>
            <Flex>
                <img src={`/images${gameHost}`} alt={`${gameHost}`} width="40%" height="auto" style={{ alignSelf: 'flex-end' }} />
                <img src={`/images${gameImage}`} alt={`${gameImage}`} width="30%" height="auto" style={{ alignSelf: 'flex-start' }} />
            </Flex>

            <Cloud arrowUp={true} text='When performing the operation, you will see a letter inside the box. Which letter is it?' />
            <TextField id="outlined-basic" label="What's your answer?" variant="outlined" style={{ margin: '0 1rem' }} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => checkAnsw()} >Check!</button>

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