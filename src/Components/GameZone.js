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

    const Grid = styled.main`
        display:grid;
        grid-template-rows:repeat(2,1fr);
        grid-template-columns: repeat(${props.gameAnswer.length},1fr); 
        justify-content:space-evenly;
        align-content:center;


        justify-items:center;
        align-items:center;

`;
    const GridItems = styled.section`
    border-style:solid;
    padding:10%;

`;

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


                <h1>Drag the below Letters into the correct order:</h1>
                <Grid>

                    {[...gameAnswer].sort(() => Math.random() - 0.5).map(
                        letter => {

                            return <GridItems>{letter}</GridItems>

                        }
                    )}
                    {[...gameAnswer].map(x => {

                        return <GridItems>
                            empty square
                        </GridItems>

                    })}
                </Grid>

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