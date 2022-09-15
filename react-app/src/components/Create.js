import React, { useState } from "react";
import { Button, Dropdown, Menu, Popover } from 'antd';
import "../pages/css/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FileFilled, FolderFilled, HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AddClass from "./AddClass";
import AddFolder from "./AddFolder";
import AddCourse from "pages/AddCourse";




const Choose = () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
            setOpen(false);
        };

    const handleOpenChange = (newOpen) => {
            setOpen(newOpen);
        };

    const content = (

      <Menu
        items={[
          {
            label: <div><AddClass/></div>,
            key: '0',
            icon: <HomeFilled /> 
          },
          {
            type: 'divider',
          },
          {
            label: <div><AddFolder/></div>,
            key: '1',
            icon: <FolderFilled />
          },
          {
            type: 'divider',
          },
          {
            label: <div><Link to="/add-course" > Học phần</Link></div>,
            key: '3',
            icon: <FileFilled />
          },
        ]}
      />
    );

    return (
        
            <div className="createList nav-link">
                <Dropdown overlay={content} trigger = "click" >
                    <Button className="dropdown-toggle"  style={{width: "80px", height: "40px", fontSize: "20px", fontWeight: "bold"}} type="primary">Tạo</Button>
                </Dropdown>
            </div>
        
    );
};


const Tao = () => (
    <Choose/>
);

export default Tao;