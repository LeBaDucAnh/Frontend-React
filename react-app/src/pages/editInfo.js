import React, {useState, useEffect} from "react";
import { Button, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal, Card } from 'antd';
import HeaderPage from "components/Header";
import "./css/main.css";
import {SettingFilled} from '@ant-design/icons'
import { BASE_URL } from "config";

const { Header, Content, Footer } = Layout;
export default function EditInfo(){
    // const UserView = async function(e){
        const [userRecord, setUserRecord] = useState({});
        useEffect(
            function(){
                let url = BASE_URL + "/api/user";
                console.log(url);
                
                let options = {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                };
                fetch(url, options).then(resp=>resp.json()).then(result => setUserRecord(result));

            }, []);
                // console.log(userRecord.data.fullname);
                console.log(userRecord);
    //}
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