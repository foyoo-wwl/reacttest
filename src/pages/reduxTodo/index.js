import React,{Fragment,Component} from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreators'
import ReduxTodoUI from './reduxTodoUI.js'
class ReduxTodo extends Component{
    constructor(props){
        super(props);     
        this.state = {
            list:[1]
        } 
    }
    render(){
        return(
            <Fragment> 
                <ReduxTodoUI
                    list={this.props.list.toJS()}
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
        list: state.getIn(['todo','list']),
        iptval:state.getIn(['todo','inptValue'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        iptChange(e){
            dispatch(actionCreator.inputChange(e))
        },
        btnSubmit(){
            dispatch(actionCreator.btnSubmit())
        },
        deleteItem(index){
            dispatch(actionCreator.deleteItem(index))
        },
        getlist(){
            dispatch(actionCreator.getList())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo)