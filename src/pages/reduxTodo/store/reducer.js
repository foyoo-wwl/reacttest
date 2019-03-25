import { INPUTCHANGE ,ITEMADD , DELETEITEM , LIST_INIT} from './ActionType'

const defaultState = {
    inptValue:"饼子",
    list:[1,2,3,4]
}
export default(state=defaultState,action) => {
    if(action.type === INPUTCHANGE){
        const newData = JSON.parse(JSON.stringify(state));
        newData.inptValue = action.value
        return newData
    }else if(action.type === ITEMADD){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list.push(state.inptValue)
        newData.inptValue = ''
        return newData        
    }else if(action.type === DELETEITEM){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list.splice(action.index,1)
        return newData          
    }else if(action.type === LIST_INIT){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list = action.data.list
        return newData         
    }
    return state
}