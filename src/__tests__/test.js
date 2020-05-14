import * as actions from '../actions/index';
import * as types from '../constants/actionTypes';

describe('Create marker action creator', () => {
    it('should create an action to create a marker', () => {
        const id = Date.now();
        const name = 'Home';
        const position = { lat: 55.6132, lng: 51.8470 };
        const expectedAction = {
            type: types.CREATE_MARKER,
            id, name, position
        };
        expect(actions.createMarker(id, name, position)).toEqual(expectedAction);
    });
});

describe('Delete marker action creator', () => {
    it('should create an action to delete a marker', () => {
        const index = Date.now();
        const expectedAction = {
            type: types.DELETE_MARKER,
            index
        };
        expect(actions.deleteMarker(index)).toEqual(expectedAction);
    });
});

describe('Change order action creator', () => {
    it('should create an action to insert marker with given id before marker with given id', () => {
        const afterId = Date.now();
        const markerId = Date.now();
        const expectedAction = {
            type: types.CHANGE_ORDER,
            afterId, markerId
        };
        expect(actions.changeOrder(afterId, markerId)).toEqual(expectedAction);
    });
});

describe('Change position action creator', () => {
    it('should create an action to set given position to marker with given id', () => {
        const id = Date.now();
        const position = { lat: 55.6132, lng: 51.8470 };
        const expectedAction = {
            type: types.CHANGE_POSITION,
            id, position
        };
        expect(actions.changePosition(id, position)).toEqual(expectedAction);
    });
});

describe('Set dragged item action creator', () => {
    it('should create an action to set dragged item', () => {
        const draggedItem = {};
        const expectedAction = {
            type: types.SET_DRAGGED_ITEM,
            draggedItem
        };
        expect(actions.setDraggedItem(draggedItem)).toEqual(expectedAction);
    });
});

describe('Change center action creator', () => {
    it('should create an action to change center of map', () => {
        const lat = 55.6132;
        const lng = 51.8470;
        const expectedAction = {
            type: types.CHANGE_CENTER,
            lat, lng
        };
        expect(actions.changeCenter(lat, lng)).toEqual(expectedAction);
    });
});
