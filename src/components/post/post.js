import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import arrow from './images/arrow.svg';
import FullPost from './full-view';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import {connect} from "react-redux";
import {getPostsDashboard, sendInterestedRequest, sendInterestedRequestProvide, setIsSendFalse} from "./postActions";
import Notification from "../notification/notification";

const Post = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")
    useEffect(() => {
        const {isSend} = props.post;
        if(isSend){
            setNotMessage("You are interested in this user's post");
            setNotShow(true)
            props.setIsSendFalse();
        }
    })
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
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);
    const urlImg = 'http://167.172.178.135:8000';
    const {url} = props;
    const modalHandler = (index) => {
        setActiveModal(index);
    }

    const sendRequest = (item) => {
        if (item.requester) {
            if(item.requester.id !== props.userData.user.id){
                props.sendInterestedRequest(item.id)
            }
            else{
                setNotMessage("You cannot be interested in your post")
                setNotShow(true)
            }
        } else {
            if(item.provider.id !== props.userData.user.id){
                props.sendInterestedRequestProvide(item.id)
            }
            else{
                setNotMessage("You cannot be interested in your post")
                setNotShow(true)
            }}
    }
    const {posts} = props;
    return (
        <div className={"post container"}>
            <>
                <div className={"row"}>
                    {posts.map((item) =>
                        <div key={item.id} className={"col-lg-4 col-md-6 col-sm-12 col-xs-12"}>
                            <Card  className={"post__card"}>
                                <div onClick={() => modalHandler(item.id)} className={"post__content"}>
                                    <div className={"post__top"}>
                                        <ul className={"post__top-list"}>
                                            <li className={"post__top-list-item"}>
                                                {item.requester ?
                                                    item.requester.image ?
                                                        <img src={urlImg + item.requester.image}
                                                             className={"post__avatar"}
                                                             alt={"User"}/> : <img className={"post_avatar-empty"}
                                                                                   src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                                   alt="Card image cap"/> :

                                                    item.provider.image ?
                                                        <img src={urlImg + item.provider.image}
                                                             className={"post__avatar"}
                                                             alt={"User"}/> : <img className={"post_avatar-empty"}
                                                                                   src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                                   alt="Card image cap"/>}
                                            </li>
                                            <li className={"post__top-list-item"}>
                                                <div
                                                    className={"post__user-name"}>{item.requester ? item.requester.first_name : item.provider.first_name}</div>
                                                <div className={"post__item-rating"}>
                                                    <Box>
                                                        <StyledRating name="read-only"
                                                                      value={item.requester ? item.requester.avg_rating_last_ten : item.provider.avg_rating_last_ten}
                                                                      size="small" readOnly
                                                                      precision={0.5}/>
                                                    </Box>
                                                </div>
                                            </li>
                                            <li className={"post__top-list-item"}><CardText
                                                className={"post__package-provider"}>{url === 'services' ? "Requester" : "Provider"}</CardText>
                                            </li>
                                        </ul>
                                    </div>

                                    <label className={"post__type"}>{types[item.service_type]}</label>
                                    <div className={"post__location"}>
                                        <div className={"post__address"}>
                                            <CardText
                                                className={"post__city"}>{splitStr(item.pickup_location, 0)}</CardText>
                                            <CardSubtitle
                                                className={"post__country"}>{splitStr(item.pickup_location, 1)}</CardSubtitle>
                                        </div>
                                        {item.provider && item.service_type === "Hosting" ? null :
                                            <>
                                                <img className={"post__arrow"} src={arrow}/>
                                                <div className={"post__address"}>
                                                    <CardText
                                                        className={"post__city"}>{splitStr(item.drop_off_location, 0)}</CardText>
                                                    <CardSubtitle
                                                        className={"post__country"}>{splitStr(item.drop_off_location, 1)}</CardSubtitle>
                                                    <div className={"post__deadline"}>{item.deadline}</div>
                                                </div>
                                            </>
                                        }
                                    </div>

                                </div>
                                <div>
                                    <CardText className={"post__text"}>{item.title} {item.text} </CardText>
                                    <CardText
                                        className={"post__email"}>{item.requester ? item.requester.email : item.provider.email}</CardText>
                                    {props.btn ?
                                        <button onClick={() => {
                                            sendRequest(item)
                                        }} className={"post__interested-btn"}>Interested</button> :
                                        null
                                    }
                                </div>
                            </Card>
                            <div className={"full-post"}>
                                <FullPost data={item} show={activeModal === item.id}
                                          onHide={() => setActiveModal(null)}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        post: state.post,
        userData: state.userData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendInterestedRequest: (id) =>
            dispatch(sendInterestedRequest(id)),
        sendInterestedRequestProvide: (id) =>
            dispatch(sendInterestedRequestProvide(id)),
        getPostsDashboard: (url) =>
            dispatch(getPostsDashboard(url)),
        setIsSendFalse: () =>
            dispatch(setIsSendFalse()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
