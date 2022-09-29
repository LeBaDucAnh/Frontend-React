import React, { useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input } from 'antd';
import { BASE_URL } from "config";


const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    };

    const [classname, setClassname] = useState('');
    const [description, setDescription] = useState('');
    const [classschool, setClassschool] = useState('');
    const [isChecked, setChecked] = useState(0);
    const handleOnChange = () => {
      setChecked(1);
    };

    const createClass = async function(e){
      e.preventDefault();
      let data = {classname: classname, description: description, schoolname: classschool, allowAddMember: isChecked};
      data = JSON.stringify(data);
      let options = {
        method: "POST",
        body: data,
        headers: {"Content-type":"application/json"}
      };
      let url = BASE_URL + "/api/create-class/";
      let resp = await fetch(url, options);
      if(resp.status != 200){
        alert('Không thể tạo lớp');
      }
      else{
        alert("Tạo lớp mới thành công!");
        window.location.href = "/";
      }
    }

    return (
        <>
          <a onClick={showModal}>
            Lớp học
          </a>
          <Modal
            title="Tạo lớp mới"
            open={open}
            onOk={createClass}
            onCancel={hideModal}
            footer={[
              <Button key="back" onClick={hideModal}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={createClass}>
                Tạo
              </Button>
            ]}
          >
            <Form>
                <Form.Item className="mt-3" name="classname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập tên lớp!',
                                },
                            ]}>
                    <Input type="text" name="classname" placeholder="Nhập tên lớp" value={classname} onChange={(e)=>setClassname(e.target.value)}/>
                </Form.Item>
                <Form.Item className="mt-3" name = "classdescription">
                    <Input type="text" name = "classdescription" placeholder="Nhập mô tả(tùy chọn)" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Item>
                <Form.Item className="mt-3" name="check">
                    <p><Checkbox name="addMember" value={isChecked} onChange={handleOnChange}>Cho phép các thành viên trong lớp mời thành viên mới</Checkbox></p>
                </Form.Item>
                <Form.Item className="mt-3" name = "classschool">
                    <Input type="text" name = "classschool" placeholder="Nhập tên trường của bạn" value={classschool} onChange={(e)=>setClassschool(e.target.value)}/>
                </Form.Item>    
            </Form>
          </Modal>
        </>
      );
    };

const CreateClass = () => (
        <Space>
          <LocalizedModal />
        </Space>
);

export default CreateClass;