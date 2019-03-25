import React, { Component } from 'react';
import Son from './son'
import {Button,Input,Col,Row,List} from 'antd'
class Father extends Component {
  constructor(props){
    super(props)
    this.state ={
      input:"",
      list:[]
    }
    this.inpChange = this.inpChange.bind(this)
    this.add=this.add.bind(this)
  }
  inpChange(e) {
    const _value = e.target.value
    this.setState(()=>({
          input:_value
      })
    )
  }
  remove(a){
    this.setState((prevState)=>{
        let _list = [...prevState.list] 
        _list.splice(a,1)
        return {list:_list}       
      }
    )
    
  }
  add(){
    this.setState((prevState)=>{
      return{
        list:[...prevState.list,prevState.input],
        input:''
      }
    })
  }
  render() {
    return (
      <div className="App">
          <Row>
            <Col span={10}>
              <Input type="text"  onChange={this.inpChange} value={this.state.input}/>        
            </Col>
            <Col span={2}>
              <Button onClick={this.add}>点击</Button>            
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <List
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<Son item={item} key={index} removeProps={this.remove.bind(this,index)}/>)}
              />      
            </Col>

          </Row>

      </div>
    );
  }
}

export default Father