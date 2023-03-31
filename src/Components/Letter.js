import { useDrag } from 'react-dnd';

export const Letter = ({ index, letter }) => {

    const [{ isDragging, canDrag }, drag] = useDrag({


        type: 'LETTER',
        item: { beginIndex: index, beginLetter: letter, },

        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;

    return (<div
        ref={drag}
        style={{
            opacity,
            backgroundColor: canDrag ? 'yellow' : 'transparent',
            // border: isOver ? '1px solid black' : '1px solid transparent',
            border: '1px dashed gray',
            cursor: 'move',
            width: '30px',
            height: '30px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '5px',
        }}
    >
        <span ref={drag}>{letter}</span>
    </div>)
}
