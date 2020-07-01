import React from 'react'
import {Row, Col, Avatar} from "antd";
import { PieChartOutlined, AppstoreOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
// import Text from 'antd/lib/typography/Text';
import '../../assets/styles/HeaderDash.scss'
import { Link, useHistory, useLocation } from 'react-router-dom';

const HeaderDash2 = () => {
    let history = useHistory()
    let location = useLocation()
    console.log('lokasi', location.pathname)
    console.log('history', history)

    return(
        <div className="header_wrapper">
            <Row className="header-items_wrapper">
                <Col span={1}></Col>
                <Col span={4}>
                    <Link to='/' >
                        <img 
                            className="header_margin"
                            src={require("../../assets/images/SubsIt..png")}
                            style={{width:"40%"}}
                            alt="subsit"
                        />
                    </Link>
                </Col>
                <Col span={12}>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={1}>
                    <Link to='/chart' className={location.pathname === '/chart' ? 'link' : 'linkoff'}>
                        <Col>
                            <PieChartOutlined className={location.pathname === '/chart' ? 'icon' : 'iconoff'}/>
                        </Col>
                    </Link>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={1}>
                    <Link to='/subscription' className={location.pathname === '/subscription' ? 'link' : 'linkoff'}>
                        <Col>
                            <AppstoreOutlined className={location.pathname === '/subscription' ? 'icon' : 'iconoff'}/>
                        </Col>
                    </Link>
                </Col>
                <Col style={{marginTop:'1.45rem'}} span={1}>
                    <Link to='/calendar' className={location.pathname === '/calendar' ? 'link' : 'linkoff'}>
                        <Col>
                            <CalendarOutlined className={location.pathname === '/calendar' ? 'icon' : 'iconoff'}/>
                        </Col>
                    </Link>
                </Col>
                <Col style={{marginTop:'1rem'}} span={2}>
                    <Avatar size={38} icon={<UserOutlined />}/>
                </Col>
            </Row>
        </div>
    )
}
export default HeaderDash2