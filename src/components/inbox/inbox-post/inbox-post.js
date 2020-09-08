import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../post/style/post.css';
import people from './icons/people-icon.png';
import arrow from '../../post/images/arrow.svg';
import './style/inbox-post.css';
import {withRouter} from "react-router-dom";
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import {getPosts} from "../../profile/profileActions";
import {connect} from "react-redux";
import {getInterestedRequest, getInterestedRequestProvide} from "../../post/postActions";
import {getUserData} from "../../sidebar/sidebarActions";

const InboxPost = (props) => {
   // const [interested, setInterested] = useState([])
    const [relatedInbox, setRelatedInbox] = useState([])
    useEffect(() => {
        props.getInterestedRequest();
        props.getInterestedRequestProvide();
    }, [])

    const redirect = (item) => {
        props.history.push({
            pathname: '/profile/inbox-page',
            state: {post: item}
        })
    }
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
    const mapRequests = (id, create) =>{
        let interested = []
        if(create === "req"){

            interested = props.post.interestedReq
        }
        else if(create === "prov"){

            interested = props.post.interestedProv
        }
        let arr = []
        interested.forEach((item) => {
            if(item.service.id === id){
                arr.push(item)
            }
        })
        return arr.length
    }
    let id = JSON.parse(localStorage.getItem("num"));
    const {posts} = props
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {posts.map((item, indx) =>
                    //item.requester.id !== user.id || item.provider.id !== user.id ? null :
                    <div key={indx} className={"col-lg-4 col-md-6 col-sm-12 col-xs-12"}>
                        <Card onClick={() => redirect(item)}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}>
                                            <p className={"post__type"}>{types[item.service_type]}</p>
                                            <div
                                                className={"post__person"}>{item.requester ? "Requester" : "Provider"}</div>
                                        </li>
                                        <li className={"post__top-list-item inbox-post__item"}><img
                                            className={"icon-people"} src={people}/> + {item.createdBy === "Requester" ? mapRequests(item.id, "req") : mapRequests(item.id, "prov")}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"post__location"}>
                                    <div className={"post__address"}>
                                        <CardText
                                            className={"post__city"}>{splitStr(item.pickup_location, 0)}</CardText>
                                        <CardSubtitle
                                            className={"post__country"}>{splitStr(item.pickup_location, 1)}</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText
                                            className={"post__city"}>{splitStr(item.drop_off_location, 0)}</CardText>
                                        <CardSubtitle
                                            className={"post__country"}>{splitStr(item.drop_off_location, 1)}</CardSubtitle>
                                        <CardSubtitle className={"post__deadline"}>{item.deadline}</CardSubtitle>
                                    </div>
                                </div>
                            </div>
                            <CardText className={"post__text"}>{item.title} {item.text}</CardText>
                            <CardText
                                className={"post__email"}>{item.requester ? item.requester.email : item.provider.email}</CardText>
                        </Card>
                    </div>
                )}
                <div>
                </div>
            </div>
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
        getInterestedRequest: (id) =>
            dispatch(getInterestedRequest(id)),
        getInterestedRequestProvide: (id) =>
            dispatch(getInterestedRequestProvide(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InboxPost));
