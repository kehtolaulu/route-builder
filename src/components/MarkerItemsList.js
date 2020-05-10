import React from 'react';
import MarkerItem from './MarkerItem';

const MarkerItemsList = ({ markers, onDragOver, onDragEnd, onDragStart, onMarkerDelete }) => (
    <ul className="markers-list">
        {(markers || []).map((marker, index) => {
            return <MarkerItem
                key={marker.id}
                name={marker.name}
                onDragOver={() => onDragOver(index)}
                onDragStart={e => onDragStart(e, index)}
                onDragEnd={onDragEnd}
                onMarkerDelete={() => onMarkerDelete(marker.id)}
            />
        })}
    </ul>
);

export default MarkerItemsList;
