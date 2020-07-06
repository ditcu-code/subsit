import React, { useState } from "react";
import { Col, Row, Modal, List, Card, Button, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../../assets/styles/Subscription.scss";
import InputSub from "./InputSub";

const { Title, Paragraph } = Typography;

const data = [
  {
    title: "Netflix",
    cover: require("../../assets/images/netflix-new-logo.png"),
  },
  {
    title: "Arcade",
    cover: require("../../assets/images/app-arcade.png"),
  },
  {
    title: "Spotify",
    cover: require("../../assets/images/spotify.png"),
  },
  {
    title: "Netflix",
    cover: require("../../assets/images/netflix-new-logo.png"),
  },
  {
    title: "Arcade",
    cover: require("../../assets/images/app-arcade.png"),
  },
  {
    title: "Spotify",
    cover: require("../../assets/images/spotify.png"),
  },
];

const Subscription = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const showModal = (title, cover) => {
    setVisible(true);
    setTitle(title);
    setCover(cover);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div className="sub-component subscription">
      <Row style={{ marginTop: "2rem" }}>
        <Col span={2}></Col>
        <Col span={20}>
          <Row align="middle" style={{ marginBottom: "1.5rem" }}>
            <Col span={12}>
              <Title className="head-title" level={2}>
                Your subs
              </Title>
            </Col>
            <Col span={12} className="btn-col">
              <InputSub />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 4,
                  xxl: 4,
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      className="card-item"
                      hoverable
                      onClick={() => showModal(item.title, item.cover)}
                      style={{
                        background: `url(${item.cover})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "0.5em",
                        backgroundPosition: "center",
                        height: 150,
                      }}
                    >
                      <div className="overlay">
                        <div className="text">{item.title}</div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
              <Modal
                className="modal-sub"
                centered
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                bodyStyle={{ padding: 0, borderRadius: "0.5em" }}
                width={400}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Unsubscribe
                  </Button>,
                ]}
                closeIcon={<CloseOutlined style={{ color: "white" }} />}
              >
                <div className="cover-sub">
                  <img src={cover} alt="" />
                </div>
                <div className="sub-info">
                  <Title level={3}>{title}</Title>
                  <Paragraph className="info-detail">Next Payment:</Paragraph>
                  <Paragraph className="info-detail">Duration:</Paragraph>
                  <Paragraph className="info-detail">Cost:</Paragraph>
                </div>
              </Modal>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};

export default Subscription;
