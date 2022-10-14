import React, { useState } from "react";
import { Form, Button, Modal, Checkbox, Space, Input, List } from 'antd';
import { FolderOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {Card, Row, Col} from 'antd';
import CreateFolder from "./CreateFolder";
import { BASE_URL } from "config";



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
            <Button onClick={showModal} shape="circle" className="me-3" icon={<FolderOutlined/>} size={"large"} title="Thêm thư mục"/>
            <Modal
                title="Thêm thư mục"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
            >
                <Card style={{ border: 0 }}>
                    <div className="border pt-3 mb-5 text-center"><p><PlusOutlined /> <CreateFolder/> </p></div>
                </Card>
                <Card className="mt-2">
                    <Row>
                        <Col span={20}>
                            <h4>Học lập trình Python</h4>
                        </Col>
                        <Col span={4} style={{ textAlign: "right" }}>
                            <Button type="danger" size="large" icon={<MinusOutlined />} />
                        </Col>
                    </Row>
                </Card>
                <Card className="mt-2">
                    <Row>
                        <Col span={20}>
                            <h4>Học lập trình Java</h4>
                        </Col>
                        <Col span={4} style={{ textAlign: "right" }}>
                            <Button type="primary" size="large" icon={<PlusOutlined />} />
                        </Col>
                    </Row>
                </Card>
            </Modal>
        </>
    );
};

const AddFolder = () => (
    <Space>
        <LocalizedModal />
    </Space>

);

export default AddFolder;