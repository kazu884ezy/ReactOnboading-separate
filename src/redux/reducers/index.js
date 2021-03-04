import { combineReducers } from 'redux';
import common from './common';
import exchanges from './exchanges';
import overtime from './overtime';

export default combineReducers({
    common,
    exchanges,
    overtime,
})