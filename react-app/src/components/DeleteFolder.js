import React, { useState, useEffect } from "react";
import {Form, Button, Modal, Checkbox, Space, Input } from 'antd';
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";


const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    };

    const {id} = useParams();
    const [folder, setFolder] = useState({});
    useEffect(function(){
      let url = BASE_URL + '/api/getFolderBy/'+id;
      fetch(url).then(resp=>resp.json()).then(result => setFolder(result));
    }, [])

    const DeleteFolderByID = async function(e){
      let options = {
        method: "DELETE",
        headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
      };
      let url = BASE_URL + "/api/deleteFolder/" + id;
      console.log(url);
      let resp = await fetch(url, options);
      if(resp.status != 200){
        alert("Có lỗi khi xóa thư mục");
      }
      else{
        alert("Xóa thư mục thành công");
        window.location.href = "/";
      }
    }  


    return (
        <>
          <a onClick={showModal}>
            Xóa
          </a>
          <Modal
            title="Xóa thư mục này?"
            open={open}
            onOk={DeleteFolderByID}
            okText="Xóa thư mục"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>{folder.foldername}</h3></div>
            <div><p>Bạn chuẩn bị xoá thư mục này. Không ai có thể truy cập vào thư mục này nữa.</p></div>
          </Modal>
        </>
      );
    };

const DeleteFolder = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteFolder;