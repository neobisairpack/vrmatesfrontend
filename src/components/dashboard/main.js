import React, {useState} from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
import '../pop-up/style/popup.css';
import CreatePost from "../create-post";
const Main = () => {
    const [popUpState, setPopUpState] = useState(false);
    const [createPostState, setCreatePostState] = useState(false);
    function togglePopUp(){
        setPopUpState(!popUpState);
    }
    function toggleCreatePost(){
        setCreatePostState(!createPostState);
        setPopUpState(false);
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
                {popUpState ? <div className={"switch"}>
                    <p className={"switch__title"}>Providers</p>
                    <ul>
                        <li>
                            <input type={"radio"} name={"radio"} />
                            <label>Package Delivery</label>
                        </li>
                        <li>
                            <input type={"radio"} name={"radio"}/>
                            <label>Airport pick up/drop off</label>
                        </li>
                        <li>
                            <input type={"radio"} name={"radio"}/>
                            <label>Hosting</label>
                        </li>
                    </ul>
                    <div className={"switch__buttons"}>
                        <ul>
                            <li><button onClick={togglePopUp} className={"switch__button"}>Cancel</button></li>
                            <li><button onClick={toggleCreatePost} className={"switch__button"}>Ok</button></li>
                        </ul>
                    </div>
                </div> : null}
                {createPostState ? <CreatePost/> : null}
            </div>
                <Post/>
        </div>
    );
};

export default Main;