import React from 'react'

import { useDrop, } from 'react-dnd';
import { useTranslation } from 'react-i18next';

//droppable
export const Dustbin = React.memo(function Dustbin({
    accept,
    droppedBoxIndexes,
    setDroppedBoxIndexes,
    onDrop,
    isDropped,
    lastDropped

}) {

    const { t } = useTranslation()
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: (item, monitor) => {

            onDrop(item)
            //display lastDropped
            console.log('lastDropped', lastDropped);
            debugger;

            //disable dropped boxes by index

            // const draggedFrom = monitor.getItem().beginIndex;
            // setDroppedBoxIndexes([draggedFrom, ...droppedBoxIndexes])

        },

        // canDrop: (item) => { return lastDroppedItem !== item.id },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),

        }),

    })

    const isActive = isOver && canDrop
    let backgroundColor = '#fff'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        // <div ref={drop}
        //     style={{/*  ...style ,*/
        //         backgroundColor,
        //         border: '1px dashed gray',
        //         display: 'inline-flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         marginRight: '5px',

        //     }}>
        //     {/* {isActive 
        //         ? 'Release to drop'
        //         : `: ${accept}`} */}



        // </div>
        <div ref={drop}
            style={{/*  ...style ,*/
                backgroundColor,
                border: '1px dashed gray'
            }}
        >
            {/* {isActive &&
                'Release to drop'
            } */}
            {
                isActive ?
                    <img src={'/images/boxopen.png'} width={"70px"} />
                    : <img src={'/images/boxclosed.png'} width={"70px"} />

            }
            {/* <img src={'/images/boxclosed.png'} width={"70px"} /> */}

            {lastDropped ?
                <span>  <br />{lastDropped}</span>
                : t("gameinstructions.dropHere")
            }
        </div>

    )
})


