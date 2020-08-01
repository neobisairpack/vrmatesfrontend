import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../post/images/star-icon.png';
import FullReview from "./full-review";
import LogOut from "../pop-up/popup-logout";

const Reviews = () => {
    const [reviewState, setReviewState] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    function reviewView() {
        setReviewState(!reviewState)
    }
    return (
        <div className={"reviews"}>
            <div onClick={() => setModalShow(true)} className={"review review-orange"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    Over the past four years, I have become ...
                </div>
                <div className={"review__time"}>
                    1 week ago
                </div>
            </div>

            <div className={"review review-blue"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    Over the past four years, I have become ...
                </div>
                <div className={"review__time"}>
                    1 week ago
                </div>
            </div>

            <div className={"review review-orange"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    Over the past four years, I have become ...
                </div>
                <div className={"review__time"}>
                    1 week ago
                </div>
            </div>

            <div className={"review review-blue"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    Over the past four years, I have become ...
                </div>
                <div className={"review__time"}>
                    1 week ago
                </div>
            </div>

            <div className={"review review-orange"}>
                <div className={"review__rating"}>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                    <img src={star} className={"review__rating-star"} alt={"Rating"}/>
                </div>
                <div className={"review__text"}>
                    Over the past four years, I have become ...
                </div>
                <div className={"review__time"}>
                    1 week ago
                </div>
            </div>
            <div>
               <FullReview show={modalShow}
                           onHide={() => setModalShow(false)}/>
            </div>
        </div>
    );
};

export default Reviews;
