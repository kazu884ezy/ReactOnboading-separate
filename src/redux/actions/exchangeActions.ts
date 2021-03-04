import {SET_RATES_FOR_DAY, SET_SELECTED_CURRENCY, SET_SELECTED_DATE} from './types';
import { getLatestExchangeRatesFor } from "../apis/exchangeApi";
import { setError, setLoading } from "./commonActions";

export const setSelectedCurrency = ( currency : string) => {
  return {
    type: SET_SELECTED_CURRENCY,
    payload: currency
  };
}

export const setSelectedDate = (date : Date) => {
  return {
    type: SET_SELECTED_DATE,
    payload: date
  };
}

const setExchangeRate = (ratesForSpecificDay : string[][]) => {
  return {
    type: SET_RATES_FOR_DAY,
    payload: ratesForSpecificDay
  };
};

export const getRatesForDay = (baseCurrency : string = 'NZD', date : Date = new Date()) => async dispatch => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const results = await getLatestExchangeRatesFor(baseCurrency, date);
    dispatch(setExchangeRate(Object.entries(results)));
  } catch (error) {
    dispatch(setError(error));
  }
  dispatch(setLoading(false));
};