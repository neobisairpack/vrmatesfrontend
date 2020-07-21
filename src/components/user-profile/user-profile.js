import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
//import '../../profile/style/profile.css';
import Header from "../header";
import Footer from "../footer";
import './style/user-profile.css';
import back from "../inbox/inbox-page/icons/back-icon.png";
const UserProfile = (props) => {
    return (
        <div className={"user-profile"}>
            <ScrollToTopControlller/>
            <Header style={"inbox"}/>
            <div className={"user-profile__content"}>
                <div className={"user-profile__gen-info"}>
                    <div className={"inbox-page__title"}><label><img src={back}/> Profile</label></div>

                </div>
                <div className={"user-profile__second-info"}>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserProfile;