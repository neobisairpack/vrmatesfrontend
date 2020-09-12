import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/interested.css';
import {withRouter} from "react-router-dom";
import {
    changeStatusRequest, changeStatusRequestProvide,
    getInterestedRequest, getInterestedRequestById,
    getInterestedRequestProvide,
    setCurrentUser
} from "../../../post/postActions";
import {connect} from "react-redux";
import Notification from "../../../notification/notification";
import LogOut from "../../../pop-up/popup-logout";

const InterestedUser = (props) => {
    const urlImg = 'http://167.172.178.135:8000';
    const [activeModal, setActiveModal] = useState(false);
    const [notShow, setNotShow] = useState(false);
    const [notMessage, setNotMessage] = useState("");
    useEffect(() => {
        const {isSend} = props.post
        const {error} = props.post
        if (isSend) {
            console.log(isSend)
            setNotMessage("Thank you! User is accepted")
            setNotShow(true)
        }
        else if(isSend === false && error){
            setNotMessage("User was not accepted")
            setNotShow(true)
        }
    }, [props.post.isSend])
    useEffect(() => {
        if (props.location.state.post.createdBy === "Requester") {
            props.getInterestedRequestById("Requester", props.location.state.post.id)
        } else if (props.location.state.post.createdBy === "Provider") {
            props.getInterestedRequestById("Provider", props.location.state.post.id)
        }
    }, [])
    const {interested} = props.post
    const setUserFunc = (user) => {
        props.setUser(user)
        redirect(user.first_name)
    }
    const redirect = (name) => {
        props.history.push({
            pathname: `/profile/inbox-page/${name}`,
        })
    }
    const acceptHandler = (req) => {
        if (props.location.state.post.createdBy === "Requester") {
            props.changeStatusRequest(req, "Accepted")
        } else if (props.location.state.post.createdBy === "Provider") {
            props.changeStatusRequestProvide(req, "Accepted")
        }
    }
    const cancelHandler = (req) => {
        if (props.location.state.post.createdBy === "Requester") {
            props.changeStatusRequest(req, "Canceled")
        } else if (props.location.state.post.createdBy === "Provider") {
            props.changeStatusRequestProvide(req, "Canceled")
        }
        window.location.reload()
    }
    console.log(activeModal)

    return (
        <div className={"interested-user container"}>
            <div className={"row"}>
                {interested.map((item) =>
                    <div key={item.id} className={"col-4"}>
                        <div className={"interested-user-card "}>
                            <ul className={"interested-user__info"} onClick={() => setUserFunc(item.requester)}>
                                <li className={"interested__list-item"}>
                                    {item.requester.image ?
                                        <img src={urlImg + item.requester.image} className={"interested__photo"}
                                             alt={"User"}/> :
                                        <img className={"interested__photo_empty"}
                                             src={"https://img.icons8.com/material-sharp/96/000000/user.png"}/>}
                                </li>
                                <li className={"interested__list-item"}>
                                    <div className={"interested__user-type"}>Provider</div>
                                    <div className={"interested__user-name"}>{item.requester.first_name || ""}</div>
                                </li>
                            </ul>
                            <div className={"interested__service-type"}>{item.service.service_type}</div>
                            <div className={"interested__buttons"}>
                                <button onClick={() => acceptHandler(item)}
                                        className={"interested__button interested__button_accept"}>Accept
                                </button>
                                <button onClick={() => cancelHandler(item)}
                                        className={"interested__button interested__button_cancel"}>Reject
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
                <div>
                    <Notification show={notShow} message={notMessage}
                                  onHide={() => setNotShow(false)}/>
                </div>
            </div>

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
        getInterestedRequest: () =>
            dispatch(getInterestedRequest()),
        getInterestedRequestProvide: () =>
            dispatch(getInterestedRequestProvide()),
        getInterestedRequestById: (createdBy, id) =>
            dispatch(getInterestedRequestById(createdBy, id)),
        setUser: (user) =>
            dispatch(setCurrentUser(user)),
        changeStatusRequest: (req, status) =>
            dispatch(changeStatusRequest(req, status)),
        changeStatusRequestProvide: (req, status) =>
            dispatch(changeStatusRequestProvide(req, status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InterestedUser));
