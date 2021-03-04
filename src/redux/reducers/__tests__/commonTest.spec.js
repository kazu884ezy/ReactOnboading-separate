import reducer from '../common';
import * as types from '../../actions/types';

describe('common reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                loading: false,
                error: null
            }
        )
    })

    it('should handle SET_LOADING', () => {
        expect(
            reducer([], {
                type: types.SET_LOADING,
                payload: true
            })
        ).toEqual({
            loading: true
        })
    })

    it('should handle SET_ERROR', () => {
        expect(
            reducer([], {
                type: types.SET_ERROR,
                payload: 'error message'
            })
        ).toEqual({
            error: 'error message'
        })
    })
})