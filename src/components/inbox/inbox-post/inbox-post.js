import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../post/style/post.css';
import people from './icons/people-icon.png';
import arrow from '../../post/images/arrow.svg';
import './style/inbox-post.css';
import { withRouter} from "react-router-dom";
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import {getPosts} from "../../profile/profileActions";
import {connect} from "react-redux";

const InboxPost = (props) => {
    useEffect(() => {
        props.getPosts();
    }, [])
    const redirect = () => {
        console.log(props)
        props.history.push({
            pathname: '/profile/inbox-page',
        })
    }
    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const {inbox_posts} = props.profilePost;
    console.log(inbox_posts)
    console.log(props)
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {inbox_posts.map((item) =>
                    <div key={item.id} className={"col-4"}>
                        <Card onClick={() => redirect()}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}>
                                            <p className={"post__type"}>{types[item.service_type]}</p>
                                            <div className={"post__person"}>{item.requester ? "Requester" : "Provider"}</div>
                                        </li>
                                        <li className={"post__top-list-item inbox-post__item"}><img className={"icon-people"} src={people}/> + 3</li>
                                    </ul>
                                </div>
                                <div className={"post__location"}>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{item.pickup_location}</CardText>
                                        <CardSubtitle className={"post__country"}>Kyrgyzstan</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{item.drop_off_location}</CardText>
                                        <CardSubtitle className={"post__country"}>Russia</CardSubtitle>
                                        <CardSubtitle className={"post__deadline"}>{item.deadline}</CardSubtitle>
                                    </div>
                                </div>
                            </div>
                            <CardText className={"post__text"}>{item.text}</CardText>
                            <CardText className={"post__email"}>{item.requester.email || item.provider.email}</CardText>
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: post =>
            dispatch(getPosts(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InboxPost));
