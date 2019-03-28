import { combineReducers } from 'redux-immutable';
import {reducer as todolistReducers} from './../pages/reduxTodo/store'
import {reducer as immutableReducers} from './../pages/Immutable/store'
import {reducer as doubanReducers} from './../pages/douban/store'
const reducer = combineReducers({
	todo: todolistReducers,
	immutable:immutableReducers,
	douban:doubanReducers
});

export default reducer;