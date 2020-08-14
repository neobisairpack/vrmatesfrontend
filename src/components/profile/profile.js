import React, {useEffect, useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Reviews from "../reviews/reviews";
import './style/profile.css';
import '../dashboard/style/main.css';
import {Link, withRouter} from 'react-router-dom';
import InboxPost from "../inbox/inbox-post";
import ProfileSidebar from "../sidebar/profile-sidebar";
import Header from "../header";
import Footer from "../footer";

const Profile = (props) => {
    const [activeLink, setActiveLink] = useState(null)
    useEffect(() => {
        const path = props.location.pathname;
        switch (path) {
            case '/profile':
                setActiveLink(1);
                break;
            case '/profile/inbox':
                setActiveLink(1);
                break;
            case '/profile/in-progress':
                setActiveLink(2);
                break;
            case '/profile/completed':
                setActiveLink(3);
                break;
            default:
                setActiveLink(null);
        }
    }, [])
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <ProfileSidebar/>
            <Header/>
            <div>
                <p className={"profile__title"}>Reviews</p>
                <Reviews/>
                <div className={"dashboard__submenu"}>
                    <ul className={"dashboard__list"}>
                        <li className={"dashboard__list-item "}><Link to={'/profile/inbox'}
                                                                      className={"dashboard__label " + (activeLink === 1 ? "profile__list-item_active" : "")}>Inbox</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/in-progress'}
                                                                      className={"dashboard__label " + (activeLink === 2 ? "profile__list-item_active" : "")}>In progress</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/completed'}
                                                                      className={"dashboard__label " + (activeLink === 3 ? "profile__list-item_active" : "")}>Completed</Link>
                        </li>
                    </ul>
                </div>
                <InboxPost/>
            </div>
            <Footer/>
        </div>
    );
};

export default withRouter(Profile);