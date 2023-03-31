import React, { useContext } from 'react'
import { useNavigate, useLocation, } from "react-router-dom";
import styled from 'styled-components'

import { Cloud, GameZone } from '../Components';
import { GameTypes } from '../constants/GameType';
import { AppContext } from '../context';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'

function GiveAnswerPage() {

    const { data, setData } = useContext(AppContext)
    const navigate = useNavigate();
    const location = useLocation();
    const { gameImage, currentGame, gameHost, gameType } = location.state;
    const currGameAns = data.find((i) => i.name === currentGame).answer
    const currGameIndx = data.findIndex((i) => i.name === currentGame)

    const setSolved = () => {
        console.log('correct', currentGame);
        let items = [...data];
        let item = { ...data[currGameIndx] };
        item.solved = true;
        items[currGameIndx] = item;
        setData([...items]);

    }
    function isTouchDevice() {
        // return (('ontouchstart' in window) ||
        //     (navigator.maxTouchPoints > 0) ||
        //     (navigator.msMaxTouchPoints > 0));
        debugger;
        return (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    }

    const checkAnsw = (ans) => {
        switch (gameType) {
            case GameTypes.text:
                if (currGameAns === ans) {
                    setSolved()
                    navigate('/correct', { state: { gameImage, gameHost } })
                }
                else {
                    navigate('/incorrect', { state: { gameImage, gameHost } })
                }
                break;
            case GameTypes.multipleChoice:
                if (ans) {
                    setSolved()
                    navigate('/correct', { state: { gameImage, gameHost } })
                }
                else navigate('/incorrect', { state: { gameImage, gameHost } })
                break;

            case GameTypes.drag:
                debugger;
                if (ans) {
                    setSolved()
                    navigate('/correct', { state: { gameImage, gameHost } })
                }
                else navigate('/incorrect', { state: { gameImage, gameHost } })
                break;

            default:
                throw new Error(`passed ${gameType} as GameType`)
        }



    }

    return (
        <Grid>

            <Img src={`/images${gameImage}`} alt={`${gameImage}`} />
            <img src={`/images${gameHost}`} alt={`${gameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-end', justifySelf: 'center', gridArea: "2/3/2/4" }} />


            <Cloud arrowUp={true} style={{ gridArea: "3/3/4/6", marginBottom: "10px", justifySelf: 'center', alignSelf: 'center' }} text='When performing the operation, you will see a letter inside the box. Which letter is it?' />

            <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
                <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} checker={checkAnsw} gameType={gameType} gameAnswer={currGameAns} currentGame={currentGame} data={data} />
            </DndProvider>


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