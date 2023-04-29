import React, { useState } from 'react'
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';

import { GameTypes } from '../constants/GameType';
import styled from 'styled-components';

import { Dustbin, Letter } from './';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { AppContext } from '../context';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// const GridItems = styled.div`
// border-style:solid;
// padding:10%;
// `;

const Grid = styled.div`
display:grid;

/* grid-template-columns: ${(gameAnswer) => {
        return `repeat(${gameAnswer.gameAnswer.length},1fr)`;
    }}; */

    grid-template-columns: ${(p) => {
        return `repeat(${p.gameAnswer.length},1fr)`;
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
    const [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)

    const [letters, setLetters] = useState([]);
    const [correctOrder] = useState([...currGameAns]);
    const [lastDroppedItem, setLastDroppedItem] = useState([])
    const scambled = [...currGameAns].sort(() => Math.random() - 0.5);

    const navigate = useNavigate();
    const { t } = useTranslation()


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
            navigate('/correct', { state: { currGameImage, currGameHost, rightText, rightGreenText } })
        }
        else navigate('/incorrect', { state: { currGameImage, currGameHost, wrongText, wrongRedText } })

    }
    switch (gameType) {

        case GameTypes.text:
            return <div  {...otherprops}>
                <TextField id="outlined-basic"
                    label={t("guesscodepage.textbox")}
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

            return <div {...otherprops}>
                <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>

                    <h3>Arrange the letters in the correct order:</h3>

                    <Grid {...otherprops} gameAnswer={currGameAns}>
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
            </div>

        case GameTypes.multipleChoice:

            const ChoiceFlexBox = styled.div`
                        display:flex;
                        flex-direction:column;
                        row-gap:1rem;
                        /* justify-content:space-evenly; */
                        align-items:center;
                        flex:1;
                    
                    `;
            return <>
                <ChoiceFlexBox {...otherprops}>
                    {[...data].filter(x => x.name === currentGame).map(game => {
                        let { choices } = game;
                        console.log(choices);

                        return Object.keys(choices).map((key) => {
                            return <Button variant="contained" key={key} onClick={() => checkAndRoute(choices[key], currentGame)}>{t(key.toString())}</Button>

                        });

                        // return [...choices].map( {c,bool} => {
                        //     return <button onClick={checker()}>{c}</button>
                        // })

                    })}

                </ChoiceFlexBox>

            </>

        default: throw new Error("You need to pass gameType");

    }



}




export default GameZone