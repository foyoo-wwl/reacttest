import * as constants  from './constants'
import {fromJS} from 'immutable'
export const InitSearchList = (data)=>{
    return {
        type:constants.SEARCH_DATA,
        title:data.title,
        subjects:data.subjects
    }
}
export const changeSearchIptVal = (value)=>{
    return{
        type:constants.SEARCH_IPT_VALUE,
        value:fromJS(value)
    }
}