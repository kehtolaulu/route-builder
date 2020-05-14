import * as actions from '../actions/index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
    it('should create an action to create a marker', () => {
        const id = Date.now();
        const name = 'Home';
        const position = { lat: 55.6132, lng: 51.8470 };
        const expectedAction = {
            type: types.CREATE_MARKER,
            id, name, position
        }
        expect(actions.createMarker(id, name, position)).toEqual(expectedAction)
    })
})
