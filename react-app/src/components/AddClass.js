import React, { useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input } from 'antd';
import FormItem from "antd/es/form/FormItem";

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
            Lớp học
          </a>
          <Modal
            title="Tạo lớp mới"
            open={open}
            onOk={hideModal}
            onCancel={hideModal}
            okText="Tạo"
            cancelText="Hủy"
          >
            <Form>
                <FormItem className="mt-3" name="classname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập tên lớp!',
                                },
                            ]}>
                    <Input type="text" name="classname" placeholder="Nhập tên lớp"/>
                </FormItem>
                <FormItem className="mt-3" name = "classdescription">
                    <Input type="text" name = "classdescription" placeholder="Nhập mô tả(tùy chọn)"/>
                </FormItem>
                <Form.Item className="mt-3" name="check">
                    <p><Checkbox>Cho phép các thành viên trong lớp bỏ hoặc thêm học phần</Checkbox></p>
                    <p><Checkbox>Cho phép các thành viên trong lớp mời thành viên mới</Checkbox></p>
                </Form.Item>
                <FormItem className="mt-3" name = "classschool">
                    <Input type="text" name = "classschool" placeholder="Nhập tên trường của bạn"/>
                </FormItem>    
            </Form>
          </Modal>
        </>
      );
    };

const AddClass = () => (
        <Space>
          <LocalizedModal />
        </Space>
);

export default AddClass;