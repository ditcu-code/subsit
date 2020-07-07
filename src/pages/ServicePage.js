import React, { useState } from "react";
import { List, Card, Button, Row, Col } from "antd";
import { Typography } from "antd";
import "../assets/styles/ServicePage.scss";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title } = Typography;

const data = [
  {
    title: "Netflix",
    cover: require("../assets/images/netflix-new-logo.png"),
  },
  {
    title: "Arcade",
    cover: require("../assets/images/app-arcade.png"),
  },
  {
    title: "Spotify",
    cover: require("../assets/images/spotify.png"),
  },
  {
    title: "Netflix",
    cover: require("../assets/images/netflix-new-logo.png"),
  },
  {
    title: "Arcade",
    cover: require("../assets/images/app-arcade.png"),
  },
  {
    title: "Spotify",
    cover: require("../assets/images/spotify.png"),
  },
];

const ServicePage = () => {
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
    <div className="service-page">
      <Row>
        <Col span={2} style={{ background: "#8F48EA" }}></Col>
        <Col span={20} className="service-hero">
          <div className="service-hero">
            <Title className="service-hero-title">
              Discover Popular Subscription
            </Title>
          </div>
        </Col>
        <Col span={2} style={{ background: "#8F48EA" }}></Col>
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="service-card">
          <div className="container">
            {/* <Title level={3} className="service-card-title">
            Popular Apps
          </Title> */}
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
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
                      height: 220,
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
              className="modal-service"
              centered
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              bodyStyle={{ padding: 0, borderRadius: "0.5em" }}
              width={450}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Return
                </Button>,
              ]}
              closeIcon={<CloseOutlined style={{ color: "white" }} />}
            >
              <div className="cover">
                <img src={cover} alt="" />
              </div>
              <div className="service-info">
                <Title level={3}>{title}</Title>
                <p>
                  Loripsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ipsam iusto facilis quae. Animi quasi repellat
                  eligendi amet necessitatibus repudiandae perferendis velit
                  officia obcaecati ad! Rem voluptatibus accusantium maxime l
                  ibero?
                </p>
              </div>
            </Modal>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};

export default ServicePage;
