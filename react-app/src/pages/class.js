import React from "react";
import { Layout, Tabs, Button, Space, Card, Row, Col, Popover, Menu, Dropdown } from 'antd';
import HeaderPage from "components/Header";
import "./css/main.css";
import {DeleteFilled, DeleteOutlined, MinusOutlined, EditFilled, UserOutlined, FolderFilled, PlusOutlined, EllipsisOutlined, UserAddOutlined, FolderOutlined } from "@ant-design/icons";
import { TabPane } from "react-bootstrap";


const { Header, Content, Footer } = Layout;

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Sửa
            </a>  
          ),
          icon: <EditFilled />
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Bỏ lớp học
            </a>
          ),
          icon: <MinusOutlined />
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Xóa
            </a>
          ),
          icon: <DeleteOutlined />
        },
        {
            key: '4',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Xóa mọi thành viên
              </a>
            ),
            icon: <DeleteFilled />
        },
        
      ]}
    />
  );


export default function ShowClass(){
    return(
        <Layout className="layout">
            <div><HeaderPage/></div>
            <Content className="site-card-wrapper m-3">
                <div>
                    <Row>
                        <Col span={12}>
                            <h3><UserOutlined/> CNTT3</h3>
                        </Col>
                        <Col span={12} style={{textAlign: "right"}}>
                        <Popover title="Thêm học phần">
                            <Button shape="circle" className="me-3" icon={<PlusOutlined />} size={"large"}/> 
                        </Popover>
                        <Popover title="Thêm thành viên">
                            <Button shape="circle" className="me-3" icon={<UserAddOutlined/>} size={"large"}/> 
                        </Popover>
                        <Popover title="Thêm thư mục">
                            <Button shape="circle" className="me-3" icon={<FolderOutlined/>} size={"large"}/> 
                        </Popover>
                        <Dropdown overlay = {menu}>
                            <Button shape="circle" icon={<EllipsisOutlined/>} size={"large"} className="me-3"/> 
                        </Dropdown>
                        </Col>
                    </Row>
                </div>
                <Tabs defaultActiveKey="class" className="ms-5">
                    <TabPane key="class" tab="Các học phần">
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}>
                        <Card title="" size="small">
                            <p>4 thuật ngữ | Admin </p>
                            <p><h4>Python Basic</h4></p>
                        </Card>
                        
                    </Space>
                    </TabPane>
                    <TabPane key="folder" tab="Thư mục">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                            display: 'flex',
                            }}>
                            <Card title="" size="small">
                                <p>2 học phần</p>
                                <p><h4><FolderFilled/> Tháng 9</h4></p>
                            </Card>
                        </Space>
                    </TabPane>
                    <TabPane key="course" tab="Thành viên">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                            display: 'flex',
                            }}>
                            <Card title="" size="small">
                                <p>Quản trị viên lớp học</p>
                                <p><h4> Lê Bá Đức Anh</h4></p>
                            </Card>
                            <Card title="" size="small">
                                <p>Thành viên</p>
                                <p><h4> Hoàng Duy Đạt</h4></p>
                            </Card>
                        </Space>
                    </TabPane>
                </Tabs>
            </Content>
            <Footer style={{textAlign: 'center',}}>
                Quizlearn Design ©2022 Created by DucAnh
            </Footer>
        </Layout>
    );
}