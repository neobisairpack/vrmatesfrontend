import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/interested.css';
import {withRouter} from "react-router-dom";
import {
    changeStatusRequest,
    getInterestedRequest,
    getInterestedRequestProvide,
    setCurrentUser
} from "../../../post/postActions";
import {connect} from "react-redux";


const InterestedUser = (props) => {
    const [interested, setInterested] = useState([])

    useEffect(() => {
        if(props.location.state.post.createdBy === "Requester"){
            props.getInterestedRequest()
            setInterested(props.post.interestedReq)
        }
        else{
            props.getInterestedRequestProvide()
            setInterested(props.post.interestedProv)
        }

    }, [])
    const setUserFunc = (user) => {
        props.setUser(user)
        redirect(user.first_name)
    }
    const redirect = (name) =>{
        console.log(props, new Date().toLocaleString())
        props.history.push({
            pathname: `/profile/inbox-page/${name}`,
        })
    }
    const acceptHandler = (req) =>{
        props.changeStatusRequest(req, "Accepted")
    }
    const canceltHandler = (req) =>{
        props.changeStatusRequest(req, "Canceled")
    }
    const urlImg = 'https://vrmates.co'
    return (
        <div className={"interested-user container"}>
            <div className={"row"}>
                {interested.map((item) =>
                item.service.id === props.location.state.post.id ?
                    <div key={item.id} className={"col-4"}>
                        <div className={"interested-user-card "}>
                            <ul className={"interested-user__info"} onClick={() => setUserFunc(item.requester)}>
                                <li className={"interested__list-item"}>
                                    {item.requester.image ?
                                    <img src={urlImg + item.requester.image} className={"interested__photo"}
                                         alt={"User"}/> :
                                    <img className={"interested__photo_empty"}  src={"https://img.icons8.com/material-sharp/96/000000/user.png"}/>}
                                </li>
                                <li className={"interested__list-item"}>
                                    <div className={"interested__user-type"}>Provider</div>
                                    <div className={"interested__user-name"}>{item.requester.first_name || ""}</div>
                                </li>
                            </ul>
                            <div className={"interested__service-type"}>{item.service.service_type}</div>
                            <div className={"interested__buttons"}>
                                <button onClick={() => acceptHandler(item)} className={"interested__button interested__button_accept"}>Accept</button>
                                <button onClick={() => canceltHandler(item)} className={"interested__button interested__button_cancel"}>Cancel</button>
                            </div>
                        </div>
                    </div> : null
                )}
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
        getInterestedRequest: (id) =>
            dispatch(getInterestedRequest(id)),
        getInterestedRequestProvide: (id) =>
            dispatch(getInterestedRequestProvide(id)),
        setUser: (user) =>
            dispatch(setCurrentUser(user)),
        changeStatusRequest: (req, status) =>
            dispatch(changeStatusRequest(req, status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InterestedUser));
