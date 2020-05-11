import {
    CREATE_MARKER,
    ADD_MARKER,
    DELETE_MARKER,
    CHANGE_CENTER,
    CHANGE_POSITION,
    SET_DRAGGED_ITEM
} from '../constants/actionTypes';
import { combineReducers } from 'redux';
// state = {
//     markers: [],
//     newMarker: '',
//     center: {
//         lat: 37.7749289,
//         lng: -122.4050955710823
//     },
//     initialCenter: {
//         lat: 37.7749289,
//         lng: -122.4050955710823
//     }, move to mapcontainer
//     draggedItem: {}
// }

const markers = (state = [], action) => {
    switch (action.type) {
        case CREATE_MARKER: //id name
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position
                }
            ];
        case DELETE_MARKER: { //index
            let marker = state.find(marker => marker.id === action.index);
            let index = state.indexOf(marker);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
        case ADD_MARKER: { //after marker, marker
            let after = state.find(marker => marker.id === action.index);
            let marker = state.find(marker => marker.id === action.marker);
            let afterIndex = state.indexOf(after);
            let markers = state.filter(marker => marker.id !== action.marker);
            return [
                ...markers.slice(0, afterIndex),
                marker,
                ...markers.slice(afterIndex)
            ];
        }
        case CHANGE_POSITION: // index, position
            return state.map((marker) => {
                if (marker.id === action.id) {
                    return Object.assign({}, marker, {
                        position: action.position
                    })
                }
                return marker
            })
        default:
            return state;
    }
};

const draggedItem = (state = '', action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM: //index
            return action.draggedItem;
        default:
            return state;
    }
};

const center = (state = {
    lat: 37.7749289,
    lng: -122.4050955710823
}, action) => {
    if (!action) return state;
    switch (action.type) {
        case CHANGE_CENTER: //lat, lng
            return Object.assign({}, { lat: action.lat, lng: action.lng })
        default:
            return state;
    }
}

const app = combineReducers({
    markers,
    draggedItem,
    center
})

export default app;
