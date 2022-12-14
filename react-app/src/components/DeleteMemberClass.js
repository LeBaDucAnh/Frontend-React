import React, { useEffect, useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input, message } from 'antd';
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";


const DeleteMemberInClass = ({id}) => {

    const [open, setOpen] = useState(false);
    const store = useSliceStore('class');
    const [classRecord] = useSliceSelector('class', ['memberRecord']);
    //const {id} = useParams();

    const showModal = () => {
      setOpen(true);
      console.log(id);
    };
  
    const hideModal = () => {
      setOpen(false);
    };

    // let url = BASE_URL + "/api/deleteMemberInClass/"+id ;
    //   console.log(url);

    const deleteMember = async function(e){
      console.log(e);
      let options = {
        method: "DELETE",
        headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
      };
      let url = BASE_URL + "/api/deleteMemberInClass/"+id ;
      console.log(url);
      let resp = await fetch(url, options);
      if(resp.status != 200){
        message.info("Có lỗi khi xóa thành viên");
      }
      else{
        message.info("Xóa thành viên thành công");
        window.location.href = "/";
      }
    }
    
    // useEffect(function(){
    //   GetClassByID(store, id);
    // }, []);

    return (
        <>
        <Space>
          <a onClick={showModal}>
            Xóa
          </a>
          <Modal
            title="Xóa thành viên này?"
            open={open}
            onOk={deleteMember}
            okText="Xóa"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            {/* <div><h3>{classRecord?.data?.classname}</h3></div> */}
            <div>
                <p>Bạn chuẩn bị xoá thành viên này. Không ai có thể truy cập vào lớp này nữa.</p>
                <p>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</p>
            </div>
          </Modal>
          </Space>
        </>
      );
};

export default DeleteMemberInClass;