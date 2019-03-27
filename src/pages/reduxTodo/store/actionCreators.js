import axios from 'axios';
import * as constants from './ActionType'
import {fromJS} from 'immutable'

const listInitAction = (data)=>({
    type:constants.LIST_INIT,
    data:fromJS(data)
})
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('api/immutable.json')
        .then((res)=>{
            const data = res.data.list
            dispatch(listInitAction(data))
        })
    }
}
export const inputChange = (e)=>({
    type:constants.INPUTCHANGE,
    value:e.target.value
})

export const btnSubmit = ()=>({
    type:constants.ITEMADD
})



export const deleteItem = (index) =>({
    type:constants.DELETEITEM,
    index
})