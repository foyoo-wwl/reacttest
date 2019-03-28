import React,{Component} from 'react'
import {Input,Button,Menu, message} from 'antd'
import {
    Logo,
    IndexWrapprer,
    HeaderWrapper
}from './style.js'
import menuList from './navconfig'
import {NavLink,withRouter} from 'react-router-dom'
import { actions } from './../store'
import {connect} from 'react-redux'
import {jsonp} from './../common/ajax'

const list = (menuList)=>{
    const _menulist = []
    menuList.map((item)=>(  
        _menulist.push(
            <Menu.Item key={item.key}>
                <NavLink to={item.key}>
                    {item.title}
                </NavLink>            
            </Menu.Item>   
        )     
    ))  
    return _menulist
}
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            _link:''
        }
    }
    render(){
        return(
            <HeaderWrapper>
                <IndexWrapprer>
                    <Logo/>
                    <div className='iptWrapper'>
                        <Input
                            style={{width:'470px'}}
                            value={this.props.searchIptSearch}
                            placeholder='搜索电影、电视剧、综艺、影人'
                            onChange={(e)=>this.props.changeSearchVal(e)}
                        />
                        <Button 
                            shape="circle" 
                            icon="search" 
                            type="primary" 
                            onClick={()=>this.props.searchSubmit(this.props.searchIptSearch)}
                        />                    
                    </div>
                    <div className='nav'>
                        <Menu
                            mode='horizontal'
                        >
                            {list(menuList)}
                        </Menu>  
                    </div>
                </IndexWrapprer>         
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        searchIptSearch:state.getIn(['douban','serchIptValue']),
        path:state.getIn(['douban','path'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{    
        changeSearchVal(e){
            dispatch(actions.changeSearchIptVal(e.target.value))
        },
        searchSubmit(value){
            if(value){
                jsonp('/search?',{
                    q:value,
                    start:0,
                    count:25
                }).then((res)=>{           
                    dispatch(actions.InitSearchList(res))
                    this.history.push("/douban/search/"+value)
                }) 
            }else{
                message.info('请输入内容')
            }
        
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))