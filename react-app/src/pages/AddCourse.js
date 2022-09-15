import React from "react";
import HeaderPage from "components/Header";
import { Breadcrumb, Form, Layout, Input, Space, Button } from 'antd';
import '../pages/css/main.css';
import {Row, Col} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

export default function AddCourse(){
    return(
        <Layout className="addCourse">
        <div><HeaderPage/></div>
        <Content className="site-card=wrapper m-3">
            <Breadcrumb style={{margin: '16px 0',}}>
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
                            <Input type="text" className="mt-2 mb-2" name="namecourse" placeholder="Nhập tiêu đè,ví dụ: chuyên đề sinh học,..."/>
                        </Form.Item>
                        <Form.Item>
                            <label for="descourse">MÔ TẢ</label>
                            <Input type="text" className="mt-2 mb-2" name="descourse" placeholder="Thêm mô tả..."/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
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
                                    <Input style={{width: "600px"}} placeholder="Thuật ngữ" />
                                    
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
                                    <Input style={{width: "600px"}} placeholder="Định nghĩa" />
                                    
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                                ))}
                                <Form.Item>
                                <Button type="link"  onClick={() => add()} block icon={<PlusOutlined />}>
                                    Thêm thẻ
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
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