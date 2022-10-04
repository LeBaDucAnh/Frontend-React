import React, {useState} from "react";
import HeaderPage from "components/Header";
import { Layout, Form, Row, Col, Button, Input, Space, Select } from 'antd';
import './css/main.css';
import { MinusCircleOutlined, PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const handleChange = string => {
    console.log('selected ${value}');
};

export default function EditCourse() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout className="layout">
            <Content className="m-3">
                <div className="m-2">
                    <Row>
                        <Col span={12}>
                            <Link to="/learn-course"><LeftOutlined /><span>Trở về học phần</span></Link>
                        </Col>
                        <Col span={12} style={{textAlign: "right"}}>
                            <Button type="primary" size="large">Hoàn tất</Button>
                        </Col>
                    </Row>
                </div>
                <Form className="mt-5">
                    <Row>
                        <Col span={12}>
                            <Form.Item>
                                <label for="namecourse">TIÊU ĐỀ</label>
                                <Input type="text" className="mt-2 mb-2" name="namecourse" />
                            </Form.Item>
                            <Form.Item>
                                <label for="descourse">MÔ TẢ</label>
                                <Input type="text" className="mt-2 mb-2" name="descourse" />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{paddingLeft: "200px"}}>
                            <div>
                                <p><b>Hiển thị học phần</b></p>
                                <Select defaultValue="default"
                                        style={{
                                            width: 120,
                                        }}
                                        placement="bottomLeft"
                                        onChange={handleChange}>
                                    <Option value = "default">
                                        Mọi người
                                    </Option>
                                    <Option value = "privacy">
                                        Chỉ tôi
                                    </Option>
                                </Select>
                            </div>
                            <br/>
                            <div>
                                <p><b>Chỉnh sửa học phần</b></p>
                                <Select defaultValue="default"
                                        style={{
                                            width: 180,
                                        }}
                                        placement="bottomLeft"
                                        onChange={handleChange}>
                                    <Option value = "default">
                                        Mọi người trong lớp
                                    </Option>
                                    <Option value = "privacy">
                                        Chỉ tôi
                                    </Option>
                                </Select>
                            </div>
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
                                            <Button type="link" onClick={() => add()} block icon={<PlusOutlined />} size="large">
                                                Thêm thẻ
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Hoàn tất
                                </Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </Form>
            </Content>
        </Layout>
    )
}