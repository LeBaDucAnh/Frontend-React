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
            title="Sửa thư mục"
            open={open}
            onOk={hideModal}
            okText="Lưu"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <Form>
                <Form.Item className="mt-3" name="classname"  rules={[
                                {
                                    required: true,
                                    message: 'Tiêu đề!',
                                },
                            ]}>
                    <label>Tiêu đề</label>
                    <Input type="text" name="classname"/>
                </Form.Item>
                <Form.Item className="mt-3" name = "classdescription">
                    <label>Mô tả</label>
                    <Input type="text" name = "classdescription"/>
                </Form.Item>  
            </Form>
          </Modal>
        </>
      );
    };

const EditFolder = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default EditFolder;