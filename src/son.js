import React,{Component,Fragment} from 'react'

class Son extends Component{
    constructor(props){
        super(props)
        this.sonremove = this.sonremove.bind(this)
    }
    sonremove(){
        const {removeProps,index} = this.props
        removeProps(index)
    }
    render(){
        return(
            <Fragment>
                <li onClick={this.sonremove} style={{cursor:"pointer"}}>
                    {this.props.item}
                </li>              
            </Fragment>
        )
    }
}
export default Son