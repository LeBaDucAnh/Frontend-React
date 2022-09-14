import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Search from 'components/Search';
import Tao from "./Create";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
    Link,
    Routes,
    Route
  } from "react-router-dom";
import "../pages/css/main.css";


export default function HeaderPage() {
    return (
            <div className="navbar navbar-expand-lg navbar-dark d-flex">
                <div className="navbar-nav collapse navbar-collapse d-flex justify-content-between">
                    <div className='logo mt-2 ms-2'>
                        <h2 style={{color: "white"}}>QUIZLEARN</h2>
                    </div>
                    <div ><Link className="nav-item nav-link active text-lg"  to="/">Trang chủ</Link></div>
                    <div><a className="nav-item nav-link" href="#/">Thư viện của bạn</a></div>
                    <div><FontAwesomeIcon icon="fa-solid fa-sort-down" /><Tao/></div>
                    <div><Search/></div>
                
        
                <ul className="navbar-nav ml-auto" style = {{marginRight: "10px"}}>
                    <li className="nav-item no-arrow">
                        <a className="nav-link dropdown-toggle p-0" data-bs-toggle="dropdown" href="void(0)">
                        <Avatar
                            style={{
                                backgroundColor: 'gray',
                            }}
                            icon={<UserOutlined />}
                            />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end me-2">
                            <a className="dropdown-item" href="#/">
                                Thông tin tài khoản
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#/">
                                Đăng xuất
                            </a>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
    );
}