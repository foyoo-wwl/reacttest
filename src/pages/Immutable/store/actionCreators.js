import * as constants from './actionType'
import axios from 'axios';

const listInitAction = (data)=>({
    type:constants.GETLIST,
    data
})
export const getList = ()=>{
    console.log(123)
	return (dispatch) => {
		axios.get('/api/immutable.json').then((res) => {
            if(res.status === 200){
                const data = res.data.list
                dispatch(listInitAction(data));
            }
		}).catch(() => {
			console.log('error');
		})
	}

}