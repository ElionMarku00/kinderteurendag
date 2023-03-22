import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { GameTypes } from '../constants/GameType';


function GameZone(props) {


    const [text, setText] = useState('');
    const { gameAnswer, gameType, ...otherprops } = props;


    switch (gameType) {

        case GameTypes.text:
            return <>
                <TextField id="outlined-basic"
                    label="What's your answer?"
                    variant="outlined"
                    style={{ margin: '0 1rem' }}
                    onChange={(e) => setText(e.target.value)} />
                <button onClick={() => gameAnswer(text)} >Check!</button>

            </>
        case GameTypes.drag:
            return <>

                <div>
                    Drag
                </div>

            </>
        case GameTypes.multipleChoice:
            return <>

                <div>
                    multipleChoice
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