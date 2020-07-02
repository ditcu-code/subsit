import React, { useState } from "react";
import { Col, Row, Modal, List, Card, Button, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../../assets/styles/Subscription.scss";

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
    // console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    // console.log(e);
    setVisible(false);
  };
  return (
    <div>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={2}>
          <Col></Col>
        </Col>
        <Col span={20}>
          <Col>
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
                      <Paragraph className="info-detail">
                        Next Payment:
                      </Paragraph>
                      <Paragraph className="info-detail">Duration:</Paragraph>
                      <Paragraph className="info-detail">Cost:</Paragraph>
                    </div>
                  </Modal>
                </List.Item>
              )}
            />
          </Col>
        </Col>
        <Col span={2}>
          <Col></Col>
        </Col>
      </Row>
    </div>
  );
};

export default Subscription;
