import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux';
import searchUI from './searchUI';
import {withRouter} from 'react-router-dom';
import {SearchWrapper,List}from './style';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentDidMount(){
        if(!this.props.title.length){
            this.props.history.push('/douban')
        }
    }
    render(){
        return(
            <Fragment>                
                <SearchWrapper>
                    <h2>{this.props.title}</h2>   
                    <List>
                        {
                            searchUI(this.props.list)
                        }                                       
                    </List>
                </SearchWrapper>
            </Fragment>           
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        title:state.getIn(['douban','searchTitle']),
        list:state.getIn(['douban','searchData'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))