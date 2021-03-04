import * as actions from '../exchangeActions';
import * as types from '../types';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as exchangeApi from "../../apis/exchangeApi";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action to set selected currency', () => {
        const currency = 'JPY';
        const expectedAction = {
            type: types.SET_SELECTED_CURRENCY,
            payload: currency
        }
        expect(actions.setSelectedCurrency(currency)).toEqual(expectedAction)
    })

    it('should create an action to set selected date', () => {
        const date = new Date();
        const expectedAction = {
            type: types.SET_SELECTED_DATE,
            payload: date
        }
        expect(actions.setSelectedDate(date)).toEqual(expectedAction)
    })

    // it('should create an action to set selected currency', () => {
    //     const exchangeRates = [
    //         'JPY:10.0',
    //         'AUD:10.0'
    //     ];
    //     const expectedAction = {
    //         type: types.SET_RATES_FOR_DAY,
    //         payload: exchangeRates
    //     }
    //     expect(actions.setExchangeRate(exchangeRates)).toEqual(expectedAction)
    // })
})

describe('getRatesForDay', () => {
    test('dispatch actions with correct values', () => {
        let baseCurrency = 'NZD';
        let date = new Date();
        let returnValue = {rates:{ test: 'test'}};
        const spy = jest.spyOn(exchangeApi, 'getLatestExchangeRatesFor');
        spy.mockReturnValue(returnValue);

        const expectedActions = [
            { type: types.SET_LOADING, payload: true },
            { type: types.SET_ERROR, payload: null },
            { type: types.SET_RATES_FOR_DAY, payload: Object.entries(returnValue)},
            { type: types.SET_LOADING, payload: false },
        ]
        const store = mockStore({ test: [] });

        return store.dispatch(actions.getRatesForDay(baseCurrency, date)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
            expect(spy).toHaveBeenCalledWith(baseCurrency, date);
        })
    })
})