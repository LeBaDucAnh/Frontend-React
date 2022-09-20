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
            title="Xóa lớp này?"
            open={open}
            onOk={hideModal}
            okText="Xóa lớp"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>Lớp học CNTT3</h3></div>
            <div>
                <p>Bạn chuẩn bị xoá lớp này. Không ai có thể truy cập vào lớp này nữa.</p>
                <p>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</p>
            </div>
          </Modal>
        </>
      );
    };

const DeleteClass = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteClass;