import { CHANGE_CENTER } from '../constants/actionTypes';

const center = (state = {
    lat: 55.796391,
    lng: 49.108891
}, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case CHANGE_CENTER: //lat, lng
            return Object.assign({}, { lat: action.lat, lng: action.lng })
        default:
            return state;
    }
};

export default center;
