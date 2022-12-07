import React, { useState, useEffect } from "react";
import {Form, Button, Modal, Checkbox, Space, Input, List } from 'antd';
import {UserAddOutlined} from "@ant-design/icons";
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const LocalizedModal = () => {

  const [data, setData] = useState([]);

  const GetMemberInClass = (id) => {
    let url = BASE_URL + "/api/getAllMemberInClass/"+ id;
    console.log(url);
      let options = {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        };
      fetch(url, options).then(resp => resp.json()).then(
          result=>{
              setData([...data, ...result])
          });
  }
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    };

    const {id} = useParams();
    useEffect(() => {
        GetMemberInClass(id);
      },[]);

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
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    {item.fullname}
                  </List.Item>
                  )}
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