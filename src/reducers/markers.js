import { CREATE_MARKER, DELETE_MARKER, CHANGE_ORDER, CHANGE_POSITION } from '../constants/actionTypes';

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
        case DELETE_MARKER: { // index
            return state.filter(marker => marker.id !== action.id);
        }
        case CHANGE_ORDER: { // after marker, marker
            let after = state.find(marker => marker.id === action.afterId);
            let marker = state.find(marker => marker.id === action.markerId);
            let afterIndex = state.indexOf(after);
            let markers = state.filter(marker => marker.id !== action.markerId);
            return [
                ...markers.slice(0, afterIndex),
                marker,
                ...markers.slice(afterIndex)
            ];
        }
        case CHANGE_POSITION: // index, position
            return state.map((marker) => {
                if (marker.id === action.id) {
                    return {
                        ...marker,
                        position: action.position
                    };
                }
                return marker;
            })
        default:
            return state;
    }
};

export default markers;
