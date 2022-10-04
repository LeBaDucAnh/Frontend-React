import React, {useEffect} from "react";
import {Card, Col, Row } from 'antd';
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";
import HeaderPage from "components/Header";
import '../pages/css/main.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, FileTextOutlined, UserOutlined, DatabaseFilled } from '@ant-design/icons';
import { BASE_URL} from "config";
import { Link } from "react-router-dom";



function getClassList(store){
    let url = BASE_URL + '/api/searchClass';
    let options = {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      };
    fetch(url, options).then(resp => resp.json()).then(
        result=>{
            store.setState({
                classList: result.data,
                total: result.total
            })
        });
}


const { Header, Content, Footer } = Layout;
export default function Dashboard(){
    const store = useSliceStore('dashboard');
    const [classList, total] = useSliceSelector('dashboard', ['classList', 'total']);
  
    useEffect(function(){
      getClassList(store);
    }, []);
    return(
        <Layout className="layout">
        <Content className="site-card-wrapper m-3">
        <Breadcrumb style={{margin: '16px 0',}}>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Lớp</Breadcrumb.Item>
        </Breadcrumb>
            <div className="m-2"><span><h4>Lớp của bạn: </h4></span></div>
            <div className="infor m-3"><UsergroupAddOutlined /><span>{total} lớp học được tạo</span></div>
            <Row gutter={16} className="mb-3">
            {classList.map(lop =>
                <Col span={8} key={lop.id} className="mb-3">
                    <Link to={"/class/"+lop.id}>
                        <Card title={lop.classname} bordered={false}> 
                            <div><HomeOutlined /> <span>{lop.schoolname}</span></div>
                            <div><FileTextOutlined /> <span>2 học phần</span></div>
                            <div><UserOutlined /> <span>4 thành viên</span></div>
                        </Card>
                     </Link>
                </Col>
            )}
            </Row>
        </Content>
        <Footer style={{textAlign: 'center',}}>
            Quizlearn Design ©2022 Created by DucAnh
        </Footer>
    </Layout>
    );
}