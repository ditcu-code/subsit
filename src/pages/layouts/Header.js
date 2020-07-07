import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Signin from './modal/auths/Signin';
import Signup from './modal/auths/Signup';
import Profile from "./modal/profile";
import Upload from "./modal/profile/upload";
import { Col, Avatar, Row, Dropdown, Menu } from "antd";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { PieChartOutlined, AppstoreOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { ACTION_SIGN_OUT } from "../../stores/actions/auth";
import "../../assets/styles/Header.scss";
import {getProfile} from "../../stores/actions/userdata"

const Header = (props) => {
    const token = localStorage.getItem('userLocal')
    const stateUser = useSelector(state => state.auth);
    const dispatch = useDispatch();
    // let history = useHistory()
    let location = useLocation()
    const userdata = useSelector(state => state.userdata.profile)
    // console.log('lokasi', location.pathname)
    // console.log('history', history)

    const [modal, setModal] = useState("");

    const signin = "signin";
    const signup = "signup";
    const profile = "profile";
    const upload = "upload";

    console.log('userdata', userdata)

    useEffect((token) => {
        dispatch(getProfile(token))
        return () => {
            dispatch(getProfile(token))
        }
    }, [dispatch, token])

    const doSignout = () => {
        console.log("signout triggered");
        dispatch(ACTION_SIGN_OUT());
    };
    const toggleModal = e => {
        setModal({
            [e.target.id]: !modal[e.target.id]
        });
    };

    const ProfileMenu = (
        <Menu>
            <Menu.Item key="1">
                <Link to='/profile' >
                        Account Settings
                </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={doSignout} >Sign out</Menu.Item>
        </Menu>
    );

    const privateHeader = (
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
                <Col style={{ marginTop: '-0.4em', marginLeft: '1.5em' }} span={2}>
                    <Dropdown overlay={ProfileMenu} >
                        <div 
                            className="ant-dropdown-link header_margin" 
                            style={{color:"#858585", cursor:"pointer", display:"flex"}}
                            onClick={e => e.preventDefault()}>
                            <Avatar size={38} src={userdata ? userdata.image_url : <UserOutlined/>}/>
                        </div>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
    
    return (
        <div>
            {stateUser ? (
                <div>
                    {privateHeader}
                </div>
            ) :
            <div className="header_wrapper">
                <Row className="header-items_wrappe">
                    <Col span={2}></Col>
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
                    <Col span={10}></Col>
                    <div className="header__tag">
                        <a href="/#">About</a>
                        <a href="/#">Product </a>
                        {/* <div className="header__user__btn"> */}
                        <a id={signup} href="/#" style={{ backgroundColor: "#8F48EA", padding: "7px", marginBottom: "10px", color: "white" }} onClick={toggleModal}>
                            Sign Up
                            </a>
                        {modal[signup] ? (
                            <Signup toggleModal={toggleModal} signin={signin} />
                        ) : (
                                false
                            )}
                        <a id={signin} href="/#" style={{ color: "black", marginLeft: "10px" }} onClick={toggleModal}>
                            Sign in
                        </a>
                        {/* </div> */}
                        {modal[signin] ? (
                            <Signin toggleModal={toggleModal} signup={signup} />
                        ) : (
                                false
                            )}
                        {modal[profile] ? <Profile toggleModal={toggleModal} /> : false}
                        {modal[upload] ? <Upload toggleModal={toggleModal} /> : false}
                        {/* {modal[signup] ? (
                        <Signup toggleModal={toggleModal} signin={signin} />
                    ) : (
                            false
                        )} */}
                    </div>
                </Row>
                </div>
            }
        </div>
    )
}

export default Header
