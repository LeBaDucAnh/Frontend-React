import React, { useState } from "react";
import { Button, Popover } from 'antd';
import "../pages/css/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FileFilled, FolderFilled, HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AddClass from "./AddClass";




const Choose = () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
            setOpen(false);
        };

    const handleOpenChange = (newOpen) => {
            setOpen(newOpen);
        };

    const content = (
        <div className="detail" >
                <div><HomeFilled /><AddClass/></div>
                <div><a><FileFilled /> Học phần</a></div>
                <div><a><FolderFilled /> Thư mục</a></div>
                <a onClick={hide}>Close</a>
        </div>
    );

    return (
        
            <div className="createList nav-link">
                <Popover content={content} title = "" trigger = "click" open={open}  onOpenChange={handleOpenChange} >
                    <Button className="dropdown-toggle"  style={{width: "80px", height: "40px", fontSize: "20px", fontWeight: "bold"}} type="primary">Tạo</Button>
                </Popover>
            </div>
        
    );
};


const Tao = () => (
    <Choose/>
);

export default Tao;