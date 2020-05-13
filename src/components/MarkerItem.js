import React from 'react'; // eslint-disable-line no-unused-vars

const MarkerItem = ({ name, onDragOver, onDragEnd, onDragStart, onMarkerDelete }) => (
    <li className="marker-item" onDragOver={onDragOver}>
        <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="marker-name"
        >
            {name}
            <span className="delete" onClick={onMarkerDelete}>×</span>
        </div>
    </li>
);

export default MarkerItem;
