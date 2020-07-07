import React, { useEffect } from 'react';
import { Row, Col, Avatar, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/Profile.scss'
// import {getProfile} from "../stores/actions/userdata"

const Profile = () => {
    const userdata = useSelector(state => state.userdata.profile)
    // console.log((userdata.name === null ? 'hello' : 'hi'))
    console.log(userdata)
    // const dispatch = useDispatch();

    // useEffect((token) => {
    //     dispatch(getProfile(token))
    //     return () => {
    //         dispatch(getProfile(token))
    //     }
    // }, [dispatch])

    return (
        <div className='profile-doom'>
            <Row justify='end'>
                <Col span={9}>
                </Col>
                <Col span={6} className='avatar'>
                    {/* <Avatar size={150} src={userdata.image_url === null ? <UserOutlined/> : userdata.image_url }/> */}
                    {/* <Input size="large" defaultValue={(userdata.name === null ? 'UserName' : userdata.name)} prefix={<UserOutlined />} /> */}
                </Col>
                <Col span={9}>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
