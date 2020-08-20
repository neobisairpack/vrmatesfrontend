import React, {useState} from 'react';
import '../../../profile/style/profile.css';
import '../style/inbox-page.css';
import logo from "../../../sidebar/images/logo.svg";
import back from '../icons/back-icon.png';
import imgIcon from "../../../post/images/empty-img.svg";
import '../../../create-post/style/create-post.css';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {editPost} from "../../../profile/profileActions";
import {setCurrentUser} from "../../../post/postActions";
import Notification from "../../../notification/notification";
import CreatePostDelivery from "../../../create-post/createDeliveryPost";
import CreatePostAirport from "../../../create-post/createAirportPost";
import CreatePostHosting from "../../../create-post/createHostingPost";

const InboxPageSidebar = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")
    const [type, setType] = useState("")
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
    const editHandler = (post) => {
        if(props.post.interested){
            setNotMessage("You have interested users, reject them all and try again!")
            setNotShow(true)
        }
        else{
            setType(post.service_type)
            setModalShow(true);
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
                <p className={"inbox-page__email"}>{ post.requester ? post.requester.email : post.provider.email}</p>
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
                <button onClick={() => editHandler(post)} className={"create-post__cancel-button"}>Edit</button>
                <button className={"create-post__save-button"}>Cancel</button>
            </div>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
            {type === "Delivery" ? <CreatePostDelivery show={modalShow}
                                                       onHide={() => setModalShow(false)}/> : type === "Pick Up" ?
                <CreatePostAirport post={post} show={modalShow}
                                   onHide={() => setModalShow(false)}/> : type === "Hosting" ?
                    <CreatePostHosting show={modalShow}
                                       onHide={() => setModalShow(false)}/> : null}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profilePost: state.profilePost,
        post: state.post,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editPost: (post) =>
            dispatch(editPost(post)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InboxPageSidebar));