import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Tabs, Button, Space, Card, Row, Col, Popover, Menu, Dropdown, Modal, Select } from 'antd';
import HeaderPage from "components/Header";
import "./css/main.css";
import { DeleteOutlined, MinusOutlined, EditFilled, UserOutlined, FolderFilled, PlusOutlined, EllipsisOutlined, BankFilled, BookFilled, InfoCircleFilled } from "@ant-design/icons";
import { TabPane } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AddUser from "components/AddUser";
import AddFolder from "components/AddFolder";
import EditClass from "components/EditClass";
import DeleteClass from "components/DeleteClass";
import { BASE_URL } from "config";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const handleChange = string => {
    console.log('selected ${value}');
};

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <EditClass />
                ),
                icon: <EditFilled />
            },
            {
                key: '2',
                label: (
                    <DeleteClass />
                ),
                icon: <DeleteOutlined />
            },

        ]}
    />
);

const menu1 = (
    <Menu
        items={[
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Quản trị viên
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Xóa
                    </a>
                ),
            },
        ]}
    />
);



function GetClassByID(store, id){
        let url = BASE_URL + "/api/getClassBy/" + id;
        console.log(url);
        //localStorage.setItem("id_class", id);
        let options = {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          };
        //console.log(url);
        fetch(url, options).then(resp=>resp.json()).then(
            result => {
                store.setState({
                    classRecord: result
                })
            });
}




async function getCourseByClass(store, id){

    let url = BASE_URL + "/api/getAllCourseInClass/"+id;
    console.log(url);
    let options = {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          };
        //console.log(url);
        let res = await(fetch(url, options).then(resp=>resp.json()).then(
            result => {
                console.log("Ketqua", result)
                store.setState({
                    courseRecord: result,

                })
        }));
        
        // let url1 = BASE_URL + "/api/getCourseBy/"+ course_id;

        // let re = await(fetch(url1, options).then(resp=>resp.json()).then(
        //     result =>{
        //         store.setState({

        //         })
        //     }
        // )
}

function GetMemberInClass(store, id){
    let url = BASE_URL + "/api/getAllMemberInClass/"+ id;
    console.log(url);
      let options = {
           headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        };
      fetch(url, options).then(resp => resp.json()).then(
          result=>{
              store.setState({
                  memberRecord: result,
              })
          });
  }


  function GetFolderInClass(store, id){
    let url = BASE_URL + "/api/getAllFolderInClass/"+ id;
    console.log(url);
      let options = {
           headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        };
      fetch(url, options).then(resp => resp.json()).then(
          result=>{
              store.setState({
                  folderRecord: result,
              })
          });
  }

function getNameCourseById(store, course_id){
    let url = BASE_URL + "/api/getCourseBy/"+ course_id;
    console.log(url);
    let options = {
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          };
        //console.log(url);
        fetch(url, options).then(resp=>resp.json()).then(
            result => {
                store.setState({
                    nameCourse: result.data.coursename,
                    //courseRecord: result.data,
                    numberCard: result.numberFlashcard,
                })
        });
}

export default function ShowClass() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
    const store = useSliceStore('class');
    const [memberRecord] = useSliceSelector('class', ['memberRecord']);
    const [classRecord] = useSliceSelector('class', ['classRecord']);
    const [courseRecord] = useSliceSelector('class', ['courseRecord']);
    const [folderRecord] = useSliceSelector('class', ['folderRecord']);
    const user = JSON.parse(localStorage.getItem("user"));
    const {id} = useParams();

    useEffect(function(){
        GetClassByID(store, id);
        getCourseByClass(store, id);
        GetMemberInClass(store, id);
        GetFolderInClass(store, id);
    }, []);
    
    return (
        
        <Layout className="layout">
            <Content className="site-card-wrapper m-3">
            <Breadcrumb style={{margin: '16px 0',}}>
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>Lớp</Breadcrumb.Item>
            </Breadcrumb>
                <div>
                    <Row>
                        <Col span={12}>
                            <h3><UserOutlined /> {classRecord?.data?.classname}</h3>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Button shape="circle" className="me-3" icon={<PlusOutlined />} size={"large"} onClick={showModal} title="Thêm học phần" />
                            <Modal title="Thêm học phần" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <Card style={{ border: 0 }}>
                                    <div className="border pt-3 mb-5 text-center"><Link to="/add-course"><p><PlusOutlined /> Thêm học phần mới</p></Link></div>
                                    <Select
                                        defaultValue="Học phần của bạn"
                                        style={{
                                            width: 180,
                                        }}
                                        placement="bottomLeft"
                                        onChange={handleChange}
                                    >
                                        <Option value="yourcourse">Học phần của bạn</Option>
                                        <Option value="foldercourse">Học phần trong thư mục</Option>
                                    </Select>
                                </Card>
                                <Card className="mt-2">
                                    <Row>
                                        <Col span={20}>
                                            <h4>Học lập trình Python</h4>
                                        </Col>
                                        <Col span={4} style={{ textAlign: "right" }}>
                                            <Button type="danger" size="large" icon={<MinusOutlined />} />
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="mt-2">
                                    <Row>
                                        <Col span={20}>
                                            <h4>Học lập trình Java</h4>
                                        </Col>
                                        <Col span={4} style={{ textAlign: "right" }}>
                                            <Button type="primary" size="large" icon={<PlusOutlined />} />
                                        </Col>
                                    </Row>
                                </Card>
                            </Modal>
                            <AddUser id={id} />
                            <AddFolder />
                            <Dropdown overlay={menu}>
                                <Button shape="circle" icon={<EllipsisOutlined />} size={"large"} className="me-3" />
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col span={16}>
                        <Tabs defaultActiveKey="class" className="ms-5">
                            <TabPane key="class" tab="Các học phần">
                                <Space
                                    direction="vertical"
                                    size="middle"
                                    style={{
                                        display: 'flex',
                                    }}>
                                    {courseRecord.map(course_class =>
                                    
                                        <Card title="" size="small" key={course_class.id}>
                                            <Link to={"/learn-course/"+course_class.courseID}>
                                                
                                                <p>{course_class.numberCard} thuật ngữ | {user.fullname} </p>
                                                <p><h4>{course_class.coursesName}</h4></p>
                                                {/* <p>ABC</p> */}
                                            </Link>
                                        </Card>
                                    
                                    )}

                                </Space>
                            </TabPane>
                            <TabPane key="folder" tab="Thư mục">
                                <Space
                                    direction="vertical"
                                    size="middle"
                                    style={{
                                        display: 'flex',
                                    }}>
                                    {folderRecord.map(folder => 
                                    <Card title="" size="small" key={folder.id}>
                                        <p>Học phần</p>
                                        <p><h4><FolderFilled /> {folder.id}</h4></p>
                                    </Card>
                                    )}
                                </Space>
                            </TabPane>
                            <TabPane key="course" tab="Thành viên">
                                <Space
                                    direction="vertical"
                                    size="middle"
                                    style={{
                                        display: 'flex',
                                    }}>
                                    <Card title="" size="small">
                                        <p>Quản trị viên lớp học</p>
                                        <p><h4>{user.fullname}</h4></p>
                                    </Card>
                                    {memberRecord.map(member => 
                                    <Card title="" size="small" key={member.id}>
                                        <p>Thành viên</p>
                                        <p>
                                            <Row>
                                                <Col span={12}>
                                                    <h4>{member.id}</h4>
                                                </Col>
                                                <Col span={12} style={{ textAlign: "right" }}>
                                                    <Dropdown overlay={menu1}>
                                                        <Button type="text" icon={<EllipsisOutlined />} size={"large"} className="me-3" />
                                                    </Dropdown>
                                                </Col>
                                            </Row>
                                        </p>
                                    </Card>
                                    )}
                                </Space>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={8} className="ps-5 pt-3">
                        <h5>Chi tiết lớp học</h5>
                        <p><BankFilled /> {classRecord?.data?.schoolname}</p>
                        <p><BookFilled />Học phần {classRecord.numberOfCourse}  </p>
                        <p><UserOutlined />Thành viên {classRecord.numberOfMember} </p>
                        <p><InfoCircleFilled /> {classRecord?.data?.description}</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}