import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
//import '../../profile/style/profile.css';
import Header from "../header";
import Footer from "../footer";
import './style/user-profile.css';
import back from "../inbox/inbox-page/icons/back-icon.png";
import UserInfoCard from "./user-info-card/user-info-card";
import Reviews from "../reviews/reviews";
const UserProfile = (props) => {
    return (
        <div className={"user-profile"}>
            <ScrollToTopControlller/>
            <Header style={"inbox"}/>
            <div className={"user-profile__content"}>
                <div className={"user-profile__gen-info"}>
                    <div className={"inbox-page__title"}><label><img src={back}/> Profile</label></div>
                    <UserInfoCard/>
                </div>
                <div className={"user-profile__second-info"}>
                    <div>
                        <div className={"inbox-page__title inbox-page__title_noup"}>About me</div>
                        <div className={"user-profile__text-about"}>
                            <label className={"user-profile__about-lbl"}>
                                I’m Matt, a Spain based British blogger. I’d love nothing more than to write about how I quit my job, went travelling and am now a full-time wunderluster making an income as I go about scribing about my experiences. Sadly I can’t, the reality is that I have a job and in-between that and a time-wasting addiction to a silly Star Wars game I work on this site. That said . . . should the opportunity ever arise in the future I’d be a fool not to do it.
                                <br/><br/>
                                However, I did quit my job and go travelling. Bored, tired and stressed from working 20 years in hotels and restaurants across the UK and the USA I managed to save up, quit and run away to do some volunteering in Africa.
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className={"inbox-page__title inbox-page__title_noup"}>Review</div>
                        <div className={"user-profile__reviews"}>
                            <Reviews/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserProfile;