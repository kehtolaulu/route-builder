import center from '../reducers/center';
import draggedItem from '../reducers/draggedItem';
import markers from '../reducers/markers';
import * as types from '../constants/actionTypes';
import deepFreeze from 'deep-freeze';

describe('Center reducer', () => {
    it('should return new center on center change action', () => {
        const stateBefore = {
            lat: 37.7749289,
            lng: -122.4050955710823
        };
        const action = {
            type: types.CHANGE_CENTER,
            lat: 55.6132,
            lng: 51.8470
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = {
            lat: 55.6132,
            lng: 51.8470
        };
        expect(center(stateBefore, action)).toEqual(stateAfter);
    });
});

describe('Dragged item reducer', () => {
    it('should return new dragged item on set dragged item action', () => {
        const stateBefore = '';
        const action = {
            type: types.SET_DRAGGED_ITEM,
            draggedItem: '1'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = '1';
        expect(draggedItem(stateBefore, action)).toEqual(stateAfter);
    });
});

describe('Markers reducer', () => {
    it('should return a list with a new marker addded on create marker action', () => {
        const marker = {
            id: Date.now(),
            name: 'Home',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const stateBefore = [];
        const action = {
            type: types.CREATE_MARKER,
            id: marker.id,
            name: marker.name,
            position: marker.position
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = [marker];
        expect(markers(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return a list without a marker on delete marker action', () => {
        const homeMarker = {
            id: '123',
            name: 'Home',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const workMarker = {
            id: '456',
            name: 'Work',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const stateBefore = [homeMarker, workMarker];
        const action = {
            type: types.DELETE_MARKER,
            id: '123'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = [workMarker];
        expect(markers(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return a list with marker inserted before another marker on change order action', () => {
        const homeMarker = {
            id: '123',
            name: 'Home',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const workMarker = {
            id: '456',
            name: 'Work',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const stateBefore = [homeMarker, workMarker];
        const action = {
            type: types.CHANGE_ORDER,
            afterId: '456',
            markerId: '123'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = [workMarker, homeMarker];
        expect(markers(stateBefore, action)).toEqual(stateAfter);
    });

    it('should return a list with marker\'s new position on change position action', () => {
        const homeMarker = {
            id: '123',
            name: 'Home',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const workMarker = {
            id: '456',
            name: 'Work',
            position: {
                lat: 55.6132,
                lng: 51.8470
            }
        };
        const anotherWorkMarker = {
            id: '456',
            name: 'Work',
            position: {
                lat: 55.7879,
                lng: 49.1233
            }
        };
        const stateBefore = [homeMarker, workMarker];
        const action = {
            type: types.CHANGE_POSITION,
            id: '456',
            position: {
                lat: 55.7879,
                lng: 49.1233
            }
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = [homeMarker, anotherWorkMarker];
        expect(markers(stateBefore, action)).toEqual(stateAfter);
    });
});
