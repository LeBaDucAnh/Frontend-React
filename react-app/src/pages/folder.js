import React, {useState} from "react";
import { Breadcrumb, Layout, Menu, Button, Dropdown, Modal, Select } from 'antd';
import HeaderPage from "components/Header";
import {Card, Col, Row, Space } from 'antd';
import "./css/main.css";
import { FolderFilled, EditOutlined, DeleteOutlined, EllipsisOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import DeleteFolder from "components/DeleteFolder";
import EditFolder from "components/EditFolder";

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const handleChange = string => {
    console.log('selected ${value}');
  };
const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <EditFolder/>
          ),
          icon: <EditOutlined />,
        },
        {
          key: '2',
          label: (
            <DeleteFolder/>
          ),
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );


export default function Folder(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <Layout className="layout">
            <div><HeaderPage/></div>
            <Content className="site-card-wrapper m-3">
                <Row>
                    <Col span={12}>
                        <div className="m-2"><h3><FolderFilled/> Lập trình Python</h3></div>
                    </Col>
                    <Col span={12} style={{textAlign: "right"}}>
                        <Button shape="circle" icon={<PlusOutlined />} onClick={showModal} size="large" className="me-2"/>
                        <Modal title="Thêm học phần" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <Card style={{border: 0}}>
                                <div className="border pt-2 mb-2 text-center"><Link to="/add-course"><p><PlusOutlined /> Thêm học phần mới</p></Link></div>
                                <Select
                                    defaultValue="Học phần của bạn"
                                    style={{
                                        width: 180,
                                    }}
                                    placement="bottomLeft"
                                    onChange={handleChange}
                                    >
                                    <Option value="yourcourse">Học phần của bạn</Option>
                                    <Option value="classcourse">Học phần của lớp</Option>
                                    <Option value="coursed">Học phần đã học</Option>
                                </Select>
                            </Card>
                            <Card className="mt-2">
                              <Row>
                                <Col span={20}>
                                  <h4>Học lập trình Python</h4>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                  <Button type="danger" size="large" icon={<MinusOutlined />}/>
                                </Col>
                              </Row>
                            </Card>
                            <Card className="mt-2">
                              <Row>
                                <Col span={20}>
                                  <h4>Học lập trình Java</h4>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                  <Button type="primary" size="large" icon={<PlusOutlined />}/>
                                </Col>
                              </Row>
                            </Card>
                        </Modal>
                        <Dropdown overlay={menu} arrow={{pointAtCenter: true,}}>
                            <Button shape="circle" icon={<EllipsisOutlined />} size="large"/>
                        </Dropdown>
                    </Col>
                </Row>
                <Row className="mt-5 ms-3">
                        <Space>
                            <Card title="" style={{width: "500px"}} className="me-3">
                                <p>6 thuật ngữ | Đức Anh Lê Bá</p>
                                <p><h4> Học lập trình Python</h4></p>
                            </Card>
                            <Card title="" style={{width: "500px"}}>
                                <p>6 thuật ngữ | Đức Anh Lê Bá</p>
                                <p><h4> Học lập trình Python</h4></p>
                            </Card>
                        </Space>
                </Row>              
            </Content>
        </Layout>
    )
}