import {
    SET_RATES_FOR_DAY,
    SET_SELECTED_CURRENCY,
    SET_SELECTED_DATE
} from '../actions/types';

const INITIAL_STATE = {
    ratesForSpecificDay: [],
    selectedCurrency: 'NZD',
    selectedDate: new Date(),
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RATES_FOR_DAY:
            return {
                ...state,
                ratesForSpecificDay: action.payload
            }
        case SET_SELECTED_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.payload
            }
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }
        default:
            return state
    }
};