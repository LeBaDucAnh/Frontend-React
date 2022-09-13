import React from "react";
import { Input } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);

export default function search() {
    return (
       <Search style ={{width: "500px"}} allowClear size = "large" placeholder="Học phần, lớp..." onSearch={onSearch} enterButton />
    );
}
