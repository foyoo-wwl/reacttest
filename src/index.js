import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './pages/todolist/index.js';
import Nav from './pages/Nav/index.js';
import Father from './pages/props/App.js'
import Header from './pages/Header'
import ReduxTodo from './pages/reduxTodo'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Row,Col } from 'antd';
import {Provider} from 'react-redux'
import store from './pages/reduxTodo/store'

class App extends React.Component{
    render(){
        return (
            <Row style={{marginTop:'50px'}}>
                <Col span={20} offset={2}>              
                    <BrowserRouter>  
                        <Header/>    
                        <Switch>
                            <Route exact path='/' component={Nav} />
                            <Route path='/props' component={Father} />  
                            <Provider store={store}>
                                <Route path='/reduxTodo' component={ReduxTodo} /> 
                            </Provider>                            
                            <Route path='/todolist' component={TodoList} />                                           
                        </Switch>                                                                                                     
                    </BrowserRouter>
                </Col>
            </Row>
        )
    }
    componentDidMount(){
        
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
