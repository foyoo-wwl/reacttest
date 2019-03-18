import { INPUTCHANGE ,ITEMADD , DELETEITEM} from './ActionType'

const defaultState = {
    inptValue:"input",
    list:[]
}
export default(state=defaultState,action) => {
    if(action.type === INPUTCHANGE){
        const newData = JSON.parse(JSON.stringify(state));
        newData.inptValue = action.value
        return newData
    }else if(action.type === ITEMADD){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list.push(state.inptValue)
        return newData        
    }else if(action.type === DELETEITEM){
        const newData = JSON.parse(JSON.stringify(state));
        newData.list.splice(action.index,1)
        return newData          
    }
    return state
}