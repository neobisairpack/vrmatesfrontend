import React, {useState} from 'react';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Reviews from "../reviews/reviews";
import './style/profile.css';
import '../dashboard/style/main.css';
const Profile = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <p className={"profile__title"}>Reviews</p>
            <Reviews/>
            <div className={"dashboard__submenu"}>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}>Inbox</li>
                    <li className={"dashboard__list-item "}>In progress</li>
                    <li className={"dashboard__list-item "}>Completed</li>
                </ul>
            </div>
            <Post size={"profile-post"}/>
        </div>
    );
};

export default Profile;