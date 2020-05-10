import {
    CREATE_MARKER,
    ADD_MARKER,
    DELETE_MARKER,
    CHANGE_CENTER,
    CHANGE_ORDER,
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
        case CREATE_MARKER: //id name position
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position,
                }
            ];
        case DELETE_MARKER: //index
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case ADD_MARKER: { //index, marker
            return [
                ...state.slice(0, action.index),
                action.marker,
                ...state.slice(action.index + 1)
            ];
        }
        case CHANGE_POSITION: // index, position
            return state.map((marker, index) => {
                if (index === action.index) {
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

const draggedItem = (state = {}, action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM: //draggedItem
            return Object.assign({}, action.draggedItem);
        default:
            return state;
    }
};

const center = (state = {}, action) => {
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
