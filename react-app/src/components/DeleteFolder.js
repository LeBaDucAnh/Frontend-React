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
            Xóa
          </a>
          <Modal
            title="Xóa thư mục này?"
            open={open}
            onOk={hideModal}
            okText="Xóa thư mục"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>Thư mục Lập trình Python</h3></div>
            <div><p>Bạn chuẩn bị xoá thư mục này. Không ai có thể truy cập vào thư mục này nữa.</p></div>
          </Modal>
        </>
      );
    };

const DeleteFolder = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteFolder;