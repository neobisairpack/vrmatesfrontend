import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../post/images/star-icon.png';
import FullReview from "./full-review";

const Reviews = () => {
    const [reviewState, setReviewState] = useState(false);
    function reviewView() {
        setReviewState(!reviewState)
    }
    return (
        <div className={"reviews"}>
            <div onClick={reviewView} className={"review review-orange"}>
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
                    {/*<a target="_blank" href="https://icons8.com/icons/set/star">Star icon</a>*/}
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
                    {/*<a target="_blank" href="https://icons8.com/icons/set/star">Star icon</a>*/}
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
                {reviewState ? <FullReview/> : null}
            </div>
        </div>
    );
};

export default Reviews;
