import reducer from '../overtime';
import * as types from '../../actions/types';
import {SET_ORDER, SET_TARGET_CURRENCY} from "../../actions/types";

describe('exchange reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                ratesForPeriod: [],
                baseCurrency: 'NZD',
                targetCurrency: 'AUD',
                order: 'desc'
            }
        )
    })


    it('should handle SET_RATES_FOR_DAY', () => {
        expect(
            reducer([], {
                type: types.SET_RATES_FOR_PERIOD,
                payload: {test: 'test'}
            })
        ).toEqual({
            ratesForPeriod: {test: 'test'}
        })
    })

    it('should handle SET_BASE_CURRENCY', () => {
        expect(
            reducer([], {
                type: types.SET_BASE_CURRENCY,
                payload: 'NZD'
            })
        ).toEqual({
            baseCurrency: 'NZD'
        })
    })

    it('should handle SET_TARGET_CURRENCY', () => {
        expect(
            reducer([], {
                type: types.SET_TARGET_CURRENCY,
                payload: 'NZD'
            })
        ).toEqual({
            targetCurrency: 'NZD'
        })
    })

    it('should handle SET_ORDER', () => {
        expect(
            reducer([], {
                type: types.SET_ORDER,
                payload: 'desc'
            })
        ).toEqual({
            order: 'desc'
        })
    })
})