import React, { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Search from 'components/Search';
import Tao from "./Create";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BASE_URL } from "config";
import Dashboard from "pages/dashboard";

import {
    Link,
    Routes,
    Route
  } from "react-router-dom";
import "../pages/css/main.css";


function  logOut() {
    localStorage.removeItem('token');
    window.location.href = '/';
}

export default function HeaderPage() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
            <div className="navbar navbar-expand-lg navbar-dark d-flex">
                <div className="navbar-nav collapse navbar-collapse d-flex justify-content-between">
                    <div className='logo mt-2 ms-2'>
                        <Link to="/edit-info">
                            <h2 style={{color: "white"}} className="nav-link">QUIZLEARN</h2>
                        </Link>
                    </div>
                    <div ><Link className="nav-item nav-link text-lg"  to="/">Trang chủ</Link></div>
                    <div><Link className="nav-item nav-link" to="/library">Thư viện của bạn</Link></div>
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
                            <div className="more-info" style={{fontSize: "13px"}}>
                                <p className="ms-2">{user.fullname}</p>
                            </div>
                            <div className="dropdown-divider"></div>
                            <Link to="/edit-info"><p className="dropdown-item">
                                Thông tin tài khoản
                            </p></Link>
                            <div className="dropdown-divider"></div>
                            <a onClick={logOut} className="dropdown-item" href="#/">
                                Đăng xuất
                            </a>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
    );
}