import React, { Component } from 'react';
import Son from './son'
class App extends Component {
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
          <input type="text"  onChange={this.inpChange} value={this.state.input}/>
          <button onClick={this.add}>点击</button>
          <ul>
            {
              this.state.list.map((item,index)=>{
                return(
                  <Son item={item} key={index} removeProps={this.remove.bind(this,index)}/>
                )
              })
            }           
          </ul>
      </div>
    );
  }
}

export default App