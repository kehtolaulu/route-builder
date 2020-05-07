import React from 'react';

const MarkerItem = ({ name, onDragOver, onDragEnd, onDragStart }) => (
    <li className="marker-item" onDragOver={onDragOver}>
        <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            {name}
        </div>
    </li>
);

export default MarkerItem;
