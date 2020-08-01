import React from 'react';
import '../../post/full-view/style/full-post.css';
import star from "../../sidebar/images/star.svg";
import imgIcon from "../../post/images/empty-img.svg";
import './style/full-review.css';
import exit from "../../post/images/exit.svg";
import '../../post/full-view/style/full-post.css';
import {Modal, Button} from "react-bootstrap";

const RateUser = (props) => {
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               centered
               {...props}
               dialogClassName="full-review">

            <div className={"full-review__rating"}>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img src={star} className={"full-review__rating-star"} alt={"Rating"}/>
                <img className={"full-review__exit"} src={exit}/>
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
            <div><div className={"full-review__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
            </div>
        </Modal>

    );
}

export default RateUser;

