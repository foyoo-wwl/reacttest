import React,{Component,Fragment} from 'react'
import {Row,Col,Input,List,Button} from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Immutable extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[1,2,3]
        }
    }
    componentDidMount(){
        this.props.getlist()
    }
    render(){
        return(
            <Fragment>
                <Row>
                    <Col span={8}>
                        <Input/>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Col>
                    <Col span={2} offset={1}>
                        <Button>换一换</Button>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list:state.immutable.list
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getlist(){
            dispatch(actionCreators.getList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Immutable)
