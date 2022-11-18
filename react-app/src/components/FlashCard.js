import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Slide } from 'react-slideshow-image';
import { BASE_URL } from "config";
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";
import "../pages/css/course.css";


async function getFlashCard(store){    
    const id = localStorage.getItem("courseid");
    let url = BASE_URL + "/api/flashCardAll/" + id;
    console.log(url);
    let options = {
        headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
        }
    };
    let resp = fetch(url, options).then(resp=>resp.json()).then(result =>
        store.setState({
            flashCardList: result.data,
        }));
    }

function FlashCard() {

    const [flip, setFlip] = useState(false);

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
            console.log('slide transition from ${oldIndex} to ${newIndex}');
        }
    };

    const store = useSliceStore('library');
    const [flashCardList] = useSliceSelector('library', ['flashCardList']);
    useEffect(
        function(){
            getFlashCard(store);
        },[]);
    
    return (
        <Slide {...properties}>
            {flashCardList.map(card => 
            <div className="each-slide" key={card.id}>
                <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                    <div className="card-course" onClick={() => setFlip(!flip)}>
                        {card.keyword}
                        <br />
                        <br />

                    </div>
                    <div className="card-back" onClick={() => setFlip(!flip)}>
                        {card.defindName}
                        <br />
                        <br />

                    </div>

                </ReactCardFlip>
            </div>
            )}
        </Slide>
    );
}

export default FlashCard;