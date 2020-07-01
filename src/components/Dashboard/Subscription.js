import React from 'react'
import {Col, Row} from "antd";

const Subscription = () => {
    return (
        <div>
            <Row style={{marginTop:'2rem'}}>
                <Col span={2} style={{background:'gray'}}>
                    <Col>Tepi Kanan</Col>
                </Col>
                <Col span={20} style={{background:'skyblue'}}>
                    <Col>Tepi Kanan</Col>
                </Col>
                <Col span={2} style={{background:'gray'}}>
                    <Col>Tepi Kiri</Col>
                </Col>
            </Row>
        </div>
    )
}

export default Subscription
