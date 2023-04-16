import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { GameTypes } from '../constants/GameType';
import styled from 'styled-components';

import { Dustbin, Letter } from './';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { AppContext } from '../context';

import { useNavigate } from 'react-router-dom';




// const GridItems = styled.div`
// border-style:solid;
// padding:10%;
// `;

const Grid = styled.div`
display:grid;

grid-template-columns: ${(gameAnswer) => {
        return `repeat(${gameAnswer.gameAnswer.length},1fr)`;
    }};
/* grid-template-rows:repeat(2,1fr); */

justify-content:space-evenly;
align-content:center;
justify-items:center;
align-items:center; 
grid-gap:10px;

`;

const GameZone = (props) => {

    const [text, setText] = useState('');
    const { checker, data, currentGame, ...otherprops } = props;
    const { getGameDataByName } = React.useContext(AppContext)
    const [gameType, currGameAns, currGameImage, currGameHost] = getGameDataByName(currentGame)

    const [letters, setLetters] = useState([]);
    const [correctOrder] = useState([...currGameAns]);
    const [lastDroppedItem, setLastDroppedItem] = useState([])
    const scambled = [...currGameAns].sort(() => Math.random() - 0.5);

    const navigate = useNavigate();


    const handleDrop = (index, item) => {
        let letter = item.beginLetter;
        console.log(letter);

        const newLetters = [...letters];
        newLetters[index] = letter;
        setLetters([...newLetters]);
        const lastDropped = [...lastDroppedItem]
        lastDropped[index] = letter
        setLastDroppedItem(lastDropped);

        if (newLetters.join('') === correctOrder.join('')) {
            checkAndRoute(true)
        }
    };

    const checkAndRoute = (ans) => {

        console.log('ans from checker = ', checker(ans, currentGame));

        if (checker(ans, currentGame)) {
            navigate('/correct', { state: { currGameImage, currGameHost } })

        }
        else navigate('/incorrect', { state: { currGameImage, currGameHost } })

    }
    switch (gameType) {

        case GameTypes.text:
            return <div  {...otherprops}>
                <TextField id="outlined-basic"
                    label="What's your answer?"
                    variant="outlined"
                    style={{ margin: '0 1rem', }}
                    onChange={(e) => setText(e.target.value)}

                />
                <button onClick={() => checkAndRoute(text, currentGame)} >Check!</button>
            </div>

        case GameTypes.drag:

            function isTouchDevice() {
                // return (('ontouchstart' in window) ||
                //     (navigator.maxTouchPoints > 0) ||
                //     (navigator.msMaxTouchPoints > 0));
                return (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
            }


            return <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
                <h1>Arrange the letters in the correct order:</h1>

                <Grid {...otherprops}>
                    {scambled.map((letter, index) => (
                        <Letter
                            key={`drag- ${index}- ${letter}`}
                            index={index}
                            letter={letter}
                            handleDrop={handleDrop}
                        />
                    ))}
                    {[...currGameAns].map((_, index) => {

                        return (<div key={_.toString() + index}>
                            < Dustbin

                                accept='LETTER'
                                lastDroppedItem={lastDroppedItem[index]}
                                setLastDroppedItem={setLastDroppedItem}
                                onDrop={(item) => handleDrop(index, item)}
                            />
                            <br />
                        </div>)
                    }

                    )
                    }

                </Grid >
            </DndProvider >

        case GameTypes.multipleChoice:
            return <>
                <div {...otherprops}>
                    {[...data].filter(x => x.name === currentGame).map(game => {
                        let { choices } = game;
                        console.log(choices);

                        return Object.keys(choices).map((key) => {
                            return <button key={key} onClick={() => checkAndRoute(choices[key], currentGame)}>{key}</button>

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