import {SET_ERROR, SET_LOADING} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};