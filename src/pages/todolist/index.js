import React,{Component,Fragment} from 'react';
import {getList} from '../../store/actionCreators'
import 'antd/dist/antd.css';
import store from '../../store'
import {BtnSubmit,inputChange,deletaItem} from '../../store/actionCreators'
import TodoListUi from './todolistUI'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount(){
        this.getlist()
    }  
    getlist(){
        const action = getList()
        store.dispatch(action) 
    }
    storeChange(){
        this.setState(store.getState())
    }
    render(){
        return(
            <Fragment>
                <TodoListUi
                    inptValue={this.state.inptValue}
                    list = {this.state.list}
                    BtnSubmit = {BtnSubmit}
                    inputChange = {inputChange}
                    deletaItem = {deletaItem}
                />
            </Fragment>
        )
    }
}
export default TodoList;