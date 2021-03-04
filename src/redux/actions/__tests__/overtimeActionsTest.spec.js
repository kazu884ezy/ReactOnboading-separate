import * as actions from '../overtimeActions';
import * as types from '../types';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as exchangeApi from "../../apis/exchangeApi";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action to set base currency', () => {
        const currency = 'JPY';
        const expectedAction = {
            type: types.SET_BASE_CURRENCY,
            payload: currency
        }
        expect(actions.setBaseCurrency(currency)).toEqual(expectedAction)
    })

    it('should create an action to set target currency', () => {
        const currency = 'NZD';
        const expectedAction = {
            type: types.SET_TARGET_CURRENCY,
            payload: currency
        }
        expect(actions.setTargetCurrency(currency)).toEqual(expectedAction)
    })

    it('should create an action to set order', () => {
        const order = 'desc';
        const expectedAction = {
            type: types.SET_ORDER,
            payload: order
        }
        expect(actions.setOrder(order)).toEqual(expectedAction)
    })
})

describe('getRatesOverTime', () => {
    test('dispatch actions with correct values', () => {
        let currency = 'NZD';
        let compareCurrency = 'JPN';
        const spy = jest.spyOn(exchangeApi, 'getCurrencyRateHistory');
        let returnValue = {
            '2020-01-01': 'test',
            '2020-01-02': 'test2'
        };
        spy.mockReturnValue(returnValue);

        const expectedActions = [
            { type: types.SET_LOADING, payload: true },
            { type: types.SET_ERROR, payload: null },
            { type: types.SET_RATES_FOR_PERIOD, payload: Object.entries({
                    '2020-01-02': 'test2',
                    '2020-01-01': 'test'
            })},
            { type: types.SET_LOADING, payload: false },
        ]
        const store = mockStore({ test: [] });

        return store.dispatch(actions.getRatesOverTime(currency, compareCurrency)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
            expect(spy).toHaveBeenCalledWith(currency, compareCurrency);
        })
    })
})