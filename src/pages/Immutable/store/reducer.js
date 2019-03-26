import * as contants from './actionType'
const defaultArr = {
    list:[1,2,3,4,5]
}
export default(state=defaultArr,action) =>{
    if(action.type === contants.GETLIST){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list = action.data
        return newData
    }
    return state
}