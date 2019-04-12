import React,{Component} from 'react'
import {TopWrap} from './style.js'
import {jsonp} from './../../common/ajax'
import topUi from './topUi'
import { Pagination } from 'antd';

export default class Top250 extends Component{
    constructor(props){
        super(props);
        this.state={
            topList:null,
            start:0,
            count:250
        }
    }
    onChange(page){
        this.setState({
            start:(page-1)*10
        })
    }
    getList(start){
        const topUrl = '/top250'
        jsonp(topUrl,{
            start,
            count:this.state.count
        }).then((res)=>{
            this.setState({
                topList:res.subjects
            })
            console.log(this.state.topList)
        })
    }
    componentDidMount(){
        this.getList(this.state.start)
    }
    render(){
        return(
            <TopWrap>
                    {
                        this.state.topList?topUi(this.state.topList.slice(this.state.start,this.state.start+10),this.state.start):<p>加载中</p>                     
                    }
                    <Pagination defaultCurrent={1} total={100} onChange={(page) => this.onChange(page)} className='pagination'/>
            </TopWrap>           
        )
    }
}