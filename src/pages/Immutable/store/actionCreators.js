import * as constants from './actionType'
import axios from 'axios';
import { fromJS } from 'immutable';

const listInitAction = (data)=>({
    type:constants.GETLIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList = ()=>{
	return (dispatch) => {
		axios.get('/api/immutable.json').then((res) => {
            if(res.status === 200){
                const data = res.data.list
                dispatch(listInitAction(data));
            }
		}).catch(() => {
		})
	}
}
export const listConvert = ()=>({
    type:constants.CONVERT_LIST
})

export const mouseIn = ()=>({
    type:constants.MOUSE_IN
})

export const iptfoucus = ()=>({
    type:constants.FOUCUS
})

export const iptblur = ()=>({
    type:constants.BLUR
})

export const listMIn = ()=>({
    type:constants.LMOUSEIN
})

export const listMOut = ()=>({
    type:constants.LMOUSELEAVE
})