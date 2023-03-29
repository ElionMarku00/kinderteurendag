import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function DraggableText({ id, title, ...otherprops }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        touchaction: 'none'

    } : undefined;


    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {otherprops.children}
        </button>
    );
}