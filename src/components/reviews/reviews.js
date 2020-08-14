import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../post/images/star-icon.png';
import FullReview from "./full-review";
import axios from "axios";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const Reviews = () => {
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FFF',
        },
        iconEmpty: {
            color: '#b3b3b3',
        }
    })(Rating);
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
            <div key={item.id} onClick={() => setModalShow(true)} className={"review " + ((item.id) % 2 !== 0 ? "review-orange" : "review-blue") }>
                <div className={"review__rating"}>
                    <Box>
                        <StyledRating name="read-only" value={item.rating} size="small" readOnly precision={0.5}/>
                    </Box>
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
