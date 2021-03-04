import {SET_ERROR, SET_LOADING} from './types';

export const setLoading = ( loading : boolean)  => {
    return {
        type: SET_LOADING,
        payload: loading
    };
};

export const setError = ( error : string | null) => {
    return{
         type: SET_ERROR,
         payload: error
    };
};
