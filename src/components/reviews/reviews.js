import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
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
    const [rate, setRate] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
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
                console.log(res)
                setRate(res.data);
            })
            .catch((err) => console.log(err))
    }
    const showFullReview = (index) => {
        setActiveModal(index);
    }
    return (
        <div className={"reviews"}>
            {rate.map((item) =>
            <div key={item.id} className={"review"}>
               <div onClick={() => showFullReview(item.id)} className={"review " + ((item.id) % 2 !== 0 ? "review-orange" : "review-blue") }>
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
                <FullReview {...item} show={activeModal === item.id}
                            onHide={() => setActiveModal(null)}/>
             </div>

            )}

        </div>
    );
};

export default Reviews;
