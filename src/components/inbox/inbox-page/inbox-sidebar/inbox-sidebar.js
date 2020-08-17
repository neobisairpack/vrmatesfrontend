import React from 'react';
import '../../../profile/style/profile.css';
import '../style/inbox-page.css';
import logo from "../../../sidebar/images/logo.svg";
import back from '../icons/back-icon.png';
import imgIcon from "../../../post/images/empty-img.svg";
import '../../../create-post/style/create-post.css';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const InboxPageSidebar = (props) => {
    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const splitStr = (str, n) => {
        if (str) {
            let res = str.split(" ")
            return res[n];
        }
    }
    const {post} = props.location.state
    return (
        <div className={"inbox-page__sidebar"}>
            <img className={"inbox-page__logo"} src={logo} alt={"Vrmates"}/>
            <div className={"inbox-page__title"}>
                <label><Link to={'/profile/inbox'}> <img src={back} alt={"Back"}/></Link> inbox post</label>
            </div>
            <div className={"inbox-page__post-head"}>
                <p className={"inbox-page__post-type"}>{types[post.service_type]}</p>
                <p className={"inbox-page__category"}>{post.requester ? "Requester" : "Provider"}</p>
                <p className={"inbox-page__category"}>
                    Package pick up location: <label
                    className={"inbox-page__data"}>{splitStr(post.pickup_location, 0)}, {splitStr(post.pickup_location, 1)}</label>
                </p>
                <p className={"inbox-page__category"}>
                    Package drop of location: <label
                    className={"inbox-page__data"}>{splitStr(post.drop_off_location, 0)}, {splitStr(post.drop_off_location, 1)}</label>
                </p>
                <div className={"inbox-page__category"}>
                    Delivery date: <label className={"inbox-page__data"}>{post.deadline}</label>
                </div>

            </div>
            <div className={"inbox-page__post-body"}>
                <label className={"inbox-page__category"}>Post body: </label>
                <label className={"inbox-page__text"}>{post.text}</label>
                <p className={"inbox-page__email"}>{post.requester.email || post.provider.email}</p>
                {post.service_type === 'Delivery' && post.requester || post.service_type === 'Hosting' && post.provider ?
                    <>
                        <p className={"inbox-page__category"}>Photo:</p>
                        <div className={"inbox-page__photos"}>
                            <div className={"inbox-page__photo"}><img src={imgIcon} className={"full-post__icon"}/>
                            </div>
                            <div className={"inbox-page__photo"}><img src={imgIcon} className={"full-post__icon"}/>
                            </div>
                        </div>
                    </> : null}
            </div>

            <div className={"inbox-page__post-buttons"}>
                <button className={"create-post__cancel-button"}>Edit</button>
                <button className={"create-post__save-button"}>Cancel</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profilePost: state.profilePost,
    }
}
export default connect(mapStateToProps)(withRouter(InboxPageSidebar));