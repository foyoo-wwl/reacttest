import * as constants  from './constants'
import {fromJS} from 'immutable'
import {jsonp} from './../common/ajax'
export const InitSearchList = (data)=>{
    return {
        type:constants.SEARCH_DATA,
        title:data.title,
        subjects:data.subjects
    }
}
export const InitTheaters = (data)=>{
    return {
        type:constants.IN_THEATERS,
        data:data
    }
}
export const changeSearchIptVal = (value)=>{
    return{
        type:constants.SEARCH_IPT_VALUE,
        value:fromJS(value)
    }
}

export const getInTheaters = ()=>{
    return (dispatch)=>{
        jsonp('/in_theaters').then((res)=>{         
            dispatch(InitTheaters(res.subjects))
        })       
    }
    
}