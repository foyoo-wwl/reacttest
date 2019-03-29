import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {SearchWrapper,Banner} from './style.js'
import { actions } from './../../store'
import {withRouter} from 'react-router-dom'

const initTheater = (data)=>{
    if(data){
        return(
            data.map((item)=>{
                return(
                    <li className='cardLi' key={item.id}>
                        <ul className="cardul">
                            <li className="poster">
                                <a  href="https://movie.douban.com/subject/27179414/?from=showing" target='_blank'>
                                    <img src={item.images.large.replace('jpg','webp')} alt={item.title} rel="noopener noreferrer" className=""/>
                                </a>
                            </li>
                            <li className="title">
                                <p>
                                    {item.title}
                                </p>                               
                                <p>
                                    主题：
                                    {
                                        item.genres.map((item)=>
                                            item+' '
                                        )
                                    }
                                </p>
                                <p>导演:
                                    {
                                        item.directors.map((item)=>
                                            item.name +' '
                                        )
                                    }
                                </p>
                                <p>
                                    主演:
                                    {
                                        item.casts.map((item)=>
                                            item.name+' '
                                        )
                                    }
                                </p>
                            </li>
                        </ul>                                           
                    </li>                 
                )
            })   
        )    
    }else{
        return(
            '暂无数据'
        )
    }
}
class Home extends Component{
    componentDidMount(){
        this.props.get_InTheaters()
    }
    render(){
        return(
            <Fragment>
                <Banner>
                    <img src={require('../../static/banner.jpg')} alt=""/>
                </Banner>
                <SearchWrapper>
                    {
                        initTheater(this.props.list)
                    }
                </SearchWrapper>  
            </Fragment>
         
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list:state.getIn(['douban','inTheaters'])
    }
}   

const mapDispatchToProps = (dispatch)=>{
    return{
        get_InTheaters(){
            dispatch(actions.getInTheaters())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))