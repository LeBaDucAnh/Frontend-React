import React, { useState, useEffect } from "react";
import "./css/course.css";
import "./css/main.css";
import { Button, Breadcrumb, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal, Card } from 'antd';
import 'react-slideshow-image/dist/styles.css'
import { UserOutlined, SnippetsFilled, EditOutlined, BookOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AddToClassFolder from "components/AddToClass";
import DeleteCourse from "components/DeleteCourse";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "config";
import FlashCard from "components/FlashCard";
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";


const { Content } = Layout;

function getFlashCard(store, id){    
    const id_course = localStorage.getItem("courseid");
    let url = BASE_URL + "/api/flashCardAll/" + id;
    console.log(url);
    let options = {
        headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
        }
    };
    fetch(url, options).then(resp=>resp.json()).then(result =>
        store.setState({
            flashCardList: result.data,
        }));
    }


    
function Course() {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const {id} = useParams();
    const store = useSliceStore('library');
    const [flashCardList] = useSliceSelector('library', ['flashCardList']);
    const [courseRecord, setCourseRecord] = useState({});
     useEffect(
        function (){
            getFlashCard(store, id);
            let url = BASE_URL + "/api/getCourseBy/" + id;
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
                <Breadcrumb.Item><Link to={"/"}>Trang chủ</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Học phần</Breadcrumb.Item>
            </Breadcrumb>
                <div className="mt-3">
                    <Row>
                        <Col span={12} className="ps-5">
                            <h3>{courseRecord?.data?.coursename}</h3>
                        </Col>
                        <Col span={12} className="pe-5" style={{ textAlign: "right" }}>
                            <Button type="primary" style={{borderRadius: "10px"}} size="large" icon={<SnippetsFilled />}>Kiểm tra</Button>
                        </Col>
                    </Row>

                </div>
                <FlashCard id={id}/>
                <hr />
                <div className="info-course ms-3 mt-5">
                    <Row>
                        <Col span={12}>
                            <span>Tạo bởi</span>
                            <h5><Avatar icon={<UserOutlined />} style={{ backgroundColor: 'gray' }} /> <b>{user.fullname}</b></h5>
                        </Col>
                        <Col span={12} className="pe-2" style={{ textAlign: "right" }}>
                            <AddToClassFolder />
                            <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                            <DeleteCourse />
                        </Col>
                    </Row>
                    <div className="info ms-2">
                        <p><ExclamationCircleOutlined /> {courseRecord?.data?.description || ''}</p>
                        <p>đã thêm vào lớp CNTT3-K14 | Lập trình</p>
                    </div>
                </div>
                <div className="list-card mt-5 mb-5">
                    <div className="mt-2 ms-3">
                        <h5>Thuật ngữ trong học phần này ({courseRecord.numberFlashcard})</h5>
                    </div>
                    <div className="m-5">
                        {flashCardList.map(card=>
                        <Card className="list-detail mb-2" type="inner" key={card.id}>
                            <Row>
                                
                                    <Col  span={10} style={{borderRight: "1px solid", textAlign:"center"}}><span>{card.defindName}</span></Col>
                                    <Col  span={10} style={{textAlign:"center"}}><span>{card.keyword}</span></Col>

                                <Col span={4} style={{textAlign: "right"}}>
                                    <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần" /></Link>
                                </Col>
                            </Row>
                        </Card>
                        )}
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

