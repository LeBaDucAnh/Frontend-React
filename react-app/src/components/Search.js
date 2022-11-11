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
          classListSearch: result.data,
          totalSearch: result.total
        })
      });

}


export default function SearchClass() {
    const store = useSliceStore('dashboard');
    const [classListSearch, totalSearch, searchParams] = useSliceSelector('dashboard', ['classListSearch','totalSearch','searchParams']);
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
        // e.preventDefault();
        getClassListByKeyword(store);
    }

    return (
        <>
        <Search style ={{width: "400px"}} allowClear size = "large" placeholder="Nhập tên lớp, trường..." onSearch={searchClass} enterButton  value={searchParams.keyword} onChange={e => setSearchParams({keyword: e.target.value})}/>

        
        </>
    );
}
