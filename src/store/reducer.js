import {combineReducers} from 'redux'
import {reducer as todolistReducers} from './../pages/reduxTodo/store'
import {reducer as immutableReducers} from './../pages/Immutable/store'
//import { combineReducers } from 'redux-immutable';
const reducer = combineReducers({
	todo: todolistReducers,
	immutable:immutableReducers
});

export default reducer;