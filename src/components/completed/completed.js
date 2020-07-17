import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Post from "../post";
import Reviews from "../reviews/reviews";
import {Link} from "react-router-dom";
import '../profile/style/profile.css';
import '../dashboard/style/main.css';
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";

const Completed = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <Sidebar/>
            <Header/>
            <div>
                <p className={"profile__title"}>Reviews</p>
                <Reviews/>
                <div className={"dashboard__submenu"}>
                    <ul className={"dashboard__list"}>
                        <li className={"dashboard__list-item "}><Link to={'/profile/inbox'}
                                                                      className={"dashboard__label profile__list-item_active"}>Inbox</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/in-progress'}
                                                                      className={"dashboard__label"}>In progress</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/completed'}
                                                                      className={"dashboard__label"}>Completed</Link>
                        </li>
                    </ul>
                </div>
                <Post/>
            </div>
            <Footer/>
        </div>
    );
};

export default Completed;