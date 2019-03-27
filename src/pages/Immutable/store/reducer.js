import * as contants from './actionType'
import { fromJS } from 'immutable';
const defaultArr = fromJS({
    list:[],
    page:0,
    totalPage:0,
    mouseIn:false,
    focus:false
})

export default(state=defaultArr,action) =>{
    switch(action.type){
        case contants.GETLIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
        case contants.CONVERT_LIST:
            let _page = state.get('page'),
                _totalPage = state.get("totalPage");
                _page++
            if(_page === _totalPage){
                return state.set('page',0)   
            }else{         
                return state.set('page',_page)
            }
        case contants.BLUR:
            return state.set('focus',false)    
        case contants.FOUCUS:
            return state.set('focus',true) 
        case contants.LMOUSEIN:
            return state.set('mouseIn',true) 
        case contants.LMOUSELEAVE:
            return state.set('mouseIn',false)    
        default:
            return state                     
    }
}