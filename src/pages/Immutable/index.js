import React,{Component,Fragment} from 'react'
import {Row,Col,Input,List,Button} from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Immutable extends Component{
    
    constructor(props){
        super(props);
        this.state={
        }
    }
    getListArea(){
        const {page,list,focus,mouseIn,listMOut,listMIn,convertBtn} = this.props
        const newList = list.toJS();
        const pageList= []; 
        if(newList.length>10){
			for (let i = page * 10; i < (page+1) * 10; i++) {
                if(newList[i]){
                    pageList.push(
                        <List.Item key={newList[i]}>{newList[i]}</List.Item>
                    )
                }

			}
        }
        if(focus || mouseIn){
            return(
                <List 
                    size="small" 
                    bordered      
                    onMouseLeave={(e)=>listMOut(e)}  
                    onMouseEnter={listMIn}           
                >             
                    <Button onClick={convertBtn}>点击</Button>    
                    {pageList}
                </List>
            )
        }
    }
    componentDidMount(){
        this.props.getlist()
    }
    render(){
        const {iptFocus,iptblur} = this.props
        return(
            <Fragment>
                <Row>
                    <Col span={9}>
                        <Input onFocus={iptFocus} onBlur={iptblur}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>    
                        {this.getListArea()}                       
                    </Col>
                    <Col span={2} offset={1}>                      
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        list:state.getIn(['immutable', 'list']),
        page:state.getIn(['immutable', 'page']),
        totalPage:state.getIn(['immutable', 'totalPage']),
        mouseIn:state.getIn(['immutable', 'mouseIn']),
        focus:state.getIn(['immutable', 'focus'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getlist(){
            dispatch(actionCreators.getList())
        },
        convertBtn(){
            dispatch(actionCreators.listConvert())
        },
        iptFocus(){
            dispatch(actionCreators.iptfoucus())
        },
        iptblur(){
            dispatch(actionCreators.iptblur())
        },
        listMIn(){
            dispatch(actionCreators.listMIn())
        },
        listMOut(e){
            if(e.relatedTarget.tagName === 'DIV'){
                dispatch(actionCreators.listMOut())
            }          
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Immutable)
