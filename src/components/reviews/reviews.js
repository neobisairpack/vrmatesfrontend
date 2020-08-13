import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../post/images/star-icon.png';
import FullReview from "./full-review";
import axios from "axios";

const Reviews = () => {
    const [modalShow, setModalShow] = useState(false);
    const [rate, setRate] = useState([]);
    const [rateNum, setRateNum] = useState([]);
    useEffect(() => {
        getReviews();
    }, [])
    const getReviews = () =>{
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get('http://167.172.178.135/api/rating/', {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(function(res){
                setRate(res.data);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className={"reviews"}>
            {rate.map((item) =>
            <div key={item.id} onClick={() => setModalShow(true)} className={"review review-orange"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    {item.text}
                </div>
                <div className={"review__time"}>
                    {item.date}
                </div>
            </div>
            )}
            <div>
               <FullReview show={modalShow}
                           onHide={() => setModalShow(false)}/>
            </div>
        </div>
    );
};

export default Reviews;
