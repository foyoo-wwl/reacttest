import React from 'react';
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
import 'antd/dist/antd.css';

class App extends React.Component{
    render(){
        return (
            <Row style={{marginTop:'50px'}}>
                <Col span={20} offset={2}>   
                    <Provider store={store}>          
                        <BrowserRouter>  
                            <Header/>    
                            <Switch>
                                <Route exact path='/' component={Nav} />
                                <Route path='/props' component={Father} />                            
                                <Route path='/reduxTodo' component={ReduxTodo} />    
                                <Route path='/immutable' component={Immutable} />                                                                                      
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
