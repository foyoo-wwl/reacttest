import axios from 'axios';
import {LIST_INIT} from './ActionType'
import store from './index'
import { INPUTCHANGE ,ITEMADD , DELETEITEM} from './ActionType'

export const listInitAction = (data)=>({
    type:LIST_INIT,
    data
})
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5c862e9d83bce068aab20486/axiostest/todolist')
        .then((res)=>{
            const data = res.data.data
            dispatch(listInitAction(data))
        })
    }
}
export const BtnSubmit = ()=>{
    const action = {
        type:ITEMADD
    }      
    store.dispatch(action)  
}
export const inputChange = (e)=>{
    const action = {
        type:INPUTCHANGE,
        value:e.target.value
    }
    store.dispatch(action)
} 
export const deletaItem = (index)=>{
    const action = {
        type:DELETEITEM,
        index
    }
    store.dispatch(action)        
}