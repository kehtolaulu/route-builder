import { CHANGE_CENTER } from '../constants/actionTypes';

const center = (state = {
    lat: 37.7749289,
    lng: -122.4050955710823
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
