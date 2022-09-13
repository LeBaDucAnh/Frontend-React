import React from "react";
import { Button, Popover } from 'antd';
import "../pages/css/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const content = (
    <div className="detail p-3">
        <ul id = "lietke">
            <li><FontAwesomeIcon icon="fa-solid fa-house-blank"/><a>Lớp học</a></li>
            <li><FontAwesomeIcon icon="fa-solid fa-folder"/><a>Học phần</a></li>
            <li><FontAwesomeIcon icon="fa-solid fa-folder"/><a>Thư mục</a></li>
        </ul>
    </div>
  );

export default function Tao(){
    return (
        <>
            <div className="createList nav-link">
                <Popover content={content} title = "" trigger = "click">
                    <Button className="dropdown-toggle" data-bs-toggle="dropdown"  style={{width: "200px", height: "50px", fontSize: "25px", fontWeight: "bold"}} type="primary">Tạo</Button>
                </Popover>
            </div>
        </>
    );
}