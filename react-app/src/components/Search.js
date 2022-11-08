import React, { useEffect } from "react";
import { Input } from 'antd';
import store from "redux/store";
import { BASE_URL } from "config";
import { useSliceSelector, useSliceStore } from "utils/reduxHelper";
import {Card, Col, Row } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, FileTextOutlined, UserOutlined, DatabaseFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Search } = Input;
const onSearch = (value) => console.log(value);

// let loading = false;
// let classList = [];

// let searchParams = {
//     keyword: '',
// };

// let lastSearchParams = {...searchParams};

function getClassListByKeyword(store){
    const {searchParams} = store.getState();
    let url = BASE_URL + '/api/searchClass?';

    if(searchParams.keyword) url += 'keyword=' + searchParams.keyword;

    console.log(url);
    let options = {
        headers: {
         "Authorization": "Bearer " + localStorage.getItem("token")
       }
     };
    fetch(url, options).then(resp => resp.json()).then(result => {
        //console.log(result);
        store.setState({
          classList: result.data,
          //total: result.total
        })
      });

}


export default function SearchClass() {
    const store = useSliceStore('dashboard');
    const [classList, total, searchParams] = useSliceSelector('dashboard', ['classList','total','searchParams']);
    useEffect(function(){
        getClassListByKeyword(store);
    }, []);

    const setSearchParams = function(params) {
        const {searchParams} = store.getState();
        store.setState({
          searchParams: {...searchParams, ...params}
        })
      };

    const searchClass = function(e) {
        //e.preventDefault();
        getClassListByKeyword(store);
    }

    return (
        <>
        <Search style ={{width: "400px"}} allowClear size = "large" placeholder="Nhập tên lớp, trường..." onSearch={searchClass} enterButton  value={searchParams.keyword} onChange={e => setSearchParams({keyword: e.target.value})}/>

        {/* <div className="m-2"><span><h4>Lớp của bạn: </h4></span></div>
        <div className="infor m-3"><UsergroupAddOutlined /><span>{total} lớp học được tạo</span></div>
            <Row gutter={16} className="mb-3" >
            {classList.map(lop =>
                <Col span={8} key={lop.id} className="mb-3" >
                    <Link to={"/class/"+lop.id}>
                        <Card title={lop.classname} bordered={false}> 
                            <div><HomeOutlined /> <span>{lop.schoolname}</span></div>
                            <div><FileTextOutlined /> <span>3 học phần</span></div>
                            <div><UserOutlined /> <span>4 thành viên</span></div>
                        </Card>
                     </Link>
                </Col>
            )}
            </Row> */}
        </>
    );
}
