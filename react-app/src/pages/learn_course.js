import React, { useState } from "react";
import HeaderPage from "components/Header";
import ReactCardFlip from "react-card-flip";
import "./css/course.css";
import "./css/main.css";
import { Button, Layout, Row, Col, Avatar, Tabs, Menu, Dropdown, Modal } from 'antd';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { UserOutlined, SnippetsFilled, EditOutlined } from '@ant-design/icons';
import AddToClassFolder from "components/AddToClass";
import DeleteCourse from "components/DeleteCourse";
import { Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;

function Course() {
    const [flip, setFlip] = useState(false);

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

    return (
        <Layout>
            <div><HeaderPage /></div>
            <Content>
                <div className="mt-3">
                    <Row>
                        <Col span={12} className="ps-5">
                            <h3>Học lập trình Python</h3>
                        </Col>
                        <Col span={12} className="pe-5" style={{textAlign: "right"}}>
                            <Button type="primary" size="large" icon={<SnippetsFilled />}>Kiểm tra</Button> 
                        </Col>
                    </Row>
                    
                </div>
                <Slide {...properties}>
                    <div className="each-slide">
                        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                            <div className="card-course" onClick={() => setFlip(!flip)}>
                                OOP
                                <br />
                                <br />

                            </div>
                            <div className="card-back" onClick={() => setFlip(!flip)}>
                                Hướng đối tượng
                                <br />
                                <br />

                            </div>

                        </ReactCardFlip>
                    </div>
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
                <hr/>
                <div className="info-course ms-2 mt-5">
                    <Row>
                        <Col span={12}>
                            <Avatar icon={<UserOutlined />} style={{backgroundColor: 'gray'}} />
                            <span className="ms-2"><b>lebaducanh</b></span>
                        </Col>
                        <Col span={12} className="pe-2" style={{textAlign: "right"}}>
                            <AddToClassFolder/>
                            <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="Sửa học phần"/></Link>
                            <DeleteCourse/>
                        </Col>
                    </Row>
                    <div>
                        <p>Học lập trình với python</p>
                        <p>đã thêm vào CNTT3-K14 | Lập trình | CNTT3-K14</p>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Course;

