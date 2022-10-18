import React, { useEffect } from "react";
import HeaderPage from "components/Header";
import { Layout, Tabs, Space, Card } from "antd";
import { TabPane } from "react-bootstrap";
import "../pages/css/main.css";
import { UsergroupAddOutlined, FolderFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";
import { BASE_URL } from "config";


const { Header, Content, Footer } = Layout;

function getClassList(store) {
    let url = BASE_URL + '/api/getClassByIDCreator/'+localStorage.getItem("userid");
    let options = {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      };
    fetch(url, options).then(resp => resp.json()).then(
        result => {
            store.setState({
                classList: result.data,
            })
        })
}

function getFolderList(store) {
    let url = BASE_URL + '/api/getFolderByIDCreator/'+localStorage.getItem("userid");
    console.log(url);
    let options = {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      };
    fetch(url, options).then(resp => resp.json()).then(
        result =>
            store.setState({
                folderList: result,
            })
    )
}

function getCourseList(store) {
    let url = BASE_URL + '/api/getCourseByIDCreator/'+localStorage.getItem("userid");
    console.log(url);
    let options = {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      };
    fetch(url, options).then(resp => resp.json()).then(
        result =>
            store.setState({
                courseList: result,
            })
    )
}

export default function Show() {
    const user = JSON.parse(localStorage.getItem("user"));
    const store = useSliceStore('library');
    const [folderList, classList, courseList] = useSliceSelector('library', ['folderList', 'classList', 'courseList']);

    useEffect(function () {
        getClassList(store);
        getFolderList(store);
        getCourseList(store);
    }, []);

    return (
        <Layout className="showClass">
            <Content className="site-card=wrapper m-3">
                <Tabs defaultActiveKey="class" className="ms-5">
                    <TabPane key="class" tab="Lớp học">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                                display: 'flex',
                            }}>
                            {classList.map(lop =>
                                <Link to={"/class/" + lop.id}>
                                    <Card title="" size="small" key={lop.id}>
                                        <p>4 học phần | 2 thành viên | {lop.schoolname}</p>
                                        <p><h4><UsergroupAddOutlined />{lop.classname}</h4></p>
                                    </Card>
                                </Link>
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
                            {folderList.map(folder =>
                                <Link to={"/folder/" + folder.id}>
                                    <Card title="" size="small" key={folder.id}>
                                        {folder.id}
                                        <p>2 học phần</p>
                                        <p><h4><FolderFilled /> {folder.foldername}</h4></p>
                                    </Card>
                                </Link>
                            )}

                        </Space>
                    </TabPane>
                    <TabPane key="course" tab="Học phần">
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                                display: 'flex',
                            }}>
                            {courseList.map(course =>
                            <Link to={"/learn-course/" + course.id}>
                                <Card title="" size="small" key={course.id}>
                                    <p>{course.id}</p>
                                    <p>6 thuật ngữ | {user.fullname}</p>
                                    <p><h4> {course.coursename} </h4></p>
                                </Card>
                            </Link>
                            )}
                            <Card title="" size="small">
                                <p>6 thuật ngữ | Đức Anh Lê Bá</p>
                                <p><h4> Học lập trình Python</h4></p>
                            </Card>
                        </Space>
                    </TabPane>
                </Tabs>

            </Content>
        </Layout>
    )
}