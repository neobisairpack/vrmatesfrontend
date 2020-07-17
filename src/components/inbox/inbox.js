import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Reviews from "../reviews/reviews";
import '../profile/style/profile.css';
import '../dashboard/style/main.css';
import {Link} from 'react-router-dom';
import InboxPost from "./inbox-post";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../sidebar";

const Inbox = (props) => {
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
                <InboxPost/>
            </div>
            <Footer/>
        </div>
    );
};

export default Inbox;