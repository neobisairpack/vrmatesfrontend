import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/reviews.css';
import star from '../post/images/star-icon.png';

const Reviews = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [postState, setPostState] = useState(false);
    function postView() {
        setPostState(!postState)
    }
    return (
        <div className={"reviews"}>
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

        </div>
    );
};

export default Reviews;
