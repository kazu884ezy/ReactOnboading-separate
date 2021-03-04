import { apiUrl } from "./constants";
import { currencies } from "../constants";
import * as api from './apiRequest';

const getDateStringForUrl = date => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export const getLatestExchangeRatesFor = async (baseCurrency : string, date : Date) => {
    const symbols = currencies.filter(currency => currency !== baseCurrency);
    const url = apiUrl + `${getDateStringForUrl(date)}?base=${baseCurrency}&symbols=${symbols.join(',')}`;
    let results = await api.get(url);
    return results['rates'];
}

export const getCurrencyRateHistory = async (baseCurrency : string, compareCurrency : string) => {
    const endDate = new Date();
    //Would be better to use moment...
    const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const url = apiUrl + 'history'
              + `?start_at=${getDateStringForUrl(startDate)}`
              + `&end_at=${getDateStringForUrl(endDate)}`
              + `&base=${baseCurrency}&symbols=${compareCurrency}`;
    let results = await api.get(url);
    return results['rates'];
}