import axios from 'axios';
import * as constants from './ActionType'


const listInitAction = (data)=>({
    type:constants.LIST_INIT,
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