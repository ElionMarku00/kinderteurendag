import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { GameTypes } from '../constants/GameType';
import styled from 'styled-components';


const Flex = styled.main`

display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:space-evenly;
align-items:center;
align-content:center;
column-gap:1rem;

`;

function GameZone(props) {

    const [text, setText] = useState('');
    const { checker, gameType, gameAnswer, ...otherprops } = props;



    switch (gameType) {

        case GameTypes.text:
            return <>
                <TextField id="outlined-basic"
                    label="What's your answer?"
                    variant="outlined"
                    style={{ margin: '0 1rem' }}
                    onChange={(e) => setText(e.target.value)} />
                <button onClick={() => checker(text)} >Check!</button>
            </>

        case GameTypes.drag:
            return <>
                {/* take the answer, split it into however many letters,
            make a div or some draggable element and try drag and drop  */}

                <div>
                    <h1>Drag the below Letters into the correct order:</h1>

                    <Flex>{[...gameAnswer].sort(() => Math.random() - 0.5).map(
                        letter => {

                            return <div >{letter}</div>

                        }
                    )}</Flex>


                </div>

                <Flex>
                    {[...gameAnswer].map(x => {

                        return <div>
                            empty square
                        </div>

                    })}
                </Flex>

            </>
        case GameTypes.multipleChoice:
            return <>

                <div>
                    multiplechoice
                </div>

            </>

    }

    return (

        gameType === GameTypes.text &&
        <>
            <TextField id="outlined-basic"
                label="What's your answer?"
                variant="outlined"
                style={{ margin: '0 1rem' }}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={() => gameAnswer(text)} >Check!</button>

        </>


    )
}

export default GameZone