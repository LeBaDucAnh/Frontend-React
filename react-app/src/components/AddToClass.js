import React, {useState} from "react";
import { Modal, Button, Card, Row,Tabs,  Col } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { TabPane } from "react-bootstrap";
import CreateClass from "./CreateClass";
import CreateFolder from "./CreateFolder";

export default function AddToClassFolder() {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showModal} shape="circle" className="me-3" icon={<PlusOutlined />} size={"large"} title="Thêm học phần vào lớp hoặc thư mục" />
            <Modal title="Thêm vào lớp học hoặc thư mục"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
            >
                <Tabs defaultActiveKey="class">
                    <TabPane key="class" tab="Thêm vào lớp học">
                        <Card style={{ border: 0 }}>
                            <div className="border pt-2 mb-2 text-center"><p><PlusOutlined /> <CreateClass/> mới</p></div>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col span={20}>
                                    <h4>CNTT3-K14</h4>
                                </Col>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    <Button type="danger" size="large" icon={<MinusOutlined />} />
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col span={20}>
                                    <h4>PY2022</h4>
                                </Col>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    <Button type="primary" size="large" icon={<PlusOutlined />} />
                                </Col>
                            </Row>
                        </Card>
                    </TabPane>
                    <TabPane key="folder" tab="Thêm vào thư mục">
                        <Card style={{ border: 0 }}>
                            <div className="border pt-2 mb-2 text-center"><p><PlusOutlined /> <CreateFolder/> mới</p></div>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col span={20}>
                                    <h4>Python Basic</h4>
                                </Col>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    <Button type="danger" size="large" icon={<MinusOutlined />} />
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-2">
                            <Row>
                                <Col span={20}>
                                    <h4>Python Advance</h4>
                                </Col>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    <Button type="primary" size="large" icon={<PlusOutlined />} />
                                </Col>
                            </Row>
                        </Card>
                    </TabPane>
                </Tabs>
            </Modal>
        </>
    )
}
