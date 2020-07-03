import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { Row, Col, Avatar, Button } from "antd";
import Text from 'antd/lib/typography/Text';
import { PieChartOutlined, AppstoreOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
// import Text from 'antd/lib/typography/Text';
import '../../assets/styles/HeaderDash.scss'
import { Link, useHistory, useLocation } from 'react-router-dom';
import Signin from '../../pages/layouts/modal/auths/Signin';
import Signup from '../../pages/layouts/modal/auths/Signup';
import Profile from '../../pages/layouts/modal/profile';
import Upload from '../../pages/layouts/modal/profile/upload';
// import { ACTION_SIGN_OUT } from '../../stores/actions/auth';


const HeaderDash2 = () => {
    let history = useHistory()
    let location = useLocation()
    console.log('lokasi', location.pathname)
    console.log('history', history)

    const stateUser = useSelector(state => state.auth);
    // const dispatch = useDispatch();

    const [modal, setModal] = useState("");

    const signin = "signin";
    const signup = "signup";
    const profile = "profile";
    const upload = "upload";

    // const doSignout = () => {
    //     console.log("signout triggered");
    //     dispatch(ACTION_SIGN_OUT());
    // };

    const toggleModal = e => {
        setModal({
            [e.target.id]: !modal[e.target.id]
        });
    };


    return (
        <div className="header_wrapper">
            <Row className="header-items_wrapper">
                <Col span={1}></Col>
                <Col span={4}>
                    <Link to='/' >
                        <img
                            className="header_margin"
                            src={require("../../assets/images/SubsIt..png")}
                            style={{ width: "40%" }}
                            alt="subsit"
                        />
                    </Link>
                </Col>
                {stateUser ? (
                    <div>
                        <Col span={12}>
                        </Col>

                        <Col style={{ marginTop: '1.45rem' }} span={1}>
                            <Link to='/chart' className={location.pathname === '/chart' ? 'link' : 'linkoff'}>
                                <Col>
                                    <PieChartOutlined className={location.pathname === '/chart' ? 'icon' : 'iconoff'} />
                                </Col>
                            </Link>
                        </Col>
                        <Col style={{ marginTop: '1.45rem' }} span={1}>
                            <Link to='/subscription' className={location.pathname === '/subscription' ? 'link' : 'linkoff'}>
                                <Col>
                                    <AppstoreOutlined className={location.pathname === '/subscription' ? 'icon' : 'iconoff'} />
                                </Col>
                            </Link>
                        </Col>
                        <Col style={{ marginTop: '1.45rem' }} span={1}>
                            <Link to='/calendar' className={location.pathname === '/calendar' ? 'link' : 'linkoff'}>
                                <Col>
                                    <CalendarOutlined className={location.pathname === '/calendar' ? 'icon' : 'iconoff'} />
                                </Col>
                            </Link>
                        </Col>
                        <Col style={{ marginTop: '1rem' }} span={2}>
                            <Avatar size={38} icon={<UserOutlined />} />
                        </Col>
                    </div>
                ) :
                    <div className="header_wrapper">
                        <Row className="header-items_wrapper">
                            <Col span={1}></Col>
                            <Col span={9}>
                            </Col>
                            <Col style={{ marginTop: '1.45rem' }} span={2}>
                                <Text >About</Text>
                            </Col>
                            <Col style={{ marginTop: '1.45rem' }} span={2}>
                                <Text>Product</Text>
                            </Col>
                            <Col style={{ marginTop: '1.2rem' }} span={2}>
                                <Button type='primary' id={signup} onClick={toggleModal} >Sign Up</Button>
                            </Col>
                            {modal[signup] ? (
                                <Signup toggleModal={toggleModal} signin={signin} />
                            ) : (
                                    false
                                )}
                            <Col style={{ marginTop: '1.45rem' }} span={2}>
                                <Button style={{ color: '#9058ea', fontWeight: '500' }} id={signin} onClick={toggleModal}>Login</Button>
                            </Col>
                            {modal[signin] ? (
                                <Signin toggleModal={toggleModal} signup={signup} />
                            ) : (
                                    false
                                )}
                            {modal[profile] ? <Profile toggleModal={toggleModal} /> : false}
                            {modal[upload] ? <Upload toggleModal={toggleModal} /> : false}
                        </Row>
                    </div>
                }
            </Row>

        </div>
    )
}
export default HeaderDash2