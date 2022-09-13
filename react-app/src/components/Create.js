import React from "react";
import { Button, Popover } from 'antd';

const content = (
    <div>
      <p>Lớp học</p>
      <p>Học phần</p>
      <p>Thư mục</p>
    </div>
  );

export default function Tao(){
    return (
        <>
            <div class="createList">
                <Popover content={content} title = "" trigger = "click">
                    <Button type="primary">Tạo</Button>
                </Popover>
            </div>
        </>
    );
}