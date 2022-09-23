import React, { useState } from "react";
import { Button, Modal, Space} from 'antd';
import { DeleteOutlined } from "@ant-design/icons";


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
          <Button onClick={showModal} className="ms-3" shape="circle"  icon={<DeleteOutlined />} size={"large"} title="Xóa học phần"/>
          <Modal
            title="Xóa học phần này?"
            open={open}
            onOk={hideModal}
            okText="Xóa học phần"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>Python Basic</h3></div>
            <div>
                <p>Bạn sắp xoá học phần này và toàn bộ dữ liệu trong đó. Không ai có thể truy cập vào học phần này nữa</p>
                <p><b>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</b></p>
            </div>
          </Modal>
        </>
      );
    };

const DeleteCourse = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteCourse;