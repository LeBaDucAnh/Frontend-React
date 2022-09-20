import React, { useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input } from 'antd';

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
          <a onClick={showModal}>
            Sửa
          </a>
          <Modal
            title="Sửa lớp học"
            open={open}
            onOk={hideModal}
            okText="Lưu"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <Form>
                <Form.Item className="mt-3" name="classname">
                    <label>Tên lớp</label>
                    <Input type="text" name="classname"/>
                </Form.Item>
                <Form.Item className="mt-3" name = "classdescription">
                    <label>Mô tả</label>
                    <Input type="text" name = "classdescription" />
                </Form.Item>
                <Form.Item className="mt-3" name="check">
                    <p><Checkbox>Cho phép các thành viên trong lớp bỏ hoặc thêm học phần</Checkbox></p>
                    <p><Checkbox>Cho phép các thành viên trong lớp mời thành viên mới</Checkbox></p>
                </Form.Item>
                <Form.Item className="mt-3" name = "classschool">
                    <label>Tên trường</label>
                    <Input type="text" name = "classschool"/>
                </Form.Item>  
            </Form>
          </Modal>
        </>
      );
    };

const EditClass = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default EditClass;