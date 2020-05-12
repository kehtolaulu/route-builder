import React from 'react'; // eslint-disable-line no-unused-vars
import MarkerItem from './MarkerItem';

const MarkerItemsList = ({ markers, onDragOver, onDragEnd, onDragStart, onMarkerDelete }) => (
    <ul className="markers-list">
        {(markers || []).map((marker, _index) => {
            return <MarkerItem
                key={marker.id}
                name={marker.name}
                onDragOver={() => onDragOver(marker.id)}
                onDragStart={e => onDragStart(e, marker.id)}
                onDragEnd={onDragEnd}
                onMarkerDelete={() => onMarkerDelete(marker.id)}
            />
        })}
    </ul>
);

export default MarkerItemsList;
