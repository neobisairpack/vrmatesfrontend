import React, {useState} from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
import '../pop-up/popup-switch/style/popup.css';
import filter from './icons/filter-icon.svg';
import Filter from "../pop-up/popup-filter";
import {withRouter} from 'react-router-dom';
import CreatePost from "../create-post";

const Main = (props) => {
    const [popUpState, setPopUpState] = useState(false);
    const [filterState, setFilterState] = useState(false);
    const [createPostState, setCreatePostState] = useState(false);
    const [modalShow, setModalShow] = useState(false)
    const [radio, setRadio] = useState({
        package: "",
        pickup: "",
        hosting: ""
    })

    function togglePopUpSwitch() {
        setPopUpState(!popUpState);
    }

    function togglePopUpFilter() {
        setFilterState(!filterState);
    }
    function setModalFunc() {
        setModalShow(true);
        togglePopUpSwitch();
    }

    const handleChange = (e) => {
        const value = e.target.value
        setRadio({
            ...radio,
            [e.target.name]: value
        })
    }
    return (
        <div className={"dashboard"}>
            <ScrollToTopControlller/>
            <Sidebar  />
            <Header/>
            <div>
                <div className={"dashboard__submenu"}>
                    <p className={"dashboard__title"}>NEWS FEED</p>
                    <ul className={"dashboard__list"}>
                        <li className={"dashboard__list-item"}>Providers</li>
                        <li className={"dashboard__list-item dashboard__list-item_active"}>Requesters</li>
                        <li className={"dashboard__list-item "}>
                            <button onClick={togglePopUpFilter}
                                    className={"dashboard__filter "}>
                                <img src={filter}/>Filter
                            </button>
                        </li>
                        <li className={"dashboard__list-item "}>
                            <button onClick={togglePopUpSwitch}
                                    className={"dashboard__button"}>
                                Create Post
                            </button>
                        </li>
                    </ul>

                </div>
                <div>
                    {popUpState ? <div className={"switch"}>
                        <p className={"switch__title"}>Providers</p>
                        <ul>
                            <li>
                                <input type={"radio"} name={"radio"} value={"package"}/>
                                <label>Package Delivery</label>
                            </li>
                            <li>
                                <input type={"radio"} name={"radio"} value={"pickup"}/>
                                <label>Airport pick up/drop off</label>
                            </li>
                            <li>
                                <input type={"radio"} name={"radio"} value={"hosting"}/>
                                <label>Hosting</label>
                            </li>
                        </ul>
                        <div className={"switch__buttons"}>
                            <ul>
                                <li>
                                    <button onClick={togglePopUpSwitch} className={"switch__button"}>Cancel</button>
                                </li>
                                <li>
                                    <button onClick={setModalFunc} className={"switch__button"}>Ok</button>
                                </li>
                            </ul>
                        </div>
                    </div> : null}

                    {filterState ? <Filter/> : null}

                </div>
                <Post {...props} size={"dashboard-post"} btn={"true"}/>
            </div>
            <CreatePost show={modalShow}
                               onHide={() => setModalShow(false)}/>
            <Footer/>
        </div>
    );
};

export default withRouter(Main);