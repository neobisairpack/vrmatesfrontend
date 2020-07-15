import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Post from "../post";
import Reviews from "../reviews/reviews";
import {Link} from "react-router-dom";
import '../profile/style/profile.css';
import '../dashboard/style/main.css';

const Completed = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <p className={"profile__title"}>Reviews</p>
            <Reviews/>
            <div className={"dashboard__submenu"}>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}><Link to={'/profile/inbox'}>Inbox</Link></li>
                    <li className={"dashboard__list-item "}><Link to={'/profile/in-progress'}>In progress</Link></li>
                    <li className={"dashboard__list-item "}><Link to={'/profile/completed'}>Completed</Link></li>
                </ul>
            </div>
            <Post/>
        </div>
    );
};

export default Completed;