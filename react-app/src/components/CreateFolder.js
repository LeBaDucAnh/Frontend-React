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
          <a onClick={showModal} on>
            Thư mục
          </a>
          <Modal
            title="Tạo thư mục mới"
            open={open}
            onOk={hideModal}
            okText="Tạo thư mục"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <Form>
                <Form.Item className="mt-3" name="classname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập tên thư mục!',
                                },
                            ]}>
                    <Input type="text" name="classname" placeholder="Nhập tên thư mục"/>
                </Form.Item>
                <Form.Item className="mt-3" name = "classdescription">
                    <Input type="text" name = "classdescription" placeholder="Nhập mô tả(tùy chọn)"/>
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