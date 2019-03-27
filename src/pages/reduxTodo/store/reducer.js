import { INPUTCHANGE ,ITEMADD , DELETEITEM , LIST_INIT} from './ActionType'
import { fromJS } from 'immutable';


const defaultState = fromJS({
    inptValue:"饼子",
    list:[]
})
export default(state=defaultState,action) => {
    switch(action.type){
        case INPUTCHANGE:
            return state.set('inptValue',action.value)
        case ITEMADD:
            let _list = state.get('list')
            _list = _list.push(state.get('inptValue'))       
            return state.merge({
                list:_list,
                inptValue:''
            })
        case DELETEITEM:
            const _list_ = state.get('list')
            return state.set('list',_list_.delete(action.index))
        case LIST_INIT:
            return state.set('list',action.data)
        default:
            return state
    }
}