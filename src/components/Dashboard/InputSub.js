import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../assets/styles/Subscription.scss";

const InputSub = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Add new sub
      </Button>{" "}
      <div className="input-sub">
        <Modal
          className="modal-input-sub"
          centered
          visible={visible}
          title="Input New Subscription"
          onOk={handleOk}
          onCancel={handleCancel}
          bodyStyle={{ borderRadius: "0.5em" }}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Subscribe
            </Button>,
          ]}
        >
          <Form name="normal_login" className="login-form">
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input name="title" placeholder="Title" />
            </Form.Item>
            <Form.Item
              name="cost"
              rules={[{ required: true, message: "Please input cost!" }]}
            >
              <Input name="cost" placeholder="Cost" />
            </Form.Item>
            <Form.Item
              name="due_date"
              rules={[{ required: true, message: "Please input due date!" }]}
            >
              <Input name="due_date" placeholder="Due date" />
            </Form.Item>
            <Form.Item
              name="payment"
              rules={[{ required: true, message: "Please input payment!" }]}
            >
              <Input name="payment" placeholder="Payment" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default InputSub;
