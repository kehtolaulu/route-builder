import {
    ADD_MARKER,
    DELETE_MARKER,
    CHANGE_CENTER,
    CHANGE_ORDER,
    CHANGE_POSITION,
    SET_DRAGGED_ITEM
} from '../constants/actionTypes';
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
//     },
//     draggedItem: {}
// }
const markers = (state = [], action) => {
    switch (action.type) {
        case ADD_MARKER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position,
                }
            ];
        case DELETE_MARKER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case CHANGE_ORDER:
            return [

            ];
        case CHANGE_POSITION:
            return [

            ];
        default:
            return state;
    }
};

const draggedItem = (state = {}, action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM:
            return Object.assign({}, action.draggedItem);
        default:
            return state;
    }
};

export { markers, draggedItem };
