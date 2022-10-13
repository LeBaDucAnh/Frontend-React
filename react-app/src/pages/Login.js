import "./css/Login.css";
import anh from "../static/Self-study.png";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import {Col, Row} from "antd";
import {Button, Checkbox, Input, Form } from 'antd';
import React, { useState } from "react";
import { BASE_URL } from "config";
import { Cookies } from "react-cookie";
import useCookies from "react-cookie/cjs/useCookies";

const {TabPane} = Tabs;

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');
    const [fullname, setFullname] = useState('');
    const [cookie, setCookie] = useCookies(['user']);

    const LogIn = async function(e) {
        e.preventDefault();
    //const[loginRecord, setLoginRecord] = useState({});
        let data = {email: email, password: password};
        data = JSON.stringify(data);
        let options = {
            method: "POST",
            body: data,
            headers: {"Content-Type": "application/json"}
        };
        let url = BASE_URL + '/api/login';
        let resp = await fetch(url, options);
        if(resp.status != 200) {
            setError('Tên đăng nhập hoặc mật khẩu không đúng')

        }
        else {
            let result = await resp.json();
            cookie.set('access_token', 'content of cookie'); 
            cookie = cookies.get('access_token'); 
            console.log(cookie)
            localStorage.setItem('token', result.jwt);
            alert("Dang nhap thanh cong");
            console.log(url);
            console.log(result);
            window.location.href = '/';
        }
    }

    const signIn = async function(e) {
        e.preventDefault();
        let data = {phone:phone, email: email, fullname:fullname, password: password};
        data = JSON.stringify(data);
        let options = {
            method: "POST",
            body: data,
            headers: {"Content-Type": "application/json"}
        };
        let url = BASE_URL + '/api/register';
        let resp = await fetch(url, options);
        if(resp.status != 200) {
            setError('Nhập đầy đủ thông tin đăng ký')
        }
        else {
            let result = await resp.json();
            localStorage.setItem('token', result.access);
            //window.location.href = '/';
        }
    }

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
                            <Input name="phone" value={phone} type="text" placeholder="Nhập số điện thoại" style={{height: "50px"}} onChange={(e)=>setPhone(e.target.value)}/>
                        </Form.Item>

                        <Form.Item className="mt-3" name="email" rules={[
                                {
                                    required: true,
                                    message: 'Nhập email!',
                                },
                            ]}>
                            <label for="email" className="mb-1">Email</label>
                            <Input name="email" type="email" value={email} placeholder="Nhập email" style={{height: "50px"}} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Item>

                        <Form.Item className="mt-3" name="fullname" rules={[
                                {
                                    required: true,
                                    message: 'Nhập họ và tên!',
                                },
                            ]}>
                            <label for="fullname" className="mb-1">Họ và tên</label>
                            <Input name="fullname" type="text" value={fullname} placeholder="Nhập họ và tên" style={{height: "50px"}} onChange={(e)=>setFullname(e.target.value)}/>
                        </Form.Item>

                        <Form.Item className="mt-4" name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Nhập mật khẩu!',
                                },
                            ]}>
                            <label for="password" className="mb-1">Mật khẩu</label>
                            <Input.Password name="password" value={password} placeholder="Nhập mật khẩu" style={{height: "50px"}} onChange={(e)=>setPassword(e.target.value)}/>
                            
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
                            <span id="error" style={{color: "red"}}>{error}</span>
                        </div>
                        <Form.Item>
                            <Button htmlType="submit" onClick={signIn} type="primary" style={{width:"100%", height:"50px"}}>Đăng ký</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </TabPane>
            <TabPane key="login" tab="Đăng nhập">
            <Col offset={2}>
                <Form  wrapperCol={{span: 22,}} initialValues={{remember: true,}} style={{marginTop: "30px"}} onSubmitCapture>
                    <Form.Item className="mt-3" name="username" rules={[
                            {
                                required: true,
                                message: 'Nhập số điện thoại hoặc email!',
                            },
                        ]}>
                        <Input name="email" value={email} type="text" className="" placeholder="Nhập email hoặc số điện thoại" style={{height: "50px"}} onChange={(e)=>setEmail(e.target.value)} />
                        <label for="email" className="mb-1 mt-2">Số điện thoại/Email</label>
                    </Form.Item>

                    <Form.Item className="mt-4" name="passwordForm"
                            rules={[
                            {
                                required: true,
                                message: 'Nhập mật khẩu!',
                            },
                        ]}>
                        <Input.Password name="password" value={password} placeholder="Nhập mật khẩu" style={{height: "50px"}} onChange={(e)=>setPassword(e.target.value)}/>
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
                        <span id="error" style={{color: "red"}}>{error}</span>
                    </div>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" style={{width:"100%", height:"50px"}} onClick={LogIn}>Đăng nhập</Button>
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

