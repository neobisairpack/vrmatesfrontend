import React from 'react';
import './style/full-post.css';
import profile from "../../sidebar/images/profilephoto.svg";
import star from "../../sidebar/images/star.svg";
import {CardSubtitle, CardText} from "reactstrap";
import arrow from "../images/arrow.svg";
import imgIcon from '../images/empty-img.svg';
import exit from '../images/exit.svg';
import '../style/post.css';
import {Modal} from "react-bootstrap";

const FullPost = (props) => {
    const data = props.data;
    return (
        <div>
            <Modal {...props} dialogClassName={"full-post"}>
                <div onClick={props.onHide} className={"full-post__exit"}>
                    <img src={exit}/>
                </div>

                <div className={"full-post__content"}>
                    <div className={"post__content"}>
                        <div className={"post__top"}>
                            <ul className={"post__top-list"}>
                                <li className={"post__top-list-item"}><img className={"post__avatar"} src={profile}
                                                                           alt="Card image cap"/></li>
                                <li className={"post__top-list-item"}>
                                    <div className={"post__user-name"}>{data.requester.first_name}</div>
                                    <div className={"post__item-rating"}>
                                        <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                        <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                        <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                        <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                        <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                    </div>
                                </li>
                                <li className={"post__top-list-item"}><CardText
                                    className={"post__package-provider"}>{data.requester ? "Requester" : "Provider"}</CardText></li>
                            </ul>
                        </div>

                        <p className={"post__type"}>{data.service_type}</p>
                        <div>
                            <div className={"post__address"}>
                                <CardText className={"post__city"}>{data.start_location}</CardText>
                                <CardSubtitle className={"post__country"}>{data.start_location}</CardSubtitle>
                            </div>
                            <img className={"post__arrow"} src={arrow}/>
                            <div className={"post__address"}>
                                <CardText className={"post__city"}>{data.end_location}</CardText>
                                <CardSubtitle className={"post__country"}>{data.end_location}</CardSubtitle>
                                <CardSubtitle className={"post__deadline"}>{data.deadline}</CardSubtitle>
                            </div>
                        </div>

                    </div>
                    <CardText className={"full-post__text"}>{data.text}Coming to Bishkek to participate at some conference.
                        is simply dummy text of theindustry. </CardText>
                    <CardText className={"full-post__email"}>{data.requester.email}</CardText>
                    <div className={"full-post__images"}>
                        <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                        <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                    </div>
                </div>
                <button className={"full-post__interested-btn post__interested-btn"}>Interested</button>
            </Modal>
        </div>
    );
}

export default FullPost;

/* <div className="full-post">
            <div onClick={props.onHide} className={"full-post__exit"}>
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

                    <p className={"post__type"}>Package delivery</p>
                    <div>
                        <div className={"post__address"}>
                            <CardText className={"post__city"}>Bishkek</CardText>
                            <CardSubtitle className={"post__country"}>Kyrgyzstan</CardSubtitle>
                        </div>
                        <img className={"post__arrow"} src={arrow}/>
                        <div className={"post__address"}>
                            <CardText className={"post__city"}>Moscow</CardText>
                            <CardSubtitle className={"post__country"}>Russia</CardSubtitle>
                            <CardSubtitle className={"post__deadline"}>10th July,2020</CardSubtitle>
                        </div>
                    </div>

                </div>
                <CardText className={"full-post__text"}>Coming to Bishkek to participate at some conference.
                    is simply dummy text of theindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                <CardText className={"full-post__email"}>aelina@gmail.com</CardText>
                <div className={"full-post__images"}>
                    <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                    <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                </div>
            </div>
            <button className={"full-post__interested-btn post__interested-btn"}>Interested</button>
        </div> */

