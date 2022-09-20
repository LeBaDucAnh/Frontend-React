import React, { useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input, List } from 'antd';
import {UserAddOutlined} from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const data = [
    'Lê Bá Đức Anh',
    'Hoàng Duy Đạt',
  ];

const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    };
    return (
        <>
        <Button onClick={showModal} shape="circle" className="me-3" icon={<UserAddOutlined/>} size={"large"} title="Thêm thành viên"/>
          <Modal
            title="Thêm thành viên"
            open={open}
            onOk={hideModal}
            onCancel={hideModal}
          >
            <div><Search style ={{width: "100%"}} allowClear size = "large" placeholder="Nhập tên thành viên muốn thêm..." onSearch={onSearch} enterButton /></div>
            <div></div>
            <div style={{textAlign: "center"}} className="mt-3">
                <Button type="primary" size="large">Thêm</Button>
                <p className="mt-3" style={{fontSize: "20px"}}>Danh sách thành viên lớp</p>    
            </div>
            <div>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </div>
          </Modal>
        </>
      );
    };

const AddUser = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default AddUser;