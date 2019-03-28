import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button,Row,Col } from 'antd';

class Header extends React.Component{
    render(){
        return (
            <Row style={{background:'#545652'}}>
                <Col>
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