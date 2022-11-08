import React, {useState} from "react";
import { Breadcrumb, Form, Layout, Input, Space, Button, message, Upload, Select } from 'antd';
import '../pages/css/main.css';
import { Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { BASE_URL } from "config";



function CreateFlashCard (){

    const [inputFields, setInputFields] = useState([{'keyword': '', 'defindName': ''}]);

    const handelFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
      }

    const addFields = () => {
        let newfield = {keyword:'', defindName: ''};
        
        setInputFields([...inputFields, newfield]);
    }

    const submit = async function (e) {
        e.preventDefault();
        console.log(inputFields);
        // localStorage.setItem('card', JSON.stringify(inputFields));
        // console.log(localStorage.getItem('card'));
        
        // console.log({fcard.keyword});
        // for (let x in inputFields){
            
        // }
        
        //let data = [...inputFields];
        // for(var i = 0; i<data.length; i++){
        //     console.log("card"+i);
        //     console.log(data[i]);
        //     localStorage.setItem("card"+i, JSON.stringify(data[i]));
        // }
        // for(var i in data){
        //     console.log(data[i]);
            
            // for(var j  in data[i]){
            //console.log(data[i][0]);
            //}
        //}
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    }
    //const fcard = JSON.parse(localStorage.getItem("card0"));
    return (
        <>
        {/* <Space style={{ display: 'flex', marginBottom: 8, }} align="baseline">
                        <Form.Item
                            rules={[{ required: true, },]}>
                            <Input style={{ width: "500px" }} placeholder="Thuật ngữ" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true, },]}>
                            <Input style={{ width: "500px" }} placeholder="Định nghĩa" value={define} onChange={(e) => setDefine(e.target.value)} />
                        </Form.Item>
                    </Space> */}
                    <Row>
                        <Form name="dynamic_form_nest_item" autoComplete="off" >
                                {/* {(inputFields, { add, remove }) => ( */}
                                    <>
                                        {inputFields.map(( input, index) => {
                                            return(
                                            <Space
                                                key={index}
                                                style={{
                                                    display: 'flex',
                                                    marginBottom: 8,
                                                }} align="baseline">
                                                <Form.Item>
                                                    <Input style={{ width: "500px" }} name="keyword" placeholder="Thuật ngữ" value={input.keyword} onChange={event => handelFormChange(index, event)} />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Input style={{ width: "500px" }} name="defindName" placeholder="Định nghĩa" value={input.defindName} onChange={event => handelFormChange(index, event)} />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => removeFields(index)} />
                                            </Space>
                                           )
                                        })}
                                        <Form.Item>
                                            <Button type="link" onClick={addFields} block icon={<PlusOutlined />}>
                                                Thêm thẻ
                                            </Button>
                                        </Form.Item>
                                    </>
                        </Form>
                        
                    </Row>
                    <Button type="primary"  onClick={submit}>Submit</Button>
                    {/* <p>{fcard.keyword}</p>                   */}
                    </>
    )
}

export default CreateFlashCard;