import reducer from '../exchanges';
import * as types from '../../actions/types';

describe('exchange reducer', () => {
    it('should handle SET_RATES_FOR_DAY', () => {
        expect(
            reducer([], {
                type: types.SET_RATES_FOR_DAY,
                payload: {test: 'test'}
            })
        ).toEqual({
            ratesForSpecificDay: {test: 'test'}
        })
    })

    it('should handle SET_SELECTED_CURRENCY', () => {
        expect(
            reducer([], {
                type: types.SET_SELECTED_CURRENCY,
                payload: {test: 'test'}
            })
        ).toEqual({
            selectedCurrency: {test: 'test'}
        })
    })

    it('should handle SET_SELECTED_DATE', () => {
        let date = new Date();
        expect(
            reducer([], {
                type: types.SET_SELECTED_DATE,
                payload: date
            })
        ).toEqual({
            selectedDate: date
        })
    })
})