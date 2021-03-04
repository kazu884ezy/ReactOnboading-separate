import {
    SET_BASE_CURRENCY,
    SET_RATES_FOR_PERIOD,
    SET_TARGET_CURRENCY,
    SET_ORDER
} from '../actions/types';

const INITIAL_STATE = {
    ratesForPeriod: [],
    baseCurrency: 'NZD',
    targetCurrency: 'AUD',
    order: 'desc'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RATES_FOR_PERIOD:
            return {
                ...state,
                ratesForPeriod: action.payload
            }
        case SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.payload
            }
        case SET_TARGET_CURRENCY:
            return {
                ...state,
                targetCurrency: action.payload
            }
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
};