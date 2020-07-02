import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
          centered
          visible={visible}
          title="Input New Subscription"
          onOk={handleOk}
          onCancel={handleCancel}
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
              name="input1"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input name="input1" placeholder="Input 1" />
            </Form.Item>
            <Form.Item
              name="input2"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input name="input2" placeholder="Input 2" />
            </Form.Item>
            <Form.Item
              name="input3"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input name="input3" placeholder="Input 3" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default InputSub;
