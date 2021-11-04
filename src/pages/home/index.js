import {
  Alert,
  Button,
  Col,
  notification,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Student from "../../components/add-student";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./index.css";

const { Text } = Typography;

function Home() {
  const [data, setData] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [editData, seteditData] = useState();
  const classes = styles();

  useEffect(() => {
    getStudentList();
  }, []);

  const getStudentList = async () => {
    try {
      axios
        .get(`https://ostrom-backend.herokuapp.com/api/v1/student`)
        .then((res) => {
          if (res.status === 200) {
            setData(res?.data?.body);
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

  const handleEdit = (student) => {
    setisModalVisible(true);
    seteditData(student);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      key: "dob",
      render: (dob) => {
        return <>{moment(dob).format("L")}</>;
      },
    },
    {
      title: "Course",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, data) => (
        <Space size="middle">
          <Text
            onClick={() => handleEdit(data)}
            style={{ color: "#00C1B1", cursor: "pointer" }}
          >
            Edit
          </Text>
          <Text
            onClick={() => handleDelete(id)}
            style={{ color: "#00C1B1", cursor: "pointer" }}
          >
            Delete
          </Text>
        </Space>
      ),
    },
  ];

  const handleDelete = (id) => {
    try {
      axios
        .delete(`https://ostrom-backend.herokuapp.com/api/v1/student/${id}`)
        .then((res) => {
          if (res.status === 200) {
            notification["error"]({
              message: "Student Deleted!",
              icon: <DeleteOutlined style={{ color: "#ff0000 " }} />,
            });
            getStudentList();
          } else {
            <Alert message={data.message} />;
            notification["error"]({
              message: "Student Deleted!",
            });
          }
        });
    } catch (error) {}
  };

  return (
    <div className={classes.root}>
      <Row
        gutter={[16, 128]}
        align="middle"
        justify="center"
        style={{ width: 1055 }}
      >
        <Col span={24}>
          <Button
            style={{
              width: 119,
              height: 38,
              borderRadius: 6,
              color: "#fff",
              background: "#00C1B1",
              border: "none",
            }}
            onClick={() => setisModalVisible(true)}
          >
            Add Student
          </Button>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            className={classes.table}
          />
        </Col>
      </Row>

      <Student
        data={editData}
        studentList={getStudentList}
        visible={isModalVisible}
        onCancel={() => setisModalVisible(false)}
      />
    </div>
  );
}

export default Home;
