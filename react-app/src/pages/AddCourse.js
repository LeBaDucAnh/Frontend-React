import React, { useState } from "react";
import { Breadcrumb, Form, Layout, Input, Space, Button, message, Upload, Select } from 'antd';
import '../pages/css/main.css';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { BASE_URL } from "config";

const { Header, Content, Footer } = Layout;



export default function AddCourse() {
    const [namecourse, setCoursename] = useState('');
    const [description, setDescription] = useState('');
    const [display, setDisplay] = useState(1);
    const [edit, setEdit] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [define, setDefine] = useState('');
    const userid = localStorage.getItem('userid');
    const handleChangeDisplay = e => {
        setDisplay(e);
        console.log(e);
    }
    const handleChangeEdit = e => {
        setEdit(e);
        console.log(e);
    }

    const createCourse = async function (e) {
        //e.preventDefault();
        console.log(e);
        let data = { coursename: namecourse, description: description, userID: userid, allowDisplay: display, allowEdit: edit };
        data = JSON.stringify(data);
        let options = {
            method: "POST",
            body: data,
            headers: { "Content-type": "application/json" }
        };
        let url = BASE_URL + "/api/createCourse";
        let resp = await fetch(url, options);

        console.log(display);
        if (resp.status != 200) {
            alert('Không thể tạo học phần');
        }
        else {
            let result = await resp.json();
            localStorage.setItem('course', JSON.stringify(result));
            localStorage.setItem('courseid', result.id);
            let courseid = localStorage.getItem('courseid');

            let data2 = { keyword: keyword, defindName: define, courseID: courseid };
            data2 = JSON.stringify(data2);
            let options2 = {
                method: "POST",
                body: data2,
                headers: { "Content-type": "application/json" }
            }
            let respon = await (fetch(BASE_URL + "/api/createFlashcard", options2));
            alert("Tạo học phần mới thành công!");
            window.location.href = "/library";

        }
        

    }

    const { Option } = Select;

    return (
        <Layout className="addCourse">
            <Content className="site-card=wrapper m-3">
                <Breadcrumb style={{ margin: '16px 0', }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Học phần</Breadcrumb.Item>
                </Breadcrumb>
                <div className="m-2"><span><h4>Tạo học phần mới </h4></span></div>
                <Form onFinish={createCourse} name="dynamic_form_item" autoComplete="off">
                    <Row>
                        <Col span={12}>
                            <Form.Item>
                                <label for="namecourse">TIÊU ĐỀ</label>
                                <Input type="text" className="mt-2 mb-2" name="namecourse" placeholder="Nhập tiêu đề,ví dụ: chuyên đề sinh học,..." value={namecourse} onChange={(e) => setCoursename(e.target.value)} rules={[{ required: true, whitespace: true, message:"Nhập tên lớp"},]} />
                            </Form.Item>
                            <Form.Item>
                                <label for="descourse">MÔ TẢ</label>
                                <Input type="text" className="mt-2 mb-2" name="descourse" placeholder="Thêm mô tả..." value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ paddingLeft: "200px" }}>
                            <div>
                                <p><b>Hiển thị học phần</b></p>
                                <Select defaultValue="1"
                                    style={{
                                        width: 120,
                                    }}
                                    placement="bottomLeft"
                                    onChange={handleChangeDisplay}>
                                    <Option value="1">
                                        Mọi người
                                    </Option>
                                    <Option value="0">
                                        Chỉ tôi
                                    </Option>
                                </Select>

                            </div>
                            <br />
                            <div>
                                <p><b>Chỉnh sửa học phần</b></p>
                                <Select defaultValue="1"
                                    style={{
                                        width: 180,
                                    }}
                                    placement="bottomLeft"
                                    onChange={handleChangeEdit}>
                                    <Option value="1">
                                        Mọi người trong lớp
                                    </Option>
                                    <Option value="0">
                                        Chỉ tôi
                                    </Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>

                    {/* <Space
                        style={{ display: 'flex', marginBottom: 8, }} align="baseline">
                        <Form.Item
                            rules={[{ required: true, },]}>
                            <Input style={{ width: "500px" }} placeholder="Thuật ngữ" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true, },]}>
                            <Input style={{ width: "500px" }} placeholder="Định nghĩa" value={define} onChange={(e) => setDefine(e.target.value)} />
                        </Form.Item>
                    </Space> */}
                    <Row>
                        {/* <Form name="dynamic_form_nest_item" autoComplete="off"> */}
                            <Form.List name="Courses" rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 2) {
                                            return Promise.reject(new Error('Điền ít nhất 2 thẻ'));
                                        }
                                    },
                                },
                            ]}>
                                {(fields, { add, remove }, {errors}) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: 'flex',
                                                    marginBottom: 8,
                                                }} align="baseline">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'keyword']}
                                                    rules={[{ required: true, whitespace: true, message:"Nhập thông tin thẻ"},]}>
                                                    <Input style={{ width: "500px" }} placeholder="Thuật ngữ" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'define']}
                                                    rules={[{ required: true, whitespace: true, message:"Nhập thông tin định nghĩa"},]}>
                                                    <Input style={{ width: "500px" }} placeholder="Định nghĩa" value={define} onChange={(e) => setDefine(e.target.value)} />
                                                </Form.Item>
                                                {fields.length > 1 ? (
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                ) : null}
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{width: "200px", textAlign: "center", marginLeft: "20px"}}>
                                                Thêm thẻ
                                            </Button>
                                            <Form.ErrorList errors={errors} />
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>

                        {/* </Form> */}
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Tạo
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
}