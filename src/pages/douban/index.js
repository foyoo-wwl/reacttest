import React,{Component,Fragment} from 'react'
import Header from './header/index'
import {Switch,Route} from 'react-router-dom'
import Home from './component/home'
import Intheaters from './component/intheaters'
import Top250 from './component/top'
import Search from './component/search'
import Detail from './detail'

export default class Douban extends Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <Switch>
                        <Route exact path='/douban' component={Home} />
                        <Route path='/douban/in_theaters' component={Intheaters}/>
                        <Route path='/douban/top250' component={Top250}/> 
                        <Route path='/douban/search/:id' component={Search}/>   
                        <Route path='/douban/detail/:id' component={Detail}/>                                                     
                </Switch>  
            </Fragment>           
        )
    }
}