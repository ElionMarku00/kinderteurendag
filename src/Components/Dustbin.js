import React from 'react'

import { useDrop,  } from 'react-dnd';
export const Dustbin = React.memo(function Dustbin({
    accept,
    lastDroppedItem,
    setLastDroppedItem,
    onDrop,
}) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: (item, _) => {
            // setLastDroppedItem(item.beginLetter);
            onDrop(item)
        },
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
    return (<div ref={drop} style={{/*  ...style ,*/ backgroundColor,
        border: '1px dashed gray',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',

    }}>
        {/* {isActive
            ? 'Release to drop'
            : `: ${accept}`} */}

        {lastDroppedItem ?
            <span>{lastDroppedItem}</span>
            : 'Drop here'
        }
    </div>
    )
})


