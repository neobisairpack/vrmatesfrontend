import React, {useState} from 'react';
import '../../post/full-view/style/full-post.css';
import star from "../../sidebar/images/star.svg";
import imgIcon from "../../post/images/empty-img.svg";
import './style/full-review.css';

const FullReview = () => {
    return (
        <div className="full-review" >
            <div className={"full-review__rating"}>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
            </div>
            <div className={"full-review__text"}>
                Over the past four years, I have become is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
            </div>
            <div className={"review__time"}>
                1 week ago
            </div>
            <div><div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
            </div>
        </div>

    );
}

export default FullReview;

