import React, { useEffect, useState } from "react";
import { BASE_URL } from "config";
import { DeleteOutlined, MinusOutlined, EditFilled, UserOutlined, FolderFilled, PlusOutlined, EllipsisOutlined, BankFilled, BookFilled, InfoCircleFilled } from "@ant-design/icons";
import { Layout, Breadcrumb, Tabs, Button, Space, Card, Row, Col, Popover, Menu, Dropdown, Modal, Select } from 'antd';


const YourCourse = (id) => {

    const [courseList, setCouselist] = useState([]);
    
    const getYourCourse = (id) =>{
        let url = BASE_URL + '/api/getCourseByIDCreator/'+localStorage.getItem("userid");
        console.log(url);
        let options = {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        fetch(url, options).then(resp => resp.json()).then(
            result =>
                {
                    setCouselist([...courseList, ...result])
                }
        );
    }

    useEffect = () =>{
        getYourCourse(id);
    }

    return (
        <>
        {courseList.map(courses => 
            <Card className="mt-2" key={courses.id}>
                <Row>
                    <Col span={20}>
                        <h4>{courses.coursename}</h4>
                    </Col>
                    <Col span={4} style={{ textAlign: "right" }}>
                        <Button size="large" type="danger" icon={<MinusOutlined />} />
                    </Col>
                </Row>
            </Card>
            )}
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
        </>
    )
}

export default YourCourse;