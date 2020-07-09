import React, {useState} from 'react';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Reviews from "../reviews/reviews";
import './style/profile.css';
const Profile = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <p className={"profile__title"}>Reviews</p>
            <Reviews/>
        </div>
    );
};

export default Profile;