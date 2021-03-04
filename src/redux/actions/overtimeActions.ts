import {
    SET_BASE_CURRENCY, SET_ORDER,
    SET_RATES_FOR_PERIOD,
    SET_TARGET_CURRENCY
} from './types';
import {getCurrencyRateHistory} from "../apis/exchangeApi";
import {setError, setLoading} from "./commonActions";

export const setBaseCurrency = (currency : string) => {
    return {
        type: SET_BASE_CURRENCY,
        payload: currency
    };
}

export const setTargetCurrency = (currency : string) => {
    return {
        type: SET_TARGET_CURRENCY,
        payload: currency
    };
}

export const setOrder = (order : string) => {
    return {
        type: SET_ORDER,
        payload: order
    };
}

const setRatesForPeriod = (ratesForPeriod : Array<object>) => {
    return{
        type: SET_RATES_FOR_PERIOD,
        payload: ratesForPeriod
    };
};

export const getRatesOverTime = (baseCurrency : string = 'NZD', compareCurrency : string = 'JPY', descending = true) => async dispatch => {
    try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        let results = await getCurrencyRateHistory(baseCurrency, compareCurrency);
        let resultArray = Object.entries(results);
        resultArray = sortRateHistory(resultArray, descending);
        dispatch(setRatesForPeriod(resultArray));
    } catch (error) {
        console.log(error);
        dispatch(setError("Fetch failed"));
    }
    dispatch(setLoading(false));
}

const sortRateHistory = (dataArray , descending = false) => {
    return descending
        ? dataArray.sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())
        : dataArray.sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
}