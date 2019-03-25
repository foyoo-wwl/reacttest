import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import { INPUTCHANGE ,ITEMADD , DELETEITEM } from './store/ActionType'
import {getList} from './store/actionCreators'
import ReduxTodoUI from './reduxTodoUI.js'
class ReduxTodo extends Component{
    constructor(props){
        super(props);     
        this.state = {} 
    }
    render(){
        return(
            <Fragment> 
                <ReduxTodoUI
                    list={this.props.list}
                    iptChange = {this.props.iptChange}
                    btnSubmit = {this.props.btnSubmit}
                    iptval = {this.props.iptval}
                    deleteItem = {this.props.deleteItem}
                />
            </Fragment>            
        )
    }
    componentDidMount(){
        this.props.getlist()
    }

}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        iptval:state.inptValue
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        iptChange(e){
            const action ={
                type:INPUTCHANGE,
                value:e.target.value
            }
            dispatch(action)
        },
        btnSubmit(){
            const action = {
                type:ITEMADD
            }
            dispatch(action)
        },
        deleteItem(index){
            const action = {
                type:DELETEITEM,
                index:index
            }
            dispatch(action)
        },
        getlist(){
            const action = getList()
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo)