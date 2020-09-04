import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/user-info-card.css';
import phone from '../icons/phone-icon.svg';
import fb from '../icons/fb-icon.svg';
import insta from '../icons/insta-icon.png';
import whats from '../icons/whatsapp-icon.png';
import telegram from '../icons/tele-icon.png';
import {withRouter} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const UserInfoCard = (props) => {
    console.log(props)
    const user = props.user;
    const urlImg = "http://167.172.178.135:8000";
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);
    return (
        <div className={"user-info-card"}>
            <div>
                <ul className={"user-info__list"}>
                    <li className={"user-info__list-item"}>
                        {user.image ?
                            <img src={urlImg + user.image} className={"user-info__photo"}
                                 alt={"User"}/> :
                            <img className={"user-info__photo-empty"}  src={"https://img.icons8.com/material-sharp/96/000000/user.png"}/>}
                    </li>
                    <li className={"user-info__list-item"}>
                        <div className={"user-info__user-name"}>{user.first_name} {user.last_name}</div>
                        <div className={"post__item-rating"}>
                            <Box>
                                <StyledRating name="read-only" value={ user.avg_rating_last_ten} readOnly
                                              precision={0.5}/>
                            </Box>
                        </div>
                        <div className={"user-info__cancellation"}>Cancellation Rate:
                            <label className={"user-info__cancel-num"}>{user.canceled_posts_count}/100</label></div>
                    </li>
                </ul>
            </div>
            <div className={"user-info__details"}>
                <div className={"user-info__detail"}>Age: <label className={"user-info__detail-l"}>{user.age} years</label></div>
                <div className={"user-info__detail"}>Gender: <label className={"user-info__detail-l"}>The {user.gender}</label></div>
                <div className={"user-info__detail"}>Location: <label className={"user-info__detail-l"}>{user.city} {user.state}, {user.country}</label></div>
            </div>
            <div className={"user-info__contacts"}>
                <div className={"user-info__detail"}><img className={"user-info__contact-img"} src={phone}/><label className={"user-info__detail-l"}>{user.phone}</label></div>
                <div className={"user-info__detail"}><img className={"user-info__contact-img"} src="https://img.icons8.com/ios-filled/24/000000/filled-message.png"/><label className={"user-info__detail-l"}>{user.email}</label></div>
            </div>
        </div>
    );
};
export default (withRouter(UserInfoCard));
