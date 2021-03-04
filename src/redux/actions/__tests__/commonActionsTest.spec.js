import * as actions from '../commonActions';
import * as types from '../types';

describe('actions', () => {
    it('should create an action to set loading', () => {
        const flag = true;
        const expectedAction = {
            type: types.SET_LOADING,
            payload: flag
        }
        expect(actions.setLoading(flag)).toEqual(expectedAction)
    })

    it('should create an action to set errors', () => {
        const error = 'error';
        const expectedAction = {
            type: types.SET_ERROR,
            payload: error
        }
        expect(actions.setError(error)).toEqual(expectedAction)
    })
})