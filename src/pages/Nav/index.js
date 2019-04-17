import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button,Row,Col } from 'antd';

class Nav extends React.Component{
    render(){
        return (
            <Row style={{marginTop:'50px'}}>
                <Col span={20} offset={2}>
                    <Button>
                        <NavLink to='/props'>
                            Props
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink to='/reduxTodo'>
                        reduxTodo
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink to='/immutable'>
                            immutable
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink to='/douban'>
                            豆瓣
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink to='/mock'>
                            mock
                        </NavLink>
                    </Button>
                </Col>
            </Row>
        )
    }
}
export default Nav