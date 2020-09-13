import React, {useEffect, useState} from 'react';
import '../../post/style/post.css';
import arrow from '../../post/images/arrow.svg';
import '../../inbox/inbox-post/style/inbox-post.css';
import '../../profile/style/profile.css';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import './style/inprogress-post.css';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {changePostStatus, changePostStatusProvide, getPosts} from "../../profile/profileActions";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import RateUser from "../../reviews/rate-user/rate-user";
import LogOut from "../../pop-up/popup-logout";
import Support from "../../popup-support";
import {withRouter} from "react-router-dom";
import {setCurrentUser} from "../../post/postActions";

const InProgressPost = (props) => {
    const urlImg = 'http://167.172.178.135:8000';
    const [activeModal, setActiveModal] = useState(null);
    const [logoutShow, setLogoutShow] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState("")
    const [supportModal, setSupportModal] = useState(false)
    const [curPost, setCurPost] = useState({})
    const [choice, setChoice] = useState("");
    let forReport = Number(localStorage.getItem("report"))
    useEffect(() => {
        if (choice !== "") {
            setLogoutShow(false)
            curPost.createdBy === "Requester" ? sendCancel() : sendCancelProvider()
        }
    },)
    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);
    const splitStr = (str, n) => {
        if (str) {
            let res = str.split(",")
            return res[n];
        }
    }
    let userId = localStorage.getItem("num")
    const modalHandler = (index) => {
        setActiveModal(index);
    }
    const cancelHandler = (item) => {
        setCurPost(item)
        setLogoutMessage("Are sure you want to cancel the post? Points will be divided according to date.");
        setLogoutShow(true)
    }
    const cancelProvider = (item) => {
        setCurPost(item)
        setLogoutMessage("Are sure you want to cancel the post?");
        setLogoutShow(true)
    }
    const setUserFunc = (user) => {
        props.setUser(user)
        redirect(user.first_name)
    }
    const redirect = (name) => {
        props.history.push({
            pathname: `/profile/inbox-page/${name}`,
        })
    }
    const sendCancel = () => {
        if (choice === "yes") {
            let status = "Canceled"
            props.changePostStatus(curPost, status)
        }
        setChoice("")
    }
    const sendCancelProvider = () => {
        if (choice === "yes") {
            let status = "Canceled"
            props.changePostStatusProvide(curPost, status)
        }
        setChoice("")
    }
    const {posts} = props;
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {posts.map((item, id) =>
                    <div key={id} className={"col-lg-4 col-md-6 col-sm-12 col-xs-12"}>
                        <Card className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li onClick={() => setUserFunc(item.createdBy === "Requester" ? item.requester : item.provider)}
                                            className={"post__top-list-item post__user-click"}>
                                            {item.createdBy === "Requester" ?
                                                item.requester.image ?
                                                    <img src={urlImg + item.requester.image} className={"post__avatar"}
                                                         alt={"User"}/> : <img className={"post_avatar-empty"}
                                                                               src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                               alt="Card image cap"/> :

                                                item.provider.image ?
                                                    <img src={urlImg + item.provider.image} className={"post__avatar"}
                                                         alt={"User"}/> : <img className={"post_avatar-empty"}
                                                                               src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                               alt="Card image cap"/>}
                                        </li>
                                        <li className={"post__top-list-item"}>
                                            <div
                                                className={"post__user-name"}>{item.createdBy === "Requester" ? item.requester.first_name : item.provider.first_name}</div>
                                            <div className={"post__item-rating"}>
                                                <Box>
                                                    <StyledRating name="read-only"
                                                                  value={item.createdBy === "Requester" ? item.requester.avg_rating_last_ten : item.provider.avg_rating_last_ten}
                                                                  size="small" readOnly
                                                                  precision={0.5}/>
                                                </Box>
                                            </div>
                                        </li>
                                        { item.requester.id === Number(userId) ?
                                            forReport === item.id ? null :
                                                (<li className={"post__top-list-item inbox-post__item"}>
                                                <DropdownButton alignRight
                                                                title={<img className={"inprogress__icon-more"}
                                                                            src={"https://img.icons8.com/ios-glyphs/30/000000/more.png"}/>}
                                                                className={"inprogress__more-btn"}>
                                                    <Dropdown.Item eventKey="1"
                                                                   onClick={() => modalHandler(item.id)}>Confirm</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => cancelHandler(item)}
                                                                   eventKey="2"
                                                                   className={"inprogress__cancel-btn"}>Cancel</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSupportModal(true)}
                                                                   eventKey="3">Report</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setUserFunc(item.createdBy === "Requester" ? item.provider : item.requester)}
                                                                   eventKey="3">{item.createdBy === "Requester" ? item.provider.first_name : item.requester.first_name}'s
                                                        profile</Dropdown.Item>
                                                </DropdownButton>
                                            </li>) :
                                            <li className={"post__top-list-item inbox-post__item"}>
                                                <DropdownButton alignRight
                                                                title={<img className={"inprogress__icon-more"}
                                                                            src={"https://img.icons8.com/ios-glyphs/30/000000/more.png"}/>}
                                                                className={"inprogress__more-btn"}>
                                                    <Dropdown.Item onClick={() => cancelHandler(item)}
                                                                   eventKey="2"
                                                                   className={"inprogress__cancel-btn"}>Cancel</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setUserFunc(item.createdBy === "Provider" ? item.requester : item.provider)}
                                                                   eventKey="3">{item.createdBy === "Provider" ? item.requester.first_name : item.provider.first_name}'s
                                                        profile</Dropdown.Item>
                                                </DropdownButton>
                                                {/*<button onClick={() => cancelProvider(item)} className={"inprogress__cancel-btn"}>Cancel</button>*/}
                                            </li> }

                                    </ul>
                                </div>
                                <div className={"inprogress__post-type"}>
                                    <label className={"post__type"}>{types[item.service_type]}</label>
                                    <CardText
                                        className={"in-progress__requester"}>{item.createdBy}</CardText>
                                </div>
                                <div>
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
                                            className={"post__country"}>{splitStr(item.drop_off_location, 0)}</CardSubtitle>
                                    </div>
                                        </>}
                                    <CardSubtitle className={"post__deadline"}>{item.deadline}</CardSubtitle>
                                </div>
                            </div>
                            <CardText className={"post__text"}>{item.title} {item.text}</CardText>
                            <CardText
                                className={"post__email"}>{item.createdBy === "Requester" ? item.requester.email : item.provider.email}</CardText>
                        </Card>
                        <RateUser reciever={item.provider} post={item} show={activeModal === item.id}
                                  onHide={() => setActiveModal(null)}/>
                        <Support show={supportModal} from={item.id}
                                 onHide={() => setSupportModal(false)}/>
                    </div>
                )}
                <div>
                </div>
            </div>
            <LogOut setChoice={(c) => setChoice(c)} show={logoutShow} message={logoutMessage}
                    onHide={() => setLogoutShow(false)}/>
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
        changePostStatus: (post, status) =>
            dispatch(changePostStatus(post, status)),
        changePostStatusProvide: (post, status) =>
            dispatch(changePostStatusProvide(post, status)),
        setUser: (user) =>
            dispatch(setCurrentUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InProgressPost));
