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

    const [foldername, setFoldername] = useState('');
    const [description, setDescription] = useState('');

    const createFolder = async function(e){
      e.preventDefault();
      let data = {foldername: foldername, description: description};
      data = JSON.stringify(data);
      let options = {
        method: "POST",
        body: data,
        headers: {"Content-type":"application/json"}
      };
      let url = BASE_URL + "/api/createFolder/";
      let resp = await fetch(url, options);
      if(resp.status != 200){
        alert('Không thể tạo thư mục');
      }
      else{
        alert("Tạo thư mục mới thành công!");
        window.location.href = "/";
      }
    }

    return (
        <>
          <a onClick={showModal} on>
            Thư mục
          </a>
          <Modal
            title="Tạo thư mục mới"
            open={open}
            onOk={createFolder}
            okText="Tạo thư mục"
            onCancel={hideModal}
            footer={[
              <Button key="back" onClick={hideModal}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={createFolder}>
                Tạo
              </Button>
            ]}
          >
            <Form>
                <Form.Item className="mt-3" name="classname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập tên thư mục!',
                                },
                            ]}>
                    <Input type="text" name="classname" placeholder="Nhập tên thư mục" value={foldername} onChange={(e)=>setFoldername(e.target.value)}/>
                </Form.Item>
                <Form.Item className="mt-3" name = "classdescription">
                    <Input type="text" name = "classdescription" placeholder="Nhập mô tả(tùy chọn)" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Item>  
            </Form>
          </Modal>
        </>
      );
    };

const CreateFolder = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default CreateFolder;