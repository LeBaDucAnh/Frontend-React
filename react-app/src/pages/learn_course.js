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

    // function GetAdminInClass(store, id){
    //     let url = BASE_URL + "/api/getAllMemberInClass/"+ id;
    //     console.log(url);
    //       let options = {
    //            headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //           }
    //         };
    //       fetch(url, options).then(resp => resp.json()).then(
    //           result=>{
    //               store.setState({
    //                   admin: result.admin,
    //               })
    //           });
    //   }
    
function Course() {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const {id} = useParams();
    const store = useSliceStore('library');
    const [flashCardList] = useSliceSelector('library', ['flashCardList']);
    // const [admin] = useSliceSelector('class',['admin']);
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
        // GetAdminInClass(store, id);

    return (
        
        <Layout>
            <Content>
            <Breadcrumb style={{margin: '16px 10px',}}>
                <Breadcrumb.Item><Link to={"/"}>Trang ch???</Link></Breadcrumb.Item>
                <Breadcrumb.Item>H???c ph???n</Breadcrumb.Item>
            </Breadcrumb>
                <div className="mt-3">
                    <Row>
                        <Col span={12} className="ps-5">
                            <h3>{courseRecord?.data?.coursename}</h3>
                        </Col>
                        <Col span={12} className="pe-5" style={{ textAlign: "right" }}>
                            <Button type="primary" style={{borderRadius: "10px"}} size="large" icon={<SnippetsFilled />}>Ki???m tra</Button>
                        </Col>
                    </Row>

                </div>
                <FlashCard id={id}/>
                <hr />
                <div className="info-course ms-3 mt-5">
                    <Row>
                        <Col span={12}>
                            <span>T???o b???i</span>
                            <h5><Avatar icon={<UserOutlined />} style={{ backgroundColor: 'gray' }} /> <b>{courseRecord?.data?.adname}</b></h5>
                        </Col>
                        <Col span={12} className="pe-2" style={{ textAlign: "right" }}>
                            <AddToClassFolder />
                            <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="S???a h???c ph???n" /></Link>
                            <DeleteCourse />
                        </Col>
                    </Row>
                    <div className="info ms-2">
                        <p><ExclamationCircleOutlined /> {courseRecord?.data?.description || ''}</p>
                        {/* <p>???? th??m v??o l???p CNTT3-K14 | L???p tr??nh</p> */}
                    </div>
                </div>
                <div className="list-card mt-5 mb-5">
                    <div className="mt-2 ms-3">
                        <h5>Thu???t ng??? trong h???c ph???n n??y ({courseRecord.numberFlashcard})</h5>
                    </div>
                    <div className="m-5">
                        {flashCardList.map(card=>
                        <Card className="list-detail mb-2" type="inner" key={card.id}>
                            <Row>
                                
                                    <Col  span={10} style={{borderRight: "1px solid", textAlign:"center"}}><span>{card.defindName}</span></Col>
                                    <Col  span={10} style={{textAlign:"center"}}><span>{card.keyword}</span></Col>

                                <Col span={4} style={{textAlign: "right"}}>
                                    <Link to="/edit-course"><Button shape="circle" icon={<EditOutlined />} size="large" title="S???a h???c ph???n" /></Link>
                                </Col>
                            </Row>
                        </Card>
                        )}
                    </div>
                    <div className="mb-5">
                        <Link to="/edit-course"><Button type="primary" className="editxoa">
                            Th??m ho???c x??a thu???t ng???
                        </Button></Link>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Course;

