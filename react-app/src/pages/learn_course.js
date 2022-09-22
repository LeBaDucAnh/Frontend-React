import React, {useState} from "react";
import HeaderPage from "components/Header";
import ReactCardFlip from "react-card-flip";
import "./css/course.css";
import "./css/main.css";
import { Layout } from 'antd';


const {Header, Content, Footer} = Layout;

function Course(){
    const [flip, setFlip] = useState(false);
    return(
        <Layout>
        <div><HeaderPage/></div>
        
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <div className="card-course" onClick={() => setFlip(!flip)}> 
                OOP 
                <br />
                <br />
                
            </div>
            <div className="card-back" onClick={() => setFlip(!flip)}> 
                Hướng đối tượng
                <br />
                <br />
                
            </div>

        </ReactCardFlip>
        </Layout>
    );
}

export default Course;

