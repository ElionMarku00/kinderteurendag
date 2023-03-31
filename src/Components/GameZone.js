import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { GameTypes } from '../constants/GameType';
import styled from 'styled-components';

import {Dustbin,Letter} from './';


// const GridItems = styled.div`
// border-style:solid;
// padding:10%;
// `;

const Grid = styled.main`
display:grid;
grid-template-rows:repeat(2,1fr);

justify-content:space-evenly;
align-content:center;


justify-items:center;
align-items:center; 

`;


function GameZone(props) {

    const [text, setText] = useState('');
    const { checker, gameType, gameAnswer, data, currentGame, ...otherprops } = props;

    const [letters, setLetters] = useState([]);
    const [correctOrder] = useState([...gameAnswer]);
    const [lastDroppedItem, setLastDroppedItem] = useState([])
    const scambled = [...gameAnswer].sort(() => Math.random() - 0.5);

    const handleDrop = (index, item) => {
        let letter = item.beginLetter;
        console.log(letter);

        const newLetters = [...letters];
        newLetters[index] = letter;
        setLetters([...newLetters]);
        debugger;
        const lastDropped = [...lastDroppedItem]
        lastDropped[index] = letter
        setLastDroppedItem(lastDropped);

        if (newLetters.join('') === correctOrder.join('')) {
            checker(true)
        }
    };

    switch (gameType) {

        case GameTypes.text:
            return <div  {...otherprops}>
                <TextField id="outlined-basic"
                    label="What's your answer?"
                    variant="outlined"
                    style={{ margin: '0 1rem', }}
                    onChange={(e) => setText(e.target.value)}

                />
                <button onClick={() => checker(text)} >Check!</button>
            </div>

        case GameTypes.drag:

            return <Grid {...otherprops}>
                <h1>Arrange the letters in the correct order:</h1>
                {scambled.map((letter, index) => (
                    <Letter
                        key={`drag- ${index}- ${letter}`}
                        index={index}
                        letter={letter}
                    // handleDrop={handleDrop}
                    />
                ))}
                {[...gameAnswer].map((_, index) => {
                    console.log(index);

                    return (<div key={_.toString() + index}>
                        < Dustbin

                            accept='LETTER'
                            lastDroppedItem={lastDroppedItem[index]}
                            onDrop={(item) => handleDrop(index, item)}
                        />
                        <br />
                    </div>)
                }

                )
                }

            </Grid >

        case GameTypes.multipleChoice:
            return <>
                <div {...otherprops}>
                    {[...data].filter(x => x.name === currentGame).map(game => {
                        let { choices } = game;
                        console.log(choices);

                        return Object.keys(choices).map((key) => {
                            return <button key={key} onClick={() => checker(choices[key])}>{key}</button>

                        });

                        // return [...choices].map( {c,bool} => {
                        //     return <button onClick={checker()}>{c}</button>
                        // })

                    })}

                </div>

            </>

        default: throw new Error("You need to pass gameType");

    }



}




export default GameZone