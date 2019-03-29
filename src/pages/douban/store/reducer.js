import { fromJS } from 'immutable'
import * as contants from './constants'
const doubanArr = fromJS({
    serchIptValue:'',
    searchData:null,
    searchTitle:'',
    path:'',
    inTheaters:null
})

export default(state=doubanArr,action)=>{
    switch(action.type){
        case contants.SEARCH_IPT_VALUE:
            return state.set('serchIptValue',action.value)
        case contants.SEARCH_DATA:
            return state.merge({
                searchTitle:action.title,
                searchData:action.subjects,
                path:action.title,
                serchIptValue:''
            })
        case contants.IN_THEATERS:
            return state.set('inTheaters',action.data)
        default:
            return state
    }
}