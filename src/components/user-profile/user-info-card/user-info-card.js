import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/user-info-card.css';
import profile from '../../sidebar/images/profilephoto.svg'
import star from "../../sidebar/images/star.svg";
import phone from '../icons/phone-icon.svg';
import fb from '../icons/fb-icon.svg';
import insta from '../icons/insta-icon.png';
import whats from '../icons/whatsapp-icon.png';
import telegram from '../icons/tele-icon.png';

const UserInfoCard = (props) => {

    return (
        <div className={"user-info-card"}>
            <div>
                <ul className={"user-info__list"}>
                    <li className={"user-info__list-item"}><img className={"user-info__photo"}
                                                                 src={profile}/></li>
                    <li className={"user-info__list-item"}>
                        <div className={"user-info__user-name"}>Matt Tender</div>
                        <div className={"user-info__item-rating"}>
                            <img src={star} className={"user-info__rating-star"} alt={"Rating"}/>
                            <img src={star} className={"user-info__rating-star"} alt={"Rating"}/>
                            <img src={star} className={"user-info__rating-star"} alt={"Rating"}/>
                            <img src={star} className={"user-info__rating-star"} alt={"Rating"}/>
                            <img src={star} className={"user-info__rating-star"} alt={"Rating"}/>
                        </div>
                        <div className={"user-info__cancellation"}>Cancellation Rate:
                            <label className={"user-info__cancel-num"}>5/100</label></div>
                    </li>
                </ul>
            </div>
            <div className={"user-info__details"}>
                <div className={"user-info__detail"}>Age: <label className={"user-info__detail-l"}>35 years</label></div>
                <div className={"user-info__detail"}>Gender: <label className={"user-info__detail-l"}>The man</label></div>
                <div className={"user-info__detail"}>Location: <label className={"user-info__detail-l"}>Spain, Madrid</label></div>
            </div>
            <div className={"user-info__contacts"}>
                <div className={"user-info__detail"}><img className={"user-info__contact-img"} src={phone}/><label className={"user-info__detail-l"}>0550345678</label></div>
                <div className={"user-info__detail"}><img className={"user-info__contact-img"} src="https://img.icons8.com/ios-filled/24/000000/filled-message.png"/><label className={"user-info__detail-l"}>aelina10@gmail.com</label></div>
                <div>
                    <img className={"user-info__social"} src={fb}/>
                    <img className={"user-info__social"} src={insta}/>
                    <img className={"user-info__social"} src={whats}/>
                    <img className={"user-info__social"} src={telegram}/>
                </div>
            </div>
        </div>
    );
};
export default UserInfoCard;
