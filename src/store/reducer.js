import { combineReducers } from 'redux-immutable';
import {reducer as todolistReducers} from './../pages/reduxTodo/store'
import {reducer as immutableReducers} from './../pages/Immutable/store'
const reducer = combineReducers({
	todo: todolistReducers,
	immutable:immutableReducers
});

export default reducer;