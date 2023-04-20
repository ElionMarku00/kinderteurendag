import React, { useContext } from 'react'
import { useNavigate, useLocation, } from "react-router-dom";
import styled from 'styled-components'

import { Cloud, GameZone } from '../Components';
import { AppContext } from '../context';

function GiveAnswerPage() {

    const { data, getGameDataByName } = useContext(AppContext)
    // const navigate = useNavigate();
    const location = useLocation();
    const { currentGame, _ } = location.state;  //when passing checkAns as prop  i can;t take it because state = null for some reason. 
    const { checkAnsw } = React.useContext(AppContext)

    const [gameType, currGameAns, currGameImage, currGameHost] = getGameDataByName(currentGame)

    return (
        <Grid>

            <Img src={`/images${currGameImage}`} alt={`${currGameImage}`} />
            <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-end', justifySelf: 'center', gridArea: "2/3/2/4" }} />

            <Cloud arrowUp={true} style={{ gridArea: "3/3/4/6", marginBottom: "10px", justifySelf: 'center', alignSelf: 'center' }} text='When performing the operation, you will see a letter inside the box. Which letter is it?' />
            <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} checker={checkAnsw} gameType={gameType} gameAnswer={currGameAns} currentGame={currentGame} data={data} />

        </Grid>
    )
}

const Img = styled.img`
height:100%;
width:auto;
max-height: 100%;
grid-area:1/5/1/6;
max-height:100px;
align-self:flex-end;
justify-self:flex-end;
`;

const Grid = styled.main`
    display:grid;
    height:100vh;
    width:100vw;

    grid-template-columns:repeat(5,1fr);
    grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr 0.5fr;
    margin:0;
  
    /* grid-gap:3rem; */
    /* column-gap:0; */

`;

// const Flex = styled.div`
// display:flex;
// flex-direction:row;
// justify-content:space-between;
// height: auto;
// `;

export default GiveAnswerPage