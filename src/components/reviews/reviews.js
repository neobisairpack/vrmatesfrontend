import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../sidebar/images/star.svg'

const Reviews = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [postState, setPostState] = useState(false);
    function postView() {
        setPostState(!postState)
    }
    return (
        <div className={"reviews"}>
            <div className={"review"}>
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
            <div className={"review"}>
                <p>hgjgkj</p>
            </div>
            <div className={"review"}>
                <p>hgjgkj</p>
            </div>
            <div className={"review"}>
                <p>hgjgkj</p>
            </div>
            <div className={"review"}>
                <p>hgjgkj</p>
            </div>
        </div>
    );
};

export default Reviews;
