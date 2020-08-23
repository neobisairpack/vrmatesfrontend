import React, {useEffect, useState} from 'react';
import '../../../profile/style/profile.css';
import '../style/inbox-page.css';
import logo from "../../../sidebar/images/logo.svg";
import back from '../icons/back-icon.png';
import imgIcon from "../../../post/images/empty-img.svg";
import '../../../create-post/style/create-post.css';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
    changePostStatus, changePostStatusProvide,
    chooseYesNo,
    currentCreatedBy,
    editPost,
    setCurrentCreatedBy
} from "../../../profile/profileActions";
import {setCurrentUser} from "../../../post/postActions";
import Notification from "../../../notification/notification";
import CreatePostDelivery from "../../../create-post/createDeliveryPost";
import CreatePostAirport from "../../../create-post/createAirportPost";
import CreatePostHosting from "../../../create-post/createHostingPost";
import CreateProviderDelivery from "../../../create-post/createProviderDelivery";
import CreateProviderAirport from "../../../create-post/createProviderAirport";
import CreateProviderHosting from "../../../create-post/createProviderHosting";
import LogOut from "../../../pop-up/popup-logout";
import {Button, Modal} from "react-bootstrap";

const InboxPageSidebar = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [notShow, setNotShow] = useState(false);
    const [logoutShow, setLogoutShow] = useState(false);
    const [notMessage, setNotMessage] = useState("")
    const [logoutMessage, setLogoutMessage] = useState("")
    const [choice, setChoice] = useState("");
    const [type, setType] = useState("");
    const [typeProvide, setTypeProvide] = useState("");
    const {post} = props.location.state;
    useEffect(()=>{
        if(choice !== "") {
            setLogoutShow(false)
            sendCancel()
        }
    }, )

    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const splitStr = (str, n) => {
        if (str) {
            let res = str.split(",")
            return res[n];
        }
    }
    const editHandler = (post) => {
        if(props.post.interested.length){
            setNotMessage("You have interested users, reject them all and try again!")
            setNotShow(true)
        }
        else{
            if(post.requester){
                setType(post.service_type)
                setModalShow(true)
            }
            else{
                setTypeProvide(post.service_type)
                setModalShow(true)
            }
        }
    }
    const cancelHandler = (post) => {
        setLogoutMessage("Are sure you want to cancel the post?");
        setLogoutShow(true)
    }
    const sendCancel = () =>{
        console.log(props.profilePost.choice, new Date().toLocaleString())
        if(props.profilePost.choice === "yes"){
            if(props.post.interested.length){
                setNotMessage("You have interested users, reject them all and try again!")
                setNotShow(true)
                setChoice("")
            }
            else{
                let status = "Canceled"
                post.createdBy === "Requester" ? props.changePostStatus(post, status) :
                    props.changePostStatusProvide(post, status)
                setChoice("")
            }
        }
    }

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
                <button onClick={() => cancelHandler(post)} className={"create-post__save-button"}>Cancel</button>
            </div>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
                <LogOut setChoice={(c) => setChoice(c)} show={logoutShow} message={logoutMessage}
                                      onHide={() => setLogoutShow(false)}/>
            </div>
            {type === "Delivery" ? <CreatePostDelivery post={post} show={modalShow}
                                                       onHide={() => setModalShow(false)}/> : type === "Pick Up" ?
                <CreatePostAirport post={post} show={modalShow}
                                   onHide={() => setModalShow(false)}/> : type === "Hosting" ?
                    <CreatePostHosting post={post} show={modalShow}
                                       onHide={() => setModalShow(false)}/> : null}
            {typeProvide === "Delivery" ? <CreateProviderDelivery post={post} show={modalShow}
                                                       onHide={() => setModalShow(false)}/> : typeProvide === "Pick Up" ?
                <CreateProviderAirport post={post} show={modalShow}
                                   onHide={() => setModalShow(false)}/> : typeProvide === "Hosting" ?
                    <CreateProviderHosting post={post} show={modalShow}
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
        changePostStatus: (post, status) =>
            dispatch(changePostStatus(post, status)),
        changePostStatusProvide: (post, status) =>
            dispatch(changePostStatusProvide(post, status)),
        chooseYesNo: (data) =>
            dispatch(chooseYesNo(data)),
        setCurrentCreatedBy: (data) =>
            dispatch(setCurrentCreatedBy(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InboxPageSidebar));