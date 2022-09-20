import React from "react";
import HeaderPage from "components/Header";
import { Breadcrumb, Layout, Tabs, Button, Space, Card } from "antd";
import { TabPane } from "react-bootstrap";
import "../pages/css/main.css";
import {UsergroupAddOutlined, FolderFilled} from '@ant-design/icons';
import { Link } from "react-router-dom";

const {Header, Content, Footer} = Layout;

export default function Show(){

    return(
        <Layout className="showClass">
            <div><HeaderPage/></div>
            <Content className="site-card=wrapper m-3">
                <Tabs defaultActiveKey="class" className="ms-5">
                    <TabPane key="class" tab="Lớp học">
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}>
                        <Card title="" size="small">
                            <p>4 học phần | 2 thành viên | Đại học Công nghiệp Hà Nội</p>
                            <p><Link to="/class"><h4><UsergroupAddOutlined />Python Basic</h4></Link></p>
                        </Card>
                        <Card title="" size="small">
                            <p>4 học phần | 2 thành viên | Đại học Công nghiệp Hà Nội</p>
                            <p><h4><UsergroupAddOutlined />Python Basic</h4></p>
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
                                    <p><Link to="/folder"><h4><FolderFilled /> Lập trình Python</h4></Link></p>
                                
                            </Card>
                            <Card title="" size="small">
                                <p>4 học phần</p>
                                <p><h4><FolderFilled /> Lập trình Java</h4></p>
                            </Card>
                        </Space>
                    </TabPane>
                    <TabPane key="course" tab="Học phần">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                            display: 'flex',
                            }}>
                            <Card title="" size="small">
                                <p>6 thuật ngữ | Đức Anh Lê Bá</p>
                                <p><h4> Học lập trình Python</h4></p>
                            </Card>
                            <Card title="" size="small">
                                <p>6 thuật ngữ | Đức Anh Lê Bá</p>
                                <p><h4> Học lập trình Python</h4></p>
                            </Card>
                        </Space>
                    </TabPane>
                </Tabs>
                
            </Content>
        </Layout>
    )
}