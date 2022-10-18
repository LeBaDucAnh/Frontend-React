import React, { useState, useEffect } from "react";
import HeaderPage from "components/Header";
import ReactCardFlip from "react-card-flip";
import "./css/course.css";
import "./css/main.css";
import { Button, Breadcrumb, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal, Card } from 'antd';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { UserOutlined, SnippetsFilled, EditOutlined } from '@ant-design/icons';
import AddToClassFolder from "components/AddToClass";
import DeleteCourse from "components/DeleteCourse";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "config";
import { useSliceSelector } from "utils/reduxHelper";

const { Header, Content, Footer } = Layout;




function getFlashCard(store){    
    let url1 = BASE_URL + "/api/flashCardAll/" + localStorage.getItem("courseid");
    console.log(url1);
    let options = {
        headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
        }
    };
    console.log(url1);
    fetch(url1, options).then(resp=>resp.json()).then(result =>
        store.setState({
            flashCardList: result,
        }));
    }


function Course() {
    const [flip, setFlip] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            console.log('slide transition from ${oldIndex} to ${newIndex}');
        }
    };

    const {id} = useParams();
    const store = useSliceSelector('library');
    const [flashCardList] = useSliceSelector('library', ['flashCardList']);
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
                            <h3>{courseRecord.coursename}</h3>
                        </Col>
                        <Col span={12} className="pe-5" style={{ textAlign: "right" }}>
                            <Button type="primary" size="large" icon={<SnippetsFilled />}>Kiểm tra</Button>
                        </Col>
                    </Row>

                </div>
                <Slide {...properties}>
                    {/* {flashCardList.map(fcard => ( */}
                    <div className="each-slide" key="">
                        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                            <div className="card-course" onClick={() => setFlip(!flip)}>
                                {/* {fcard.keyword} */}
                                <br />
                                <br />

                            </div>
                            <div className="card-back" onClick={() => setFlip(!flip)}>
                                {/* {fcard.defindName} */}
                                <br />
                                <br />

                            </div>

                        </ReactCardFlip>
                    </div>
                    {/* ))}  */}
                    <div className="each-slide">
                        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                            <div className="card-course" onClick={() => setFlip(!flip)}>
                                OOP2
                                <br />
                                <br />

                            </div>
                            <div className="card-back" onClick={() => setFlip(!flip)}>
                                Hướng đối tượng2
                                <br />
                                <br />

                            </div>

                        </ReactCardFlip>
                    </div>
                    <div className="each-slide">
                        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                            <div className="card-course" onClick={() => setFlip(!flip)}>
                                OOP3
                                <br />
                                <br />

                            </div>
                            <div className="card-back" onClick={() => setFlip(!flip)}>
                                Hướng đối tượng3
                                <br />
                                <br />

                            </div>

                        </ReactCardFlip>
                    </div>
                </Slide>
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
                        <h5>Thuật ngữ trong học phần này (3)</h5>
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

