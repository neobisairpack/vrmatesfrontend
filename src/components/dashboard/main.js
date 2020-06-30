import React from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
const Main = () => {
    return (
        <div className={"dashboard"}>
            <ScrollToTopControlller/>
            <div className={"dashboard__submenu"}>
                <p className={"dashboard__title"}>NEWS FEED</p>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}>Providers</li>
                    <li className={"dashboard__list-item "}>Requesters</li>
                </ul>
                <button className={"dashboard__button"}>Create Post</button>
            </div>
            <div className={"dashboard__content"}>
                <Post/>
            </div>
        </div>
    );
};

export default Main;