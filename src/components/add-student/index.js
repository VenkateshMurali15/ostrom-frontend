import {
  Row,
  Form,
  Col,
  Input,
  DatePicker,
  Button,
  Modal,
  notification,
} from "antd";
import axios from "axios";
import moment from "moment";
import React from "react";
import styles from "./index.css";

const Student = ({ data, visible, onCancel, studentList }) => {
  const [form] = Form.useForm();
  const classes = styles();

  const handleSubmit = async (v) => {
    try {
      axios
        .post(`https://ostrom-backend.herokuapp.com/api/v1/student`, v)
        .then((res) => {
          if (res.status === 200) {
            notification["success"]({
              message: "Student Created!",
            });
            onCancel();
            window.location.reload();
          } else {
            notification["error"]({
              message: data.message,
            });
          }
        });
    } catch (error) {
      notification["error"]({
        message: error,
      });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleUpdate = (v) => {
    try {
      axios
        .put(
          `https://ostrom-backend.herokuapp.com/api/v1/student/${data.id}`,
          v
        )
        .then((res) => {
          if (res.status === 200) {
            notification["success"]({
              message: "Student Updated!",
            });
            onReset();
            onCancel();
            studentList();
            window.location.reload();
          } else {
            notification["error"]({
              message: data.message,
            });
          }
        });
    } catch (error) {
      notification["error"]({
        message: error,
      });
    }
  };

  return (
    <Modal
      title={data ? "Update Student" : "Create Student"}
      width={1063}
      bodyStyle={{ padding: 0 }}
      footer={false}
      visible={visible}
      onCancel={onCancel}
    >
      <div className={classes.inputContainer}>
        <Form onFinish={data ? handleUpdate : handleSubmit} form={form}>
          <div style={{ padding: 24 }}>
            <Row gutter={[16, 16]}>
              <Col span={4}>
                <p>First Name</p>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                  initialValue={data ? data.firstName : ""}
                >
                  <Input placeholder="Enter First Name" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <p>Last Name</p>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your Last Name!" },
                  ]}
                  initialValue={data ? data.lastName : ""}
                >
                  <Input placeholder="Enter Last Name" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <p>Date of Birth</p>
                <Form.Item
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Date of Birth!",
                    },
                  ]}
                  initialValue={data ? moment(data.dob) : ""}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={9}>
                <p>Course Name</p>
                <Form.Item
                  name="courseName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Course Name!",
                    },
                  ]}
                  initialValue={data ? data.courseName : ""}
                >
                  <Input placeholder="Enter Course Name" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <p>Hours</p>
                <Form.Item
                  name="hours"
                  rules={[
                    {
                      required: true,
                      message: "Please input your hours!",
                    },
                  ]}
                  initialValue={data ? data.hours : ""}
                >
                  <Input placeholder="Hours" type="number" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <p>Price €</p>
                <Form.Item
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input your price!",
                    },
                  ]}
                  initialValue={data ? data.price : ""}
                >
                  <Input placeholder="Price €" type="number" />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Row align="middle" justify="end" className={classes.saveContainer}>
            <Button
              style={{
                width: "fit-content",
                height: 38,
                borderRadius: 6,
                color: "#fff",
                background: "#00C1B1",
                border: "none",
                fontFamily: "Inter",
              }}
              htmlType="submit"
            >
              {data ? "Update" : "Save"}
            </Button>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default Student;
