import React, { useState } from "react";
import { Modal, Button, Form, Input, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../assets/styles/Subscription.scss";

const InputSub = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onCreate = (values) => {
    setLoading(true);
    const newValues = {
      ...values,
      due_date: values["due_date"].format("YYYY-MM-DD"),
    };
    setTimeout(() => {
      console.log("Received values of form: ", newValues);
      setLoading(false);
      setVisible(false);
    }, 3000);
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
              onClick={() => {
                form
                  .validateFields()
                  .then((values) => {
                    form.resetFields();
                    onCreate(values);
                  })
                  .catch((info) => {
                    console.log("Validate Failed:", info);
                  });
              }}
            >
              Subscribe
            </Button>,
          ]}
        >
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            layout="vertical"
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input name="title" />
            </Form.Item>
            <Form.Item
              name="cost"
              label="Cost"
              rules={[{ required: true, message: "Please input cost!" }]}
            >
              <Input name="cost" />
            </Form.Item>
            <Form.Item
              name="due_date"
              label="Due date"
              rules={[{ required: true, message: "Please input due date!" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="payment"
              label="Payment"
              rules={[{ required: true, message: "Please input payment!" }]}
            >
              <Input name="payment" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default InputSub;
