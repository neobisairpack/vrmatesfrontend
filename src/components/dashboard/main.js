import React, {useState} from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
const Main = () => {
    const [popUpState, setPopUpState] = useState(false);
    function togglePopUp(){
        setPopUpState(true);
    }
    return (
        <div className={"dashboard"}>
            <ScrollToTopControlller/>
            <div className={"dashboard__submenu"}>
                <p className={"dashboard__title"}>NEWS FEED</p>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}>Providers</li>
                    <li className={"dashboard__list-item "}>Requesters</li>
                    <li className={"dashboard__list-item "}> <button onClick={togglePopUp} className={"dashboard__button"}>Create Post</button></li>
                </ul>

            </div>
            <div>
                {popUpState ? "I am pop up!" : null}
            </div>
                <Post/>
        </div>
    );
};

export default Main;