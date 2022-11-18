import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Slide } from 'react-slideshow-image';
import { BASE_URL } from "config";
import { useSliceStore, useSliceSelector } from "utils/reduxHelper";
import "../pages/css/course.css";




function FlashCard({id}) {

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

    async function getFlashCard(store) {
        store.setState({
            flashCardList: []
        })
        console.log("idididid",id);
        let url = BASE_URL + "/api/flashCardAll/" + id;
        console.log(url);
        let options = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        let resp = await (fetch(url, options).then(resp => resp.json()).then(result =>
            store.setState({
                flashCardList: result.data,
            })));
    }

    const store = useSliceStore('library');
    const [flashCardList] = useSliceSelector('library', ['flashCardList']);
    useEffect(
        function () {
            getFlashCard(store);
        }, []);

        useEffect(()=>{
            console.log(('flashCardList',flashCardList));
        }
           , [flashCardList]);

    return (flashCardList.length > 0 &&
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