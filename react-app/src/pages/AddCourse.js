import React, { useState } from "react";
import HeaderPage from "components/Header";
import { Breadcrumb, Form, Layout, Input, Space, Button, message, Upload, Select } from 'antd';
import '../pages/css/main.css';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { BASE_URL } from "config";

const { Header, Content, Footer } = Layout;



export default function AddCourse() {
    const [namecourse, setCoursename] = useState('');
    const [description, setDescription] = useState('');
    // const [, setClassschool] = useState('');
    // const [isChecked, setChecked] = useState(0);

    const createCourse = async function (e) {
        let data = { coursename: namecourse, description: description }
        data = JSON.stringify(data);
        let options = {
            method: "POST",
            body: data,
            headers: { "Content-type": "application/json" }
        };
        let url = BASE_URL + "/api/createCourse/";
        let resp = await fetch(url, options);
        if (resp.status != 200) {
            alert('Không thể tạo học phần');
        }
        else {
            alert("Tạo mới thành công!");
            window.location.href = "/";
        }


    }

    const { Option } = Select;

    return (
        <Layout className="addCourse">
            <Content className="site-card=wrapper m-3">
                <Breadcrumb style={{ margin: '16px 0', }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Học phần</Breadcrumb.Item>
                    {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
                </Breadcrumb>
                <div className="m-2"><span><h4>Tạo học phần mới </h4></span></div>
                <Form>
                    <Row>
                        <Col span={12}>
                            <Form.Item>
                                <label for="namecourse">TIÊU ĐỀ</label>
                                <Input type="text" className="mt-2 mb-2" name="namecourse" placeholder="Nhập tiêu đề,ví dụ: chuyên đề sinh học,..." value={namecourse} onChange={(e) => setCoursename(e.target.value)} />
                            </Form.Item>
                            <Form.Item>
                                <label for="descourse">MÔ TẢ</label>
                                <Input type="text" className="mt-2 mb-2" name="descourse" placeholder="Thêm mô tả..." value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <div>
                                <label>Hiển thị với</label>
                                <Select style={{
                                    width: 120, marginLeft: 50, marginBottom: 50
                                }} defaultValue="people">
                                    <Option value="people">
                                        Mọi người
                                    </Option>
                                    <Option value="myself">
                                        chỉ tôi
                                    </Option>
                                </Select>
                            </div>
                            <div>
                                <label>Ai có thể sửa</label>
                                <Select style={{
                                    width: 120, marginLeft: 50
                                }} defaultValue="people">
                                    <Option value="people">
                                        Mọi người
                                    </Option>
                                    <Option value="myself">
                                        Chỉ tôi
                                    </Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>

                    <Space
                        style={{
                            display: 'flex',
                            marginBottom: 8,
                        }}
                        align="baseline"

                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input style={{ width: "500px" }} placeholder="Thuật ngữ" />

                        </Form.Item>
                        <Form.Item

                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input style={{ width: "500px" }} placeholder="Định nghĩa" />

                        </Form.Item>

                    </Space>
                    <Space
                        style={{
                            display: 'flex',
                            marginBottom: 8,
                        }}
                        align="baseline"

                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input style={{ width: "500px" }} placeholder="Thuật ngữ" />

                        </Form.Item>
                        <Form.Item

                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input style={{ width: "500px" }} placeholder="Định nghĩa" />

                        </Form.Item>

                    </Space>
                    <Row>
                        <Form name="dynamic_form_nest_item" autoComplete="off">
                            <Form.List name="Courses" rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 2) {
                                            return Promise.reject(new Error('Điền ít nhất 2 thẻ'));
                                        }
                                    },
                                },
                            ]}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    marginBottom: 8,
                                                }}
                                                align="baseline"

                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'first']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input style={{ width: "500px" }} placeholder="Thuật ngữ" />

                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'last']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                        },
                                                    ]}
                                                >
                                                    <Input style={{ width: "500px" }} placeholder="Định nghĩa" />

                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="link" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Thêm thẻ
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button type="primary" key="submit" onClick={createCourse}>
                                    Tạo
                                </Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </Form>
            </Content>
        </Layout>
    );
}