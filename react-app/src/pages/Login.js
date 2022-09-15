import "./css/Login.css";
import anh from "../static/Self-study.png";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import {Col, Row} from "antd";
import {Button, Checkbox, Input, Form } from 'antd';
import React, { useState } from "react";
import { BASE_URL } from "config";

const {TabPane} = Tabs;

export default function Login(){
//     const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const logIn = async function(e) {
//     e.preventDefault();
//     let data = {username: username, password: password};
//     data = JSON.stringify(data);
//     let options = {
//       method: "POST",
//       body: data,
//       headers: {"Content-Type": "application/json"}
//     };
//     let url = BASE_URL + '/api/token';
//     let resp = await fetch(url, options);
//     if(resp.status != 200) {
//       setError('Tên đăng nhập hoặc mật khẩu không đúng')
//     }else {
//       let result = await resp.json();
//       localStorage.setItem('token', result.access);
//       window.location.href = '/';
//     }
//   }

    return (
    <>
      <div id="login" className="d-flex">   
        <div className="col-6">
            <img src={anh} style = {{width: '100%', height: '100%'}} alt="" />
        </div>
        <div className="login-form col-6">
        <Tabs defaultActiveKey="login" >
            <TabPane key="signup" tab="Đăng ký">
                <Col offset={2}>
                    <Form wrapperCol={{span: 22,}} initialValues={{remember: true,}} style={{marginTop: "30px"}}>
                        <Form.Item className="mt-3" name="phone" rules={[
                                {
                                    required: true,
                                    message: 'Nhập số điện thoại!',
                                },
                            ]}>
                            <label for="phone" className="mb-1">Số điện thoại</label>
                            <Input name="phone" type="text" className="" placeholder="Nhập số điện thoại" style={{height: "50px"}}/>
                        </Form.Item>

                        <Form.Item className="mt-3" name="email" rules={[
                                {
                                    required: true,
                                    message: 'Nhập email!',
                                },
                            ]}>
                            <label for="email" className="mb-1">Email</label>
                            <Input name="email" type="email" className="" placeholder="Nhập email" style={{height: "50px"}}/>
                        </Form.Item>

                        <Form.Item className="mt-3" name="fullname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập họ và tên!',
                                },
                            ]}>
                            <label for="fullname" className="mb-1">Họ và tên</label>
                            <Input name="fullname" type="text" className="" placeholder="Nhập họ và tên" style={{height: "50px"}}/>
                        </Form.Item>

                        <Form.Item className="mt-4" name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Nhập mật khẩu!',
                                },
                            ]}>
                            <label for="password" className="mb-1">Mật khẩu</label>
                            <Input.Password name="password" placeholder="Nhập mật khẩu" style={{height: "50px"}}/>
                            
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            span: 0,
                            }}
                        >
                            <Checkbox>Tôi chấp thuận Điều khoản dịch vụ và Chính sách quyền riêng tư của Quizlet</Checkbox>
                        </Form.Item>
                        <div className="mt-3">
                            <span id="error" style={{color: "red"}}></span>
                        </div>
                        <Form.Item>
                            <Button htmlType="submit" type="primary" style={{width:"100%", height:"50px"}}>Đăng ký</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </TabPane>
            <TabPane key="login" tab="Đăng nhập">
            <Col offset={2}>
                <Form  wrapperCol={{span: 22,}} initialValues={{remember: true,}} style={{marginTop: "30px"}}>
                    <Form.Item className="mt-3" name="username" rules={[
                            {
                                required: true,
                                message: 'Nhập số điện thoại hoặc email!',
                            },
                        ]}>
                        <Input name="username" type="text" className="" placeholder="Nhập email hoặc số điện thoại" style={{height: "50px"}} />
                        <label for="username" className="mb-1 mt-2">Số điện thoại/Email</label>
                    </Form.Item>

                    <Form.Item className="mt-4" name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu!',
                            },
                        ]}>
                        <Input.Password name="password" placeholder="Nhập mật khẩu" style={{height: "50px"}} />
                        <label for="password" className="mb-1 mt-2">Mật khẩu</label>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        span: 8,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <div className="mt-3">
                        <span id="error" style={{color: "red"}}></span>
                    </div>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" style={{width:"100%", height:"50px"}}>Đăng nhập</Button>
                    </Form.Item>
                </Form>
            </Col>
            </TabPane>
        </Tabs>
        
        </div>
      </div>
    </>
    );
}

