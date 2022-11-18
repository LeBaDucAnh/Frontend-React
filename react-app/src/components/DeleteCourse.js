import React, { useState, useEffect } from "react";
import { Button, Modal, Space} from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
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
    const [courseRecord, setCourseRecord] = useState({});

     useEffect(
        function (){
            let url = BASE_URL + "/api/getCourseBy/" + id;
            localStorage.setItem("courseid", id);
            let options = {
                headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              };
              fetch(url, options).then(resp=>resp.json()).then(result => setCourseRecord(result.data));
            },[]);

    const DeleteCourseByID = async function(e){
      let options = {
        method: "DELETE",
        headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
      };
      let url = BASE_URL + "/api/deleteCourse/" + id;
      console.log(url);
      let resp = await fetch(url, options);
      if(resp.status != 200){
        alert("Có lỗi khi xóa học phần");
      }
      else{
        alert("Xóa học phần thành công");
        window.location.href = "/";
      }
    }     
    
    return (
        <>
          <Button onClick={showModal} className="ms-3" shape="circle"  icon={<DeleteOutlined />} size={"large"} title="Xóa học phần"/>
          <Modal
            title="Xóa học phần này?"
            open={open}
            onOk={DeleteCourseByID}
            okText="Xóa học phần"
            onCancel={hideModal}
            cancelText="Hủy"
          >
            <div><h3>{courseRecord.coursename}</h3></div>
            <div>
                <p>Bạn sắp xoá học phần này và toàn bộ dữ liệu trong đó. Không ai có thể truy cập vào học phần này nữa</p>
                <p><b>Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</b></p>
            </div>
          </Modal>
        </>
      );
    };

const DeleteCourse = () => (
  <Space>
    <LocalizedModal />
  </Space>
          
);

export default DeleteCourse;