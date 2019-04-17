import React from 'react';
import './reset.css'
import ReactDOM from 'react-dom';
import Nav from './pages/Nav/index.js';
import Father from './pages/props/App.js'
import Header from './pages/Header'
import ReduxTodo from './pages/reduxTodo'
import Immutable from './pages/Immutable'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Row,Col } from 'antd';
import {Provider} from 'react-redux'
import store from './store'
import Douban from './pages/douban'
import Mock from './pages/mock'
import 'antd/dist/antd.css';

class App extends React.Component{
    render(){
        return (
            <Row>
                <Col span={24}>   
                    <Provider store={store}>          
                        <BrowserRouter>  
                            <Header/>    
                            <Switch>
                                <Route exact path='/' component={Nav} />
                                <Route path='/props' component={Father} />                            
                                <Route path='/reduxTodo' component={ReduxTodo} />    
                                <Route path='/immutable' component={Immutable} />
                                <Route path='/douban' render={()=>(<Douban/>)}/>            
                                <Route path='/mock' component={Mock}/>                                                                          
                            </Switch>                                                                                                     
                        </BrowserRouter>
                    </Provider> 
                </Col>
            </Row>
        )
    }
    componentDidMount(){
        
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
