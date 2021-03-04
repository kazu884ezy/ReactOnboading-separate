import * as api from '../apiRequest';
import {getCurrencyRateHistory, getLatestExchangeRatesFor} from "../exchangeApi";

describe('exchangeApi test', () => {
    test('getLatestExchangeRatesFor do api call and return rates', async () => {
        let baseCurrency = 'NZD';
        let date = new Date(2020, 1, 1);
        const spy = jest.spyOn(api, 'get');
        const returnValue = {'rates': {'NZD' : '1.2' }};
        spy.mockReturnValue(returnValue);

        const result = await getLatestExchangeRatesFor(baseCurrency, date);

        expect(spy).toHaveBeenCalled();
        expect(result).toEqual(returnValue['rates']);
    })

    test('getCurrencyRateHistory do api call and return rates', async () => {
        let baseCurrency = 'NZD';
        let compareCurrency = 'JPY';
        const spy = jest.spyOn(api, 'get');
        const returnValue = {
            'rates': {
                '2010-01-01': '1.2',
                '2010-01-02': '1.3',
            }
        };
        spy.mockReturnValue(returnValue);

        const result = await getCurrencyRateHistory(baseCurrency, compareCurrency);

        expect(spy).toHaveBeenCalled();
        expect(result).toEqual(returnValue['rates']);
    })
})