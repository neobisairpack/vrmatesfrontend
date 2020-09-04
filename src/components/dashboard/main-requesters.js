import React, {useEffect, useState} from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Header from "../header";
import Footer from "../footer";
import '../pop-up/popup-switch/style/popup.css';
import filter from './icons/filter-icon.svg';
import Filter from "../pop-up/popup-filter";
import {Link, withRouter} from 'react-router-dom';
import CreatePostDelivery from "../create-post/createDeliveryPost";
import CreatePostAirport from "../create-post/createAirportPost";
import CreatePostHosting from "../create-post/createHostingPost";
import {getPostsDashboard, sendInterestedRequest, sendInterestedRequestProvide} from "../post/postActions";
import {connect} from "react-redux";
import Pagination from "../pagination/pagination";

const MainRequesters = (props) => {
    const [popUpState, setPopUpState] = useState(false);
    const [filterState, setFilterState] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [activeLink, setActiveLink] = useState(null)
    const [radio, setRadio] = useState("");
    const [type, setType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    useEffect(() => {
        props.getPostsDashboard('services')
        const path = props.location.pathname;
        switch (path) {
            case '/dashboard':
                setActiveLink(1);
                break;
            case '/dashboard/requesters':
                setActiveLink(1);
                break;
            case '/dashboard/providers':
                setActiveLink(2);
                break;
            default:
                setActiveLink(null);
        }
    }, [])

    function togglePopUpSwitch() {
        setPopUpState(!popUpState);
    }

    function togglePopUpFilter() {
        setFilterState(!filterState);
    }

    function setModalFunc() {
        if (radio) {
            setType(radio);
            setModalShow(true);
            togglePopUpSwitch();
        } else {
            alert("Please, choose the service type");
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setRadio(value)
    }
    const paginate = (pagenumber) => setCurrentPage(pagenumber)
    const {posts} = props.post;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className={"dashboard"}>
            <ScrollToTopControlller/>
            <Sidebar {...props}/>
            <Header/>
            <div>
                <div className={"dashboard__submenu"}>
                    <p className={"dashboard__title"}>NEWS FEED</p>
                    <ul className={"dashboard__list"}>
                        <Link to={"/dashboard/providers"}>
                            <li className={"dashboard__list-item " + (activeLink === 2 ? "dashboard__list-item_active" : "")}>Providers</li>
                        </Link>
                        <Link to={"/dashboard/requesters"}>
                            <li className={"dashboard__list-item " + (activeLink === 1 ? "dashboard__list-item_active" : "")}>Requesters</li>
                        </Link>
                        <li className={"dashboard__list-item "}>
                            <button onClick={togglePopUpFilter}
                                    className={"dashboard__filter "}>
                                <img src={filter} alt={"filter"}/>Filter
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
                        <p className={"switch__title"}>Requesters</p>
                        <ul>
                            <li>
                                <input type={"radio"} name={"radio"} value={"delivery"}
                                       defaultChecked={radio === "delivery"} onChange={(e) => handleChange(e)}/>
                                <label>Package Delivery</label>
                            </li>
                            <li>
                                <input type={"radio"} name={"radio"} value={"pickup"}
                                       defaultChecked={radio === "pickup"} onChange={(e) => handleChange(e)}/>
                                <label>Airport pick up/drop off</label>
                            </li>
                            <li>
                                <input type={"radio"} name={"radio"} value={"hosting"}
                                       defaultChecked={radio === "hosting"} onChange={(e) => handleChange(e)}/>
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

                    {filterState ? <Filter state={(f) => setFilterState(f)}/> : null}

                </div>
                <Post url={"services"} posts={currentPosts} {...props} size={"dashboard-post"} btn={"true"}/>
                <div className={"dashboard__pagination"}>
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}
                                currentPage={currentPage}/>
                </div>
            </div>
            {type === "delivery" ? <CreatePostDelivery show={modalShow}
                                                       onHide={() => setModalShow(false)}/> : type === "pickup" ?
                <CreatePostAirport show={modalShow}
                                   onHide={() => setModalShow(false)}/> : type === "hosting" ?
                    <CreatePostHosting show={modalShow}
                                       onHide={() => setModalShow(false)}/> : null}
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        post: state.post,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPostsDashboard: (url) =>
            dispatch(getPostsDashboard(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainRequesters));