import React, { useState, useEffect } from "react";
import "./css/course.css";
import "./css/main.css";
import { Button, Breadcrumb, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal, Card } from 'antd';
import 'react-slideshow-image/dist/styles.css'
import { UserOutlined, SnippetsFilled, EditOutlined } from '@ant-design/icons';
import AddToClassFolder from "components/AddToClass";
import DeleteCourse from "components/DeleteCourse";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "config";
import FlashCard from "components/FlashCard";



const { Content } = Layout;

function Course() {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const {id} = useParams();
     const [courseRecord, setCourseRecord] = useState({});
     useEffect(
        function (){
            let url = BASE_URL + "/api/getCourseBy/" + id;
            localStorage.setItem("courseid", id);
            let options = {
                headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              };
              fetch(url, options).then(resp=>resp.json()).then(result => setCourseRecord(result));
            },[]);

    return (
        
        <Layout>
            <Content>
            <Breadcrumb style={{margin: '16px 10px',}}>
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>Học phần</Breadcrumb.Item>
            </Breadcrumb>
                <div className="mt-3">
                    <Row>
                        <Col span={12} className="ps-5">
                            <h3>{courseRecord?.data?.coursename}</h3>
                        </Col>
                        <Col span={12} className="pe-5" style={{ textAlign: "right" }}>
                            <Button type="primary" size="large" icon={<SnippetsFilled />}>Kiểm tra</Button>
                        </Col>
                    </Row>

                </div>
                <FlashCard/>
                <hr />
                <div className="info-course ms-3 mt-5">
                    <Row>
                        <Col span={12}>
                            
                            <h5><Avatar icon={<UserOutlined />} style={{ backgroundColor: 'gray' }} /> <b>{user.fullname}</b></h5>
                        </Col>
                        <Col span={12} className="pe-2" style={{ textAlign: "right" }}>
                            <AddToClassFolder />
                            <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                            <DeleteCourse />
                        </Col>
                    </Row>
                    <div className="info ms-2">
                        <p>{courseRecord.description}</p>
                        <p>đã thêm vào CNTT3-K14 | Lập trình | CNTT3-K14</p>
                    </div>
                </div>
                <div className="list-card mt-5 mb-5">
                    <div className="mt-2 ms-3">
                        <h5>Thuật ngữ trong học phần này ({courseRecord.numberFlashcard})</h5>
                    </div>
                    <div className="m-5">
                        <Card className="list-detail" type="inner" >
                            <Row>
                                <Col span={20}>
                                    <span style={{marginRight: "100px", borderRight: "1px solid gray", paddingRight:"200px"}}>Hướng đối tượng</span>
                                    <span>OOP</span>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                    <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                                </Col>
                            </Row>
                            
                        </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            className="list-detail" type="inner">
                            <Row>
                                <Col span={20}>
                                    <span style={{marginRight: "100px", borderRight: "1px solid gray", paddingRight:"200px"}}>Hướng đối tượng</span>
                                    <span>OOP</span>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                    <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                                </Col>
                            </Row>
                        </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            className="list-detail" type="inner">
                            <Row>
                                <Col span={20}>
                                    <span style={{marginRight: "100px", borderRight: "1px solid gray", paddingRight:"200px"}}>Hướng đối tượng</span>
                                    <span>OOP</span>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                    <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="mb-5">
                        <Link to="/edit-course"><Button type="primary" className="editxoa">
                            Thêm hoặc xóa thuật ngữ
                        </Button></Link>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Course;

