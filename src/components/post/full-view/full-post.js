import React, {useState, useEffect} from 'react';
import './style/full-post.css';
import profile from "../../sidebar/images/profilephoto.svg";
import star from "../../sidebar/images/star.svg";
import {CardSubtitle, CardText} from "reactstrap";
import arrow from "../images/arrow.svg";
import './style/full-post.css';
import imgIcon from '../images/empty-img.svg';
import exit from '../images/exit.svg';

const FullPost = () => {
    // useEffect(()=>{
    //     document.addEventListener('mousedown', handleClick, false)
    // }, []);
    // function handleClick(e) => {
    //     if(this.node.contains(e.target)){
    //         return
    //     }
    // }
    return (
        <div className="full-post">
            <div className={"full-post__exit"}>
                <img src={exit}/>
            </div>

            <div className={"full-post__content"}>
                <div className={"post__content"}>
                    <div className={"post__top"}>
                        <ul className={"post__top-list"}>
                            <li className={"post__top-list-item"}><img className={"post__avatar"} src={profile}
                                                                       alt="Card image cap"/></li>
                            <li className={"post__top-list-item"}>
                                <div className={"post__user-name"}>Aelina</div>
                                <div className={"post__item-rating"}>
                                    <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                    <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                    <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                    <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                    <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                </div>
                            </li>
                            <li className={"post__top-list-item"}><CardText
                                className={"post__package-provider"}>Provider</CardText></li>
                        </ul>
                    </div>

                    <p className={"post__type-package-del"}>Package delivery</p>
                    <div>
                        <div className={"post__address"}>
                            <CardText className={"post__city"}>Bishkek</CardText>
                            <CardSubtitle className={"post__country"}>Kyrgyzstan</CardSubtitle>
                        </div>
                        <img className={"post__arrow"} src={arrow}/>
                        <div className={"post__address"}>
                            <CardText className={"post__city"}>Moscow</CardText>
                            <CardSubtitle className={"post__country"}>Russia</CardSubtitle>
                        </div>
                    </div>
                    <CardSubtitle className={"post__deadline"}>10th July,2020</CardSubtitle>
                </div>
                <CardText className={"full-post__text"}>Coming to Bishkek to participate at some conference.
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                <CardText className={"full-post__email"}>aelina@gmail.com</CardText>
                <div className={"full-post__images"}>
                    <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                    <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                </div>
            </div>
            <button className={"full-post__interested-btn post__interested-btn"}>Interested</button>
        </div>
    );
}

export default FullPost;

