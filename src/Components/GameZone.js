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


const Grid = styled.div`
display:grid;

/* grid-template-columns: ${(gameAnswer) => {
        return `repeat(${gameAnswer.gameAnswer.length},1fr)`;
    }}; */

    grid-template-columns: ${(p) => {
        return `repeat(${p.gameAnswer.length}, 1fr)`;
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
    const { checker, data, currentGame, ans, setAns, ...otherprops } = props;
    const { getGameDataByName } = React.useContext(AppContext)

    const navigate = useNavigate()


    const [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)

    const [letters, setLetters] = useState([]);
    const [correctOrder] = useState([...currGameAns]);

    const [droppedBoxIndexes, setDroppedBoxIndexes] = useState([-1, -1, -1, -1])
    const [droppedLetters, setDroppedLetters] = useState(["", "", "", ""])

    function isDropped(boxName) {
        return droppedBoxIndexes.indexOf(boxName) > -1
    }

    const [scrambled, setScrambled] = useState([...currGameAns])

    React.useEffect(() => {
        setScrambled([...currGameAns].sort(() => Math.random() - 0.5));

    }, [])

    const { t } = useTranslation()

    const handleDrop = (index, item) => {

        let nowDroppedLetterIndx = item.beginIndex;
        let nowDroppedLetter = item.beginLetter;

        //set droppedBoxes to disable Letters.
        const lastDropped = [...droppedBoxIndexes]
        lastDropped[index] = nowDroppedLetterIndx;
        setDroppedBoxIndexes(lastDropped);

        const lastDroppedLetters = [...droppedLetters]
        lastDroppedLetters[index] = nowDroppedLetter
        setDroppedLetters(lastDroppedLetters)

        //set current answer to check with truth 
        const responseSoFar = [...letters];
        responseSoFar[index] = nowDroppedLetter;
        setLetters([...responseSoFar]);

        if (responseSoFar.join('') === correctOrder.join('')) {
            // checkAndRoute(true)
            checker(true, currentGame)
            navigate('/correct', { state: { currGameImage, currGameHost, rightText, rightGreenText } })
        }
    };

    const checkAndRouteMultipleChoice = (ans) => {

        console.log('ans from checker = ', checker(ans, currentGame));

        if (checker(ans, currentGame)) {
            setAns(true)
            navigate('/correct', { state: { currGameImage, currGameHost, rightText, rightGreenText } })

        }
        else {
            setAns(false)
            navigate('/incorrect', { state: { currGameImage, currGameHost, wrongText, wrongRedText } })
        }

    }

    switch (gameType) {

        case GameTypes.text:
            return <div  {...otherprops}>
                <TextField id="outlined-basic"
                    label={t("guesscodepage.textbox")}
                    variant="outlined"
                    style={{ margin: '0 1rem', }}
                    // onChange={(e) => setText(e.target.value)
                    onChange={(e) => setAns(e.target.value)
                    }

                />
            </div>
        case GameTypes.number:
            return <div   {...otherprops}>
                <TextField id="outlined-basic"
                    label={t("guesscodepage.textbox")}
                    type='number'
                    // defaultValue={ans || 1}
                    defaultValue={ans}
                    variant="outlined"
                    style={{ margin: '0 1rem', }}
                    // onChange={(e) => setText(e.target.value)
                    onChange={(e) => setAns(e.target.value)
                    }

                />
            </div>

        case GameTypes.drag:

            function isTouchDevice() {
                return (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
            }

            return <div {...otherprops}>
                <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>

                    <h3>{t("gameinstructions.drag")}</h3>

                    <Grid {...otherprops} gameAnswer={currGameAns}>
                        {scrambled.map((letter, index) => (
                            <Letter
                                key={`drag- ${index}- ${letter}`}
                                index={index}
                                letter={letter}
                                isDisabled={isDropped(index)}
                                handleDrop={handleDrop}

                            />
                        ))}
                        {[...currGameAns].map((_, index) => {

                            return (<div key={_.toString() + index}>
                                < Dustbin
                                    accept='LETTER'
                                    droppedBoxIndexes={droppedBoxIndexes} // read data
                                    setDroppedBoxIndexes={setDroppedBoxIndexes}  //put here dropped indexes and then check if the index matches the letter index
                                    onDrop={(item) => handleDrop(index, item)} //call this to enter handledrop
                                    isDropped={isDropped(index)}  // use this to disable drop 
                                    lastDropped={droppedLetters[index]} // use this to display letter 

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

            return <>
                <ChoiceFlexBox {...otherprops}>
                    {[...data]
                        .filter(x => x.name === currentGame)
                        .map(game => {
                            let { choices } = game;
                            console.log(choices);

                            return Object.keys(choices).map((key) => {
                                return <Button variant="contained" key={key} onClick={() => checkAndRouteMultipleChoice(choices[key], currentGame)}>{t(key.toString())}</Button>

                            });

                        })}

                </ChoiceFlexBox>

            </>

        default: throw new Error("You need to pass gameType");

    }



}

const ChoiceFlexBox = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
/* justify-content:space-evenly; */
align-items:center;
flex:1;

`;

export default GameZone