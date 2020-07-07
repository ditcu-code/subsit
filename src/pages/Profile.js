import React, { useEffect, useState } from 'react';
import { Row, Col, Avatar, Input, Space, Button, Spin, Upload, Progress, notification, Modal } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/Profile.scss'
import {getProfile} from "../stores/actions/userdata"
import { editName } from "../stores/actions/userdata";
import Text from 'antd/lib/typography/Text';
const token = localStorage.getItem('userLocal');

const Profile = () => {
    const userdata = useSelector(state => state.userdata.profile)
    const [loading, setloading] = useState(true)
    const [showModalProfile, setShowModalProfile] = useState(false)
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [name, setname] = useState()
    const [buttondisabled, setbuttondisabled] = useState(true)
    const [progress, setProgress] = useState(0);
    const statusCek = useSelector(state => state.userdata.status)
    const dispatch = useDispatch()

    useEffect(() => {
        setInterval(() => {
            setloading(false)
        }, 2500);
    }, [])

    const loadingIcon = (
        <div style={{paddingTop:'10rem'}}>            
            <Spin size="large" style={{color:'red'}} />
        </div>
    )

    useEffect(() => {
        if (statusCek) {
            openNotificationName('success')
        }
    }, [statusCek])

    const handleUpdate = e => {
        dispatch(editName(name))
    }

    const handleInput = e => {
        setname({
            ...name,
            [e.target.name]: e.target.value
        })
        setbuttondisabled(false)
    }

    const avatarIcon = (
        <div>
            <Space direction='vertical' >
                <Avatar size={150} src={userdata ? userdata.image_url : <UserOutlined/>}/>
                <div className='buttonImage'>
                    <Button type='default' onClick={() => setShowModalProfile(true)}>Change Image</Button>
                </div>
                <Row style={{margin:'2rem 0 3rem 0'}}>
                    <Text type="secondary">Name</Text>
                    <Input name='name' size="large" defaultValue={userdata ? userdata.name : 'hi'} prefix={<UserOutlined />} onChange={handleInput} />
                </Row>
                <Button block type='primary' onClick={() => handleUpdate()} disabled={buttondisabled} >Update</Button>
            </Space>
        </div>
    )

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Your image was successfully updated.',
        });
      };

    const openNotificationName = type => {
        notification[type]({
            message: 'Your name was successfully updated.',
        });
    };

    const uploadImage = async options => {
        const { onSuccess, onError, file, onProgress } = options;
        const fmData = new FormData();
        const config = {
            headers: { Authorization: token },
            onUploadProgress: event => {
            const percent = Math.floor((event.loaded / event.total) * 100);
            setProgress(percent);
            if (percent === 100) {
                setTimeout(() => setProgress(0), 1000);
            }
            onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };
        fmData.append("image", file);
        try {
            const res = await axios.post(
            "https://subsit-team-a.herokuapp.com/api/v1/profile/update/photo",
            fmData,
            config
            );
            onSuccess("Ok");
            console.log("server res: ", res);
            dispatch(getProfile())
            setShowModalProfile(false)
            openNotificationWithIcon('success')
        } catch (err) {
            console.log("Eroor: ", err);
            const error = new Error("Some error");
            onError({ error });
        }
    }; 

    const handleOnChange = ({ file, fileList, event }) => {
        setDefaultFileList(fileList);
      };

    const modalEditImage = (
        <Modal width={200} className='modalEditImage'
        visible={showModalProfile}
        onOk={() => setShowModalProfile(false) && dispatch(getProfile)()}
        onCancel={() => setShowModalProfile(false)}
        footer={null}
        closable={false}
        >
                <Upload
                accept="image/*"
                customRequest={uploadImage}
                onChange={handleOnChange}
                listType="picture-card"
                defaultFileList={defaultFileList}
                className="image-upload-grid"
                >
                {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
                </Upload>
                {progress > 0 ? <Progress percent={progress} /> : null}
        </Modal>
    ) 

    return (
        <div className='profile-doom'>
            {modalEditImage}
            <Row>
                <Col span={9}>
                </Col>
                <Col span={6} className='avatar'>
                    {loading !== true ? avatarIcon : loadingIcon }
                </Col>
                <Col span={9}>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
