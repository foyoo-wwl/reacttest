import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button,Row,Col } from 'antd';

class Nav extends React.Component{
    render(){
        return (
            <Row style={{marginTop:'50px'}}>
                <Col span={20} offset={2}>
                    <Button>
                        <NavLink to='/todolist'>
                            TodoList
                        </NavLink>
                    </Button>
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
                </Col>
            </Row>
        )
    }
}
export default Nav