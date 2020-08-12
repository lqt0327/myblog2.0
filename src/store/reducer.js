import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../application/Home/store/index';

export default combineReducers({
    recommend: recommendReducer,
})