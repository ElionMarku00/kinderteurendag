import React, { useState } from 'react'
import { TextField } from "@mui/material";
import { GameTypes } from '../constants/GameType';
import styled from 'styled-components';
import { SortableContainer, Item } from '../Components'
import {
    DndContext,
    rectIntersection,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { DraggableText } from './DraggableText';
import { DroppableText } from './DroppableText';


const GridItems = styled.div`
border-style:solid;
padding:10%;
`;

const Grid = styled.main`
        /* display:grid;
        grid-template-rows:repeat(2,1fr);

        grid-template-columns: repeat(${(props) => props.gameAnswer.length},1fr); 
        justify-content:space-evenly;
        align-content:center;


        justify-items:center;
        align-items:center; */



`;

function GameZone(props) {

    const [text, setText] = useState('');
    const { checker, gameType, gameAnswer, data, currentGame, ...otherprops } = props;
    const [unsorted, setUnsorted] = React.useState([...gameAnswer].sort(() => Math.random() - 0.5))
    const [sorted, setSorted] = React.useState([])
    const [activeId, setActiveId] = useState();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 300,
                tolerance: 8,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    function handleDragStart(event) {
        const { active } = event;
        const { id } = active;

        setActiveId(id);
    }



    function handleDragOver(event) {

    }
    function handleDragStart(event) {
        const { active } = event;
        const { id } = active;

        setActiveId(id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {

            //remove element from unsorted and add to sorted

            let remIndx = active.id;
            setSorted((data) => [...data, unsorted[remIndx]]);
            // debugger;
            unsorted.splice(remIndx, 1)
            setUnsorted([...unsorted]);


            // setSorted((items) => {
            //     const oldIndex = unsorted.findIndex((item) => item.id === active.id);
            //     const newIndex = items.findIndex((item) => item.id === over.id);
            //     return arrayMove(items, oldIndex, newIndex);
            // });


        }

    }

    const wrapperStyle = {
        display: "flex",
        flexDirection: "row"
    }

    const defaultAnnouncements = {
        onDragStart(id) {
            console.log(`Picked up draggable item ${id}.`);
        },
        onDragOver(id, overId) {
            if (overId) {
                console.log(
                    `Draggable item ${id} was moved over droppable area ${overId}.`
                );
                return;
            }

            console.log(`Draggable item ${id} is no longer over a droppable area.`);
        },
        onDragEnd(id, overId) {
            if (overId) {
                console.log(
                    `Draggable item ${id} was dropped over droppable area ${overId}`
                );
                return;
            }

            console.log(`Draggable item ${id} was dropped.`);
        },
        onDragCancel(id) {
            console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
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
            return <div  {...otherprops}>

                <h1>Drag the below Letters into the correct order:</h1>

                <Grid gameAnswer={gameAnswer} style={wrapperStyle}>

                    <DndContext

                        sensors={sensors}
                        collisionDetection={rectIntersection}
                        // collisionDetection={rectIntersection}
                        onDragStart={handleDragStart}
                        // onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}
                        announcements={defaultAnnouncements}
                    >

                        {unsorted.map(
                            (letter, indx) => {

                                return <DraggableText id={indx} key={indx}>
                                    <h1> {letter} </h1>
                                </DraggableText>
                            }
                        )}

                        <SortableContainer id="container3" items={sorted} />
                        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>

                        {/* <SortableContext items={tempAnswer} strategy={rectSortingStrategy}>
                            <div></div>
                        </SortableContext> */}
                    </DndContext>

                    {/* <DndContext>

                        {tempAnswer.map(
                            (letter, indx) => {

                                return <DroppableText id={`droppable-${indx}`} key={indx} >
                                    Drop here!
                                </DroppableText>

                            }
                        )}
                    </DndContext> */}



                </Grid>


            </div>



        // return <>
        //     {/* take the answer, split it into however many letters,
        // make a div or some draggable element and try drag and drop  */}


        //     <h1>Drag the below Letters into the correct order:</h1>
        //     <Grid gameAnswer={gameAnswer}>

        //         {[...gameAnswer].sort(() => Math.random() - 0.5).map(
        //             (letter, indx) => {

        //                 return <GridItems
        //                     key={indx}

        //                     //for web 
        //                     draggable={true}
        //                     onDragStart={(e) => dragStart(e, indx)}
        //                     onDragEnter={(e) => dragEnter(e, indx)}
        //                     // onDragOver
        //                     onDragEnd={drop}
        //                     onClick={() => console.log("clicked", indx)}
        //                     onDrag={() => console.log("dragged", indx)}
        //                 //for mobile
        //                 // touchstart={(e) => dragStart(e, indx)}
        //                 // touchmove
        //                 // touchend={drop}
        //                 // touchcancel


        //                 > {letter}  </GridItems>

        //             }
        //         )}
        //         {[...gameAnswer].map((x, indx) => {

        //             return <GridItems
        //                 key={indx}
        //             >
        //                 empty square
        //             </GridItems>

        //         })}
        //     </Grid>

        // </>
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