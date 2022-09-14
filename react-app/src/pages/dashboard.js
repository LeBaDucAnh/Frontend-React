import React from "react";
import {Card, Col, Row } from 'antd';
import HeaderPage from "components/Header";
import '../pages/css/main.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;
export default function Dashboard(){
    return(
        <Layout className="layout">
        <div><HeaderPage/></div>
        <Content className="site-card-wrapper m-3">
        <Breadcrumb style={{margin: '16px 0',}}>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Lớp</Breadcrumb.Item>
            {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
            <div className="m-2"><span><h4>Lớp của bạn: </h4></span></div>
            <div className="infor m-3"><UsergroupAddOutlined /><span>03 lớp học được tạo</span></div>
            <Row gutter={16} className="mb-3">
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            </Row>
            <Row gutter={16}>
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Python Basic" bordered={false}>
                    <div><HomeOutlined /> <span>Đại học Công nghiệp Hà Nội</span></div>
                    <div><FileTextOutlined /> <span>2 học phần</span></div>
                    <div><UserOutlined /> <span>4 thành viên</span></div>
                </Card>
            </Col>
            </Row>
        </Content>
        <Footer style={{textAlign: 'center',}}>
            Quizlearn Design ©2022 Created by DucAnh
        </Footer>
    </Layout>
    );
}