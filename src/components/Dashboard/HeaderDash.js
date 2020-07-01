import React from 'react'
import {Row, Col, Button} from "antd";
import Text from 'antd/lib/typography/Text';
import '../../assets/styles/HeaderDash.scss'
import { Link } from 'react-router-dom';

const HeaderDash = () => {
    return(
        <div className="header_wrapper">
            <Row className="header-items_wrapper">
                <Col span={1}></Col>
                <Col span={4}>
                    <Link to='/'>
                        <img 
                            className="header_margin"
                            src={require("../../assets/images/SubsIt..png")}
                            style={{width:"40%"}}
                            alt="subsit"
                        />
                    </Link>
                </Col>
                <Col span={9}>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={2}>
                    <Text >About</Text>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={2}>
                    <Text>Product</Text>
                </Col>
                <Col style={{marginTop:'1.2rem'}} span={2}>
                    <Button type='primary' >Sign Up</Button>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={2}>
                    <Text style={{color:'#9058ea', fontWeight:'500'}}>Login</Text>
                </Col>
            </Row>
        </div>
    )
}
export default HeaderDash