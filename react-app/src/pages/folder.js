import React, {useState, useEffect} from "react";
import {Layout, Breadcrumb, Menu, Button, Dropdown, Modal, Select } from 'antd';
import HeaderPage from "components/Header";
import {Card, Col, Row, Space } from 'antd';
import "./css/main.css";
import { FolderFilled, EditOutlined, DeleteOutlined, EllipsisOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";
import DeleteFolder from "components/DeleteFolder";
import EditFolder from "components/EditFolder";
import { BASE_URL } from "config";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";
import userEvent from "@testing-library/user-event";


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
            <EditFolder/>
          ),
          icon: <EditOutlined />,
        },
        {
          key: '2',
          label: (
            <DeleteFolder/>
          ),
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );
  function getCourseByFolderID(store, id){
    let url = BASE_URL+'/api/getAllCourseInFolder/'+id;
    console.log(url);
    let options = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    };
    fetch(url, options).then(resp => resp.json()).then(
      result =>
          store.setState({
              courseList: result.result,
          })
    )
  }

  

export default function Folder(){



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
    const store = useSliceStore('library');
    const user = JSON.parse(localStorage.getItem("user"));
    const [courseList] = useSliceSelector('library', ['courseList']);
    const {id} = useParams();
    const [folder, setFolder] = useState({});
    const [admin] = useSliceSelector('class',['admin']);

    useEffect(function(){
      let url = BASE_URL + '/api/getFolderBy/'+id;
      fetch(url).then(resp=>resp.json()).then(result => setFolder(result));
      getCourseByFolderID(store, id);
    }, [])

    return (
        <Layout className="layout">
            <Content className="site-card-wrapper m-3" style = {{minHeight: "500px"}}>
            <Breadcrumb style={{margin: '16px 0',}}>
              <Breadcrumb.Item><Link to={"/"}>Trang ch???</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Th?? m???c</Breadcrumb.Item>
            </Breadcrumb>
                <Row>
                    <Col span={12}>
                        <div className="m-2"><h3><FolderFilled/> {folder.foldername}</h3></div>
                    </Col>
                    <Col span={12} style={{textAlign: "right"}}>
                        <Button shape="circle" icon={<PlusOutlined />} onClick={showModal} size="large" className="me-2"/>
                        <Modal title="Th??m h???c ph???n" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <Card style={{border: 0}}>
                                <div className="border pt-2 mb-2 text-center"><Link to="/add-course"><p><PlusOutlined /> Th??m h???c ph???n m???i</p></Link></div>
                                <Select
                                    defaultValue="H???c ph???n c???a b???n"
                                    style={{
                                        width: 180,
                                    }}
                                    placement="bottomLeft"
                                    onChange={handleChange}
                                    >
                                    <Option value="yourcourse">H???c ph???n c???a b???n</Option>
                                    <Option value="classcourse">H???c ph???n c???a l???p</Option>
                                    <Option value="coursed">H???c ph???n ???? h???c</Option>
                                </Select>
                            </Card>
                            <Card className="mt-2">
                              <Row>
                                <Col span={20}>
                                  <h4>H???c l???p tr??nh Python</h4>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                  <Button type="danger" size="large" icon={<MinusOutlined />}/>
                                </Col>
                              </Row>
                            </Card>
                            <Card className="mt-2">
                              <Row>
                                <Col span={20}>
                                  <h4>H???c l???p tr??nh Java</h4>
                                </Col>
                                <Col span={4} style={{textAlign: "right"}}>
                                  <Button type="primary" size="large" icon={<PlusOutlined />}/>
                                </Col>
                              </Row>
                            </Card>
                        </Modal>
                        <Dropdown overlay={menu} arrow={{pointAtCenter: true,}}>
                            <Button shape="circle" icon={<EllipsisOutlined />} size="large"/>
                        </Dropdown>
                    </Col>
                </Row>
                <Row className="mt-5 ms-3">
                        <Space>
                          {courseList.map(course => 
                          <Link to={"/learn-course/" + course.courseID}>
                            <Card title="" style={{width: "500px"}} className="me-3" key={course.id}>
                                <p> {course.numberCard} thu???t ng??? | {admin[0].adname}</p>
                                <p><h4> {course.courseName}</h4></p>
                            </Card>
                          </Link>
                            )}
                        </Space>
                </Row>              
            </Content>
        </Layout>
    )
}