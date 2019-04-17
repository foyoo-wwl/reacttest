import React from 'react'
import api from './api'
class Mock extends React.Component{
    componentDidMount(){
        api.mockdata('/data/index')
        .then(res => {
          console.log(res);
          this.dataShow = res.data;
        })
    }
    render(){
        return(
            <p>
                mock
            </p>
        )
    }
}

export default Mock