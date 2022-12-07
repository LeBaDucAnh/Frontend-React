import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Checkbox, Space, Input, List } from 'antd';
import { FolderOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {Card, Row, Col} from 'antd';
import CreateFolder from "./CreateFolder";
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";

const LocalizedModal = ({id}) => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    //const store = useSliceStore('class');
    //const {id} = useParams();
    //const [folderRecord] = useSliceSelector('class', ['folderRecord']);
    const [folders, setFolders] = useState([]);
    const GetFolderInClass = () => {
        let url = BASE_URL + "/api/folderAll";
        console.log(url);
          let options = {
               headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
              }
            };
          fetch(url, options).then(resp => resp.json()).then(
              result=>{
                    setFolders([...folders, ...result])
                  }
              );
      }

    useEffect(()=>{
        GetFolderInClass();
    }, []);

    return (
        <>
            <Button onClick={showModal} shape="circle" className="me-3" icon={<FolderOutlined/>} size={"large"} title="Thêm thư mục"/>
            <Modal
                title="Thêm thư mục"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}>
                <Card style={{ border: 0 }}>
                    <div className="border pt-3 mb-5 text-center"><p><PlusOutlined /> <CreateFolder/> </p></div>
                </Card>

                <div style={{maxHeight: "200px",overflowY:'scroll'}}>
                    {folders.map(folder_name =>
                    <Card className="mt-2" key={folder_name.id} >
                        <Row>
                                <Col span={20}>
                                    <h4>{folder_name.foldername}</h4>
                                </Col>
                                <Col span={4} style={{ textAlign: "right" }}>
                                    <Button type="danger" size="large" icon={<MinusOutlined />} />
                                </Col>
                        </Row>
                    </Card>
                    )}
                </div>
                <Card className="mt-2">
                    <Row>
                        <Col span={20}>
                            <h4>Học lập trình Java</h4>
                        </Col>
                        <Col span={4} style={{ textAlign: "right" }}>
                            <Button type="primary" size="large" icon={<PlusOutlined />} />
                        </Col>
                    </Row>
                </Card>
            </Modal>
        </>
    );
};

const AddFolder = () => (
    <Space>
        <LocalizedModal />
    </Space>

);

export default AddFolder;