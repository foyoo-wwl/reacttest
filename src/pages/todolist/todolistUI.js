import React,{Fragment} from 'react';
import {Button,List,Row,Col,Input} from 'antd';
const TodoListUi = (props)=>(
    <Fragment>
        <Row style={{margin:30}}>
            <Col span={6}>
                <Input onChange={props.inputChange} value={props.inptValue}/>
            </Col>
            <Col span={3} offset={1}>
                <Button onClick={props.BtnSubmit}>
                    提交
                </Button>
            </Col>
        </Row>
        <Row style={{margin:30}}>
            <Col span={8}>
                <List
                    size="large"
                    bordered                           
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>props.deletaItem(index)}                           
                    >{item}</List.Item>)}
                />
            </Col>
        </Row>
    </Fragment>
)
export default TodoListUi