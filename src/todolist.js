import React,{Component,Fragment} from 'react';
import {Button,List,Row,Col,Input} from 'antd';
import 'antd/dist/antd.css';
import store from './store'
import { INPUTCHANGE ,ITEMADD , DELETEITEM} from './store/ActionType'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.BtnSubmit = this.BtnSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.storeChange = this.storeChange.bind(this)
        this.deletaItem = this.deletaItem.bind(this)
        store.subscribe(this.storeChange)
    }
    BtnSubmit(){
        const action = {
            type:ITEMADD
        }      
        store.dispatch(action)  
    }
    inputChange(e){
        const action = {
            type:INPUTCHANGE,
            value:e.target.value
        }
        store.dispatch(action)

    }   
    storeChange(){
        this.setState(store.getState())
    }
    deletaItem(index){
        const action = {
            type:DELETEITEM,
            index
        }
        store.dispatch(action)        
    }
    render(){
        return(
            <Fragment>
                <Row style={{margin:30}}>
                    <Col span={6}>
                        <Input onChange={this.inputChange} value={this.state.inptValue}/>
                    </Col>
                    <Col span={3} offset={1}>
                        <Button onClick={this.BtnSubmit}>
                            提交
                        </Button>
                    </Col>
                </Row>
                <Row style={{margin:30}}>
                    <Col span={8}>
                        <List
                            size="large"
                            bordered                           
                            dataSource={this.state.list}
                            renderItem={(item,index) => (<List.Item onClick={this.deletaItem.bind(this,index)}                           
                            >{item}</List.Item>)}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default TodoList;