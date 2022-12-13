import React, { useState, useEffect } from "react";
import { Modal, Input, List } from 'antd';
import { UserAddOutlined, PlusOutlined } from "@ant-design/icons";
import { BASE_URL } from "config";
import { useParams } from "react-router-dom";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";
import store from "redux/store";
import { Button, Space, Card, Row, Col, Dropdown } from 'antd';



const { Search } = Input;
// const onSearch = (value) => console.log(value);

const AddUser = ({ id }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetMemberInClass = (id) => {

    if (loading) {
      return;
    }
    setLoading(true);

    let url = BASE_URL + "/api/getAllMemberInClass/" + id;
    console.log('list_member',url);
    let options = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    };
    fetch(url, options).then(resp => resp.json()).then(
      result => {
        setData([...data, ...result.data]);
        setLoading(false);
      });
  }


  const SearchUserToAdd = (store) => {
    const { searchParams } = store.getState();
    let url = BASE_URL + "/api/searchMemberToClass?";
    if (searchParams.keyword) url += 'keyword=' + searchParams.keyword;
    console.log('url_search ', url);
    let options = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    };
    fetch(url, options).then(resp => resp.json()).then(result => {
      //console.log(result);
      store.setState({
        memberSearch: result.data,
      })
    });

  }



  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const store = useSliceStore('class');
  const [memberSearch, searchParams] = useSliceSelector('class', ['memberSearch', 'searchParams']);
  // const [member_id, setMemberId] = useState(0);
  
  //const {id} = useParams();

  const setSearchParams = function (params) {
    const { searchParams } = store.getState();
    store.setState({
      searchParams: { ...searchParams, ...params }
    })
  };

  const searchUser = function (e) {
    // e.preventDefault();
    SearchUserToAdd(store);
  }

  const AddMemberToClass = (member)=> async function(e) {
    e.preventDefault();
    let userid = localStorage.getItem("userid");
    let data = {userID: member.id, classID: id};
    data = JSON.stringify(data);
    console.log(data);
    let options = {
      method: "POST",
      body: data,
      headers: {"Content-type":"application/json"}
    };
    let url = BASE_URL + "/api/addMemberToClass/"+userid;
    let respone = await(fetch(url, options));
    if(respone.status != 201){
      alert("Lỗi khi thêm");
    }
    // else{
    //   // alert('Thêm thành viên mới thành công');
    //   // window.location.href = "/class/"+id;
      
    // }
  }

  useEffect(() => {
    GetMemberInClass(id);
    SearchUserToAdd(store);
  }, []);

  return (
    <>
      <Button onClick={showModal} shape="circle" className="me-3" icon={<UserAddOutlined />} size={"large"} title="Thêm thành viên"  />
      <Modal
        title="Thêm thành viên"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
      >
        <div><Search style={{ width: "100%" }} allowClear size="large" placeholder="Nhập tên thành viên muốn thêm..." onSearch={searchUser} enterButton value={searchParams.keyword} onChange={e => setSearchParams({ keyword: e.target.value })} /></div>
        <div className="mt-3">
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: 'flex',
            }}>
            {memberSearch.map(member =>
              <Card title="" size="small" style={{height: "50px"}} key={member.id}  >
                {/* <p>Thành viên</p> */}
                <p>
                  <Row>
                    <Col span={20}>
                      <h4>{member.fullname}</h4>
                    </Col>
                    <Col span={4} style={{ textAlign: "right" }}>
                      <Button type="primary" size="small" icon={<PlusOutlined />} onClick={AddMemberToClass(member)}/>
                    </Col>
                  </Row>
                </p>
              </Card>
            )}
          </Space>

        </div>
        <div style={{ textAlign: "center" }} className="mt-3">
          {/* <Button type="primary" size="large">Thêm</Button> */}
          <p className="mt-3" style={{ fontSize: "20px" }}>Danh sách thành viên lớp</p>
        </div>
        <div style={{
        height: 200,
        padding: '0 16px',
      }}>
          <List 
            size="large"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                {item.fullname}
              </List.Item>
            )}
          />
        </div>
      </Modal>
    </>
  );
};

// const AddUser = () => (
//   <Space>
//     <LocalizedModal />
//   </Space>

// );

export default AddUser;