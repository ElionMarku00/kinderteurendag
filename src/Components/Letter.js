import { useDrag } from 'react-dnd';


//draggable
export const Letter = ({ index, letter, isDisabled, onDrop, isDropped }) => {

    const [{ isDragging, canDrag }, drag] = useDrag({

        type: 'LETTER',
        item: { beginIndex: index, beginLetter: letter, },
        canDrag: () => !isDisabled,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && onDrop) {
                // onDrop(dropResult, item); // Call onDrop with both objects
                isDisabled = true;
            }
            // if (isDropped) {
            //     drag({ ...item, dragDisabled: true }); // Disable the object that you dragged from
            // }
        },

        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),

        }),
    });
    // if (!isDragging && isDisabled) {
    //     drag(null);
    // }
    // if (isDisabled) {
    //     drag(null);
    // }

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
