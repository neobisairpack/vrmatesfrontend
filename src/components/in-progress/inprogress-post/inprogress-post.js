import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../post/style/post.css';
import arrow from '../../post/images/arrow.svg';
import '../../inbox/inbox-post/style/inbox-post.css';
import '../../profile/style/profile.css';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import profile from "../../sidebar/images/profilephoto.svg";
import star from "../../sidebar/images/star.svg";
import './style/inprogress-post.css';

const InProgressPost = (props) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className={"post container"}>
            <div className={"row"}>
                {array.map((item) =>
                    <div key={item} className={"col-4"}>
                        <Card className={props.size}>
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
                                        <li className={"post__top-list-item inbox-post__item"}><img className={"inprogress__icon-more"} src="https://img.icons8.com/ios-glyphs/30/000000/more.png"/></li>
                                    </ul>
                                </div>
                                <label className={"post__type"}>Package delivery</label>
                                <CardText
                                    className={"post__package-provider"}>Provider</CardText>
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
                            <CardText className={"post__text"}>Coming to Bishkek to participate at some conference.
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                            <CardText className={"post__email"}>aelina@gmail.com</CardText>
                        </Card>
                    </div>
                )}
                <div>
                </div>
            </div>
        </div>
    );
};

export default InProgressPost;
