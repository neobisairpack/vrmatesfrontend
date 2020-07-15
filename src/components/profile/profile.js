import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Reviews from "../reviews/reviews";
import './style/profile.css';
import '../dashboard/style/main.css';
import {Link} from 'react-router-dom';
import Post from "../post";
import InboxPost from "../inbox/inbox-post";

const Profile = (props) => {
    console.log(props)
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <p className={"profile__title"}>Reviews</p>
            <Reviews/>
            <div className={"dashboard__submenu"}>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}><Link to={'profile/inbox'}>Inbox</Link></li>
                    <li className={"dashboard__list-item "}><Link to={'profile/in-progress'}>In progress</Link></li>
                    <li className={"dashboard__list-item "}><Link to={'profile/completed'}>Completed</Link></li>
                </ul>
            </div>
            <InboxPost />
        </div>
    );
};

export default Profile;