import React, {useEffect, useState} from "react";
import {Card, Col, Row } from 'antd';
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";
import HeaderPage from "components/Header";
import '../pages/css/main.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, FileTextOutlined, UserOutlined, DatabaseFilled } from '@ant-design/icons';
import { BASE_URL} from "config";
import { Link } from "react-router-dom";



function getClassListByCreator(store){
    let url = BASE_URL + '/api/getClassByIDCreator/'+localStorage.getItem("userid");
    console.log(url);
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
function getClassList(store){
    let url = BASE_URL + '/api/classAll';
    console.log(url);
    let options = {
         headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      };
    fetch(url, options).then(resp => resp.json()).then(
        result=>{
            store.setState({
                classListAll: result,
            })
        });
}

// function getClassId(store, pk){
    
//     let url = BASE_URL + "/api/getClassBy/" + pk;
//     let options = {
//         headers: {
//           "Authorization": "Bearer " + localStorage.getItem("token")
//         }
//       };
//     //console.log(url);
//     fetch(url, options).then(resp=>resp.json()).then(result=>{
//         store.setState({
//             classRecord: result,
//         })
//     });
// }


const { Header, Content, Footer } = Layout;
export default function Dashboard(){
    const store = useSliceStore('dashboard');
    const [classList, total] = useSliceSelector('dashboard', ['classList', 'total']);
    const [classListAll] = useSliceSelector('dashboard',['classListAll']);
    const [classListSearch, totalSearch, searchParams] = useSliceSelector('dashboard', ['classListSearch','totalSearch','searchParams']);
    
    useEffect(function(){
      getClassListByCreator(store);
      getClassList(store);
      //getClassId(store, pk);
      
    }, []);
    return(
        <Layout className="layout">
        <Content className="site-card-wrapper m-3">
        <Breadcrumb style={{margin: '16px 0',}}>
            <Breadcrumb.Item>Trang ch???</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>

        {/* <div className="m-2"><span><h4>L???p c???n t??m: </h4></span></div>
        <div className="infor m-3"><UsergroupAddOutlined /><span>{totalSearch} l???p h???c ???????c t??m th???y</span></div>
            <Row gutter={16} className="mb-3" >
            {classListSearch.map(lop =>
                <Col span={8} key={lop.id} className="mb-3" >
                    <Link to={"/class/"+lop.id}>
                        <Card title={lop.classname} bordered={false}> 
                            <div><HomeOutlined /> <span>{lop.schoolname}</span></div>
                            <div><FileTextOutlined /> <span>3 h???c ph???n</span></div>
                            <div><UserOutlined /> <span>4 th??nh vi??n</span></div>
                        </Card>
                     </Link>
                </Col>
            )}
            </Row> */}

            <div className="m-2"><span><h4>L???p c???a b???n: </h4></span></div>
            <div className="infor m-3"><UsergroupAddOutlined /><span>{total} l???p h???c ???????c t???o</span></div>
            <Row gutter={16} className="mb-3" >
            {classList.map(lop =>
                <Col span={8} key={lop.id} className="mb-3" >
                    <Link to={"/class/"+lop.id}>
                        <Card title={lop.classname} bordered={false}> 

                            <div><HomeOutlined /> <span>{lop.schoolname}</span></div>
                            <div><FileTextOutlined /> <span>{lop.courses.length} h???c ph???n</span></div>
                            <div><UserOutlined /> <span>{lop.members.length} th??nh vi??n</span></div>
                        </Card>
                     </Link>
                </Col>
            )}
            </Row>
            <div className="m-2"><span><h4>C??c l???p h???c : </h4></span></div>
            <br/>
            <div className="infor m-3"><UsergroupAddOutlined /><span>{totalSearch} l???p h???c ???????c t??m th???y</span></div>
            <Row gutter={16} className="mb-3">
            {classListSearch.map(loptong =>
                <Col span={8} key={loptong.id} className="mb-3" >
                    <Link to={"/class/"+loptong.id} >
                        <Card title={loptong.classname} bordered={false}> 
                            <div><HomeOutlined /> <span>{loptong.schoolname}</span></div>
                            <div><FileTextOutlined /> <span>{loptong.courses.length} h???c ph???n</span></div>
                            <div><UserOutlined /> <span>{loptong.members.length} th??nh vi??n</span></div>
                        </Card>
                     </Link>
                </Col>
            )}
            </Row>
        </Content>
        <Footer style={{textAlign: 'center',}}>
            Quizlearn Design ??2022 Created by DucAnh
        </Footer>
    </Layout>
    );
}