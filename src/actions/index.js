import {
    CREATE_MARKER,
    ADD_MARKER,
    DELETE_MARKER,
    CHANGE_CENTER,
    CHANGE_POSITION,
    SET_DRAGGED_ITEM
} from '../constants/actionTypes';

export const createMarker = (id, name, position) => ({
    type: CREATE_MARKER,
    id, name, position
});

export const deleteMarker = (index) => ({
    type: DELETE_MARKER,
    index
});

export const addMarker = (index, marker) => ({
    type: ADD_MARKER,
    index, marker
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
