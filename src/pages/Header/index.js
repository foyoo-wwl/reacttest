import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button,Row,Col } from 'antd';

class Header extends React.Component{
    render(){
        return (
            <Row style={{marginTop:'50px'}}>
                <Col span={20} offset={2}>
                    <Button>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </Button>
                </Col>
            </Row>
        )
    }
}
export default Header