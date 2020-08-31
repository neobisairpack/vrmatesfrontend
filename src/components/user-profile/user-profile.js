import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Header from "../header";
import Footer from "../footer";
import './style/user-profile.css';
import back from "../inbox/inbox-page/icons/back-icon.png";
import UserInfoCard from "./user-info-card/user-info-card";
import Reviews from "../reviews/reviews";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const UserProfile = (props) => {
    const user = props.post.curUser;

    return (
        <div className={"user-profile"}>
            <ScrollToTopControlller/>
            <Header style={"inbox"}/>
            <div className={"user-profile__content"}>
                <div className={"user-profile__gen-info"}>
                    <div className={"inbox-page__title"}><label><img src={back} onClick={() => props.history.goBack()}/>Profile</label></div>
                    <UserInfoCard user={user}/>
                </div>
                <div className={"user-profile__second-info"}>
                    <div>
                        <div className={"inbox-page__title inbox-page__title_noup"}>About me</div>
                        <div className={"user-profile__text-about"}>
                            <label className={"user-profile__about-lbl"}>
                                {user.about_me}
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className={"inbox-page__title inbox-page__title_noup"}>Review</div>
                        <div className={"user-profile__reviews"}>
                            <Reviews id={user.id}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        post: state.post,
    }
}
export default connect(mapStateToProps)(withRouter(UserProfile));