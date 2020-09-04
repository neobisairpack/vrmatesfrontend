import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../post/style/post.css';
import arrow from '../../post/images/arrow.svg';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import {connect} from "react-redux";
import {getPosts} from "../../profile/profileActions";


const CompletedPost = (props) => {

    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
        "Hosting": "Hosting"
    }
    const splitStr = (str, n) => {
        if(str){
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
    const urlImg = 'http://167.172.178.135:8000/';
    const {url} = props;
    useEffect(() => {
        props.getPosts()
    }, [])
    const {completed_posts} = props.profilePost;
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {completed_posts.map((item) =>
                    <div key={item.id} className={"col-lg-4 col-md-6 col-sm-12 col-xs-12"}>
                        <Card className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}>
                                            {item.requester ?
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
                                                className={"post__user-name"}>{item.requester ? item.requester.first_name : item.provider.first_name}</div>
                                            <div className={"post__item-rating"}>
                                                <Box>
                                                    <StyledRating name="read-only" value={ item.requester ? item.requester.avg_rating_last_ten : item.provider.avg_rating_last_ten} size="small" readOnly
                                                                  precision={0.5}/>
                                                </Box>
                                            </div>
                                        </li>
                                        <li className={"post__top-list-item"}><CardText
                                            className={"post__package-provider"}>{url === 'service' ? "Requester" : "Provider"}</CardText>
                                        </li>
                                    </ul>
                                </div>

                                <label className={"post__type"}>{types[item.service_type]}</label>
                                <div className={"post__location"}>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{splitStr(item.pickup_location, 0)}</CardText>
                                        <CardSubtitle className={"post__country"}>{splitStr(item.pickup_location, 1)}</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{splitStr(item.drop_off_location, 0)}</CardText>
                                        <CardSubtitle className={"post__country"}>{splitStr(item.drop_off_location, 1)}</CardSubtitle>
                                        <div className={"post__deadline"}>{item.deadline}</div>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <CardText className={"post__text"}>{item.title} {item.text} </CardText>
                                <CardText
                                    className={"post__email"}>{item.requester ? item.requester.email : item.provider.email}</CardText>
                            </div>
                        </Card>
                    </div>
                )}

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
        getPosts: () =>
            dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedPost);
