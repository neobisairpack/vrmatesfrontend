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
import {getPosts} from "../../profile/profileActions";
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import RateUser from "../../reviews/rate-user/rate-user";

const InProgressPost = (props) => {
    const urlImg = 'http://167.172.178.135';
    useEffect(() => {
        props.getPosts();
    }, [])
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
        if(str){
            let res = str.split(" ")
            return res[n];
        }
    }
    const [modalShow, setModalShow] = useState(false)
    const {inprog_posts} = props.profilePost;
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {inprog_posts.map((item, id) =>
                    <div key={id} className={"col-4"}>
                        <Card className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}>
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
                                            <div className={"post__user-name"}>{item.createdBy === "Requester" ? item.requester.first_name : item.provider.first_name}</div>
                                            <div className={"post__item-rating"}>
                                                <Box>
                                                    <StyledRating name="read-only" value={ item.createdBy === "Requester" ? item.requester.avg_rating_last_ten : item.provider.avg_rating_last_ten} size="small" readOnly
                                                                  precision={0.5}/>
                                                </Box>
                                            </div>
                                        </li>
                                        <li className={"post__top-list-item inbox-post__item"}>
                                            <DropdownButton alignRight
                                                            title={<img className={"inprogress__icon-more"}
                                                                        src={"https://img.icons8.com/ios-glyphs/30/000000/more.png"}/>}
                                                            className={"inprogress__more-btn"}>
                                                <Dropdown.Item eventKey="1"
                                                               onClick={() => setModalShow(true)}>Confirm</Dropdown.Item>
                                                <Dropdown.Item eventKey="2">Cancel</Dropdown.Item>
                                                <Dropdown.Item eventKey="3">Report</Dropdown.Item>
                                            </DropdownButton>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"inprogress__post-type"}>
                                    <label className={"post__type"}>{types[item.service_type]}</label>
                                    <CardText
                                        className={"in-progress__requester"}>{item.createdBy}</CardText>
                                </div>
                                <div>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{splitStr(item.pickup_location, 0)}</CardText>
                                        <CardSubtitle className={"post__country"}>{splitStr(item.pickup_location, 1)}</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{splitStr(item.drop_off_location, 0)}</CardText>
                                        <CardSubtitle className={"post__country"}>{splitStr(item.drop_off_location, 0)}</CardSubtitle>
                                        <CardSubtitle className={"post__deadline"}>{item.deadline}</CardSubtitle>
                                    </div>
                                </div>
                            </div>
                            <CardText className={"post__text"}>{item.title} {item.text}</CardText>
                            <CardText className={"post__email"}>{item.createdBy === "Requester" ? item.requester.email : item.provider.email}</CardText>
                        </Card>
                    </div>
                )}
                <div>
                </div>
            </div>
            <RateUser show={modalShow}
                      onHide={() => setModalShow(false)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(InProgressPost);
