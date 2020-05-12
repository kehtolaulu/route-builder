import { SET_DRAGGED_ITEM } from '../constants/actionTypes';

const draggedItem = (state = '', action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM: //index
            return action.draggedItem;
        default:
            return state;
    }
};

export default draggedItem;
