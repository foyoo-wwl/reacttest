import React,{Fragment} from 'react'
import {Button,Row,Col,Input,List} from 'antd'

const ReduxTodoUI = (props)=> (
    <Fragment>
        <Row>
            <Col span={6}>
                <Input placeholder='请输入内容' value={props.iptval} onChange={props.iptChange}/>
            </Col>
            <Col span={2}>
                <Button onClick={props.btnSubmit}>提交</Button>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <List
                    size="small"
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={() =>props.deleteItem(index)}>{item}</List.Item>)}
                    />
            </Col>
        </Row>
    </Fragment>
)
export default ReduxTodoUI