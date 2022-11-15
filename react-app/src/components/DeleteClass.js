import React, { useEffect, useState } from "react";
import {Form, Button, Modal, Checkbox, Space, Input } from 'antd';
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";


// function DeleteClassByID(store, id){
//   const {id} = useParams();
//   let url = BASE_URL + "api/deleteClass/"+ id;
//   console.log(url);
//   let options = {
//     headers:{
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     },
//     method: 'DELETE', 
//   };
//   fetch(url, options).then(()=>setStatus('Delete successfully'));

// }

function GetClassByID(store, id){
  let url = BASE_URL + "/api/getClassBy/" + id;
  console.log(url);
  //localStorage.setItem("id_class", id);
  let options = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    };
  //console.log(url);
  fetch(url, options).then(resp=>resp.json()).then(
      result => {
          store.setState({
              classRecord: result
          })
      });
}



const LocalizedModal = () => {
    const [open, setOpen] = useState(false);
    const store = useSliceStore('class');
    const [classRecord] = useSliceSelector('class', ['classRecord']);
    const {id} = useParams();
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    };

    const deleteClassByID = async function(e){
      let options = {
        method: "DELETE",
        headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
      };
      let url = BASE_URL + "/api/deleteClass/" + id;
      console.log(url);
      let resp = await fetch(url, options);
      if(resp.status != 200){
        alert("Có lỗi khi xóa lớp");
      }
      else{
        alert("Xóa lớp thành công");
        window.location.href = "/";
      }
    }
    
    useEffect(function(){
      GetClassByID(store, id);
    }, []);

    return (
        <>
          <a onClick={showModal}>
            Xóa
          </a>
          <Modal
            title="Xóa lớp này?"
            open={open}
            onOk={deleteClassByID}
            okText="Xóa lớp"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>{classRecord?.data?.classname}</h3></div>
            <div>
                <p>Bạn chuẩn bị xoá lớp này. Không ai có thể truy cập vào lớp này nữa.</p>
                <p>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</p>
            </div>
          </Modal>
        </>
      );
    };

const DeleteClass = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteClass;