import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import arrow from './images/arrow.svg';
import axios from 'axios';
import FullPost from './full-view';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';

const Post = (props) => {
    const [dataAll, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    let types = {
        "Delivery": "Package delivery",
        "Pick Up": "Airport Pick Up",
    }
    const [currentPost, setCurrentPost] = useState({
        requester: {
            first_name: "",
            last_name: "",
            email: "",
        },
        pickup_location: "",
        drop_off_location: "",
        deadline: "",
        title: "",
    })
    const {url} = props
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get(`http://167.172.178.135/api/${url}/`, {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(res => {
                setData(res.data)
                setLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    const showFullPost = (post) => {
        setCurrentPost(post);
        setModalShow(true)
        console.log(currentPost)
    }
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {dataAll.map((item) =>
                    <div key={item.id} className={"col-4"}>
                        <Card onClick={() => showFullPost(item)} className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}><img className={"post__avatar"}
                                                                                   src={"https://img.icons8.com/material-sharp/96/000000/user.png"}
                                                                                   alt="Card image cap"/></li>
                                        <li className={"post__top-list-item"}>
                                            <div
                                                className={"post__user-name"}>{ url === 'service' ? item.requester.first_name : item.provider.first_name}</div>
                                            <div className={"post__item-rating"}>
                                                {/*<img src={star} className={"post__item-rating-star"} alt={"Rating"}/>*/}
                                                {/*<img src={star} className={"post__item-rating-star"} alt={"Rating"}/>*/}
                                                {/*<img src={star} className={"post__item-rating-star"} alt={"Rating"}/>*/}
                                                {/*<img src={star} className={"post__item-rating-star"} alt={"Rating"}/>*/}
                                                {/*<img src={star} className={"post__item-rating-star"} alt={"Rating"}/>*/}
                                            </div>
                                        </li>
                                        <li className={"post__top-list-item"}><CardText
                                            className={"post__package-provider"}>{url === 'service' ? "Requester" : "Provider"}</CardText></li>
                                    </ul>
                                </div>

                                <label className={"post__type"}>{types[item.service_type]}</label>
                                <div>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{item.pickup_location}</CardText>
                                        <CardSubtitle className={"post__country"}>{item.start_location}</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>{item.drop_off_location}</CardText>
                                        <CardSubtitle className={"post__country"}>{item.end_location}</CardSubtitle>
                                        <div className={"post__deadline"}>{item.deadline}</div>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <CardText className={"post__text"}>{item.text} </CardText>
                                <CardText className={"post__email"}>{ url === 'service' ? item.requester.email : item.provider.email}</CardText>
                                {props.btn ?
                                    <button className={"post__interested-btn"}>Interested</button> :
                                    null
                                }
                            </div>
                        </Card>
                    </div>
                )}
                <div className={"full-post"}>
                    <FullPost data={currentPost} show={modalShow}
                              onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;
