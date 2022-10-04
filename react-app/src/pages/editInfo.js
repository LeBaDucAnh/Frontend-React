import React from "react";
import { Button, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal, Card } from 'antd';
import HeaderPage from "components/Header";
import "./css/main.css";
import {SettingFilled} from '@ant-design/icons'


const { Header, Content, Footer } = Layout;
export default function EditInfo(){
    return (
        <Layout>
            <Content className="layout mt-5">
                <h4>Chỉnh sửa thông tin cá nhân</h4>
                <Row className="ms-5">
                    <Col span={4}>
                        <SettingFilled style={{fontSize: "100px"}} />
                        <p style={{fontSize: "20px"}}>Đổi mật khẩu</p>
                    </Col>
                    <Col span={20}>
                        
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}