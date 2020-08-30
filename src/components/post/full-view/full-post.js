import React, {useEffect, useState} from 'react';
import './style/full-post.css';
import {CardSubtitle, CardText} from "reactstrap";
import arrow from "../images/arrow.svg";
import imgIcon from '../images/empty-img.svg';
import exit from '../images/exit.svg';
import '../style/post.css';
import {Modal} from "react-bootstrap";
import { connect } from "react-redux";
import {getPostImages} from "../../create-post/createPostActions";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import {sendInterestedRequest, sendInterestedRequestProvide, setIsSendFalse} from "../postActions";
import Notification from "../../notification/notification";

const FullPost = (props) => {
    const urlImg = 'https://vrmates.co';
    const {data} = props;
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")
    const {isSend} = props.post
    useEffect(() => {
        props.getPostImages(data.id);
    }, [])

    // useEffect(() => {
    //     let name = data.requester ? data.requester.first_name : data.provider.first_name
    //     if(isSend){
    //         setNotMessage(`Now you are one of the interested people of ${name}'s post!`)
    //         props.onHide()
    //         setNotShow(true)
    //         props.setIsSendFalse()
    //     }
    // })
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);

    const splitStr = (str, n) => {
        if(str){
            let res = str.split(",")
            return res[n];
        }
    }

    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const sendRequest = (item) => {
        if (item.requester) {
            props.sendInterestedRequest(item.id);
        } else {
            props.sendInterestedRequestProvide(item.id);
        }
    }
    const {images} = props.createPost;
    return (
        <div>
            <Modal show={props.show} onHide={props.onHide} dialogClassName={"full-post"}>
                <div onClick={props.onHide} className={"full-post__exit"}>
                    <img src={exit}/>
                </div>
                    <div className={"full-post__content"}>
                        <div className={"post__content"}>
                            <div className={"post__top"}>
                                <ul className={"full-post__top-list"}>
                                    <li className={"post__top-list-item"}>
                                        {data.requester ?
                                            data.requester.image ?
                                            <img src={urlImg + data.requester.image} className={"full-post__avatar"}
                                                 alt={"User"}/> : <img className={"full-post_avatar-empty"}
                                                                       src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                       alt="User's photo"/> :

                                            data.provider.image ?
                                            <img src={urlImg + data.provider.image} className={"full-post__avatar"}
                                                 alt={"User"}/> : <img className={"full-post_avatar-empty"}
                                                                       src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                       alt="User's photo"/>}</li>
                                    <li className={"post__top-list-item"}>
                                        <div className={"full-post__user-name"}>{data.requester ? data.requester.first_name : data.provider.first_name}</div>
                                        <div className={"post__item-rating"}>
                                            <Box>
                                                <StyledRating name="read-only" value={ data.requester ? data.requester.avg_rating_last_ten : data.provider.avg_rating_last_ten} readOnly
                                                              precision={0.5}/>
                                            </Box>
                                        </div>
                                    </li>
                                    <li className={"post__top-list-item"}><CardText
                                        className={"full-post__package-provider"}>{data.requester ? "Requester" : "Provider"}</CardText>
                                    </li>
                                </ul>
                            </div>

                            <p className={"post__type"}>{types[data.service_type]}</p>
                            <div className={"full-post__details"}>
                                <div className={"full-post__address"}>
                                    <CardText className={"post__city"}>{splitStr(data.pickup_location, 0)}</CardText>
                                    <CardSubtitle className={"post__country"}>{splitStr(data.pickup_location, 1)}</CardSubtitle>
                                </div>
                                <img className={"post__arrow"} src={arrow}/>
                                <div className={"full-post__address"}>
                                    <CardText className={"post__city"}>{splitStr(data.drop_off_location, 0)}</CardText>
                                    <CardSubtitle className={"post__country"}>{splitStr(data.drop_off_location, 1)}</CardSubtitle>
                                </div>
                                <CardSubtitle className={"post__deadline"}>{data.deadline}</CardSubtitle>
                            </div>

                        </div>
                        <CardText className={"full-post__text"}>{data.title} {data.text} </CardText>
                        <CardText className={"full-post__email"}>{data.requester ? data.requester.email : data.provider.email}</CardText>
                        {data.service_type === 'Delivery' && data.requester || data.service_type === 'Hosting' && data.provider ?
                        <div className={"full-post__images"}>
                            {images[0] ? <div><img className={"full-post__photo"} src={images[0].image}/></div> :
                            <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div> }
                            {images[1] ? <div><img className={"full-post__photo"} src={images[0].image}/></div> :
                            <div className={"full-post__image"}><img src={imgIcon} className={"full-post__icon"}/></div> }
                        </div> : null}
                    </div>

                 <button onClick={() => {
                    sendRequest(data)
                }} className={"full-post__interested-btn post__interested-btn"}>Interested</button>
            </Modal>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        createPost: state.createPost,
        post: state.post
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPostImages: (id) =>
            dispatch(getPostImages(id)),
        setIsSendFalse: () =>
            dispatch(setIsSendFalse()),
        sendInterestedRequest: (id) =>
            dispatch(sendInterestedRequest(id)),
        sendInterestedRequestProvide: (id) =>
            dispatch(sendInterestedRequestProvide(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
