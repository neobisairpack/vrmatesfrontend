import React, {useEffect, useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Reviews from "../reviews/reviews";
import {Link, withRouter} from "react-router-dom";
import '../profile/style/profile.css';
import '../dashboard/style/main.css';
import InProgressPost from "./inprogress-post/inprogress-post";
import Header from "../header";
import Footer from "../footer";
import ProfileSidebar from "../sidebar/profile-sidebar";
import {getPostsDashboard} from "../post/postActions";
import {connect} from "react-redux";
import {getPosts} from "../profile/profileActions";
import Pagination from "../pagination/pagination";

const InProgress = (props) => {
    const [activeLink, setActiveLink] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    useEffect(() => {
        props.getPosts();
        const path = props.location.pathname;
        switch (path) {
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
    const paginate = (pagenumber) => setCurrentPage(pagenumber)
    const {inprog_posts} = props.profilePost;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = inprog_posts.slice(indexOfFirstPost, indexOfLastPost);

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
                                                                      className={"profile__list-item " + (activeLink === 1 ? "profile__list-item_active" : "")}>Inbox</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/in-progress'}
                                                                      className={"profile__list-item " + (activeLink === 2 ? "profile__list-item_active" : "")}>In progress</Link>
                        </li>
                        <li className={"dashboard__list-item "}><Link to={'/profile/completed'}
                                                                      className={"profile__list-item " + (activeLink === 3 ? "profile__list-item_active" : "")}>Completed</Link>
                        </li>
                    </ul>
                </div>
                <InProgressPost posts={currentPosts}/>
                <div className={"dashboard__pagination"}>
                    <Pagination postsPerPage={postsPerPage} totalPosts={inprog_posts.length} paginate={paginate}
                                currentPage={currentPage}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profilePost: state.profilePost,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: () =>
            dispatch(getPosts()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InProgress));