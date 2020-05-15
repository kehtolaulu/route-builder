import {
    CREATE_MARKER,
    CHANGE_ORDER,
    DELETE_MARKER,
    CHANGE_CENTER,
    CHANGE_POSITION,
    SET_DRAGGED_ITEM
} from '../constants/actionTypes';

export const createMarker = (id, name, position) => ({
    type: CREATE_MARKER,
    id, name, position
});

export const deleteMarker = (id) => ({
    type: DELETE_MARKER,
    id
});

export const changeOrder = (afterId, markerId) => ({
    type: CHANGE_ORDER,
    afterId, markerId
});

export const changePosition = (id, position) => ({
    type: CHANGE_POSITION,
    id, position
});

export const setDraggedItem = (draggedItem) => ({
    type: SET_DRAGGED_ITEM,
    draggedItem
});

export const changeCenter = (lat, lng) => ({
    type: CHANGE_CENTER,
    lat, lng
});
