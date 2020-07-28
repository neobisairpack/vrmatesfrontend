import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import profile from '../sidebar/images/profilephoto.svg';
import star from "../sidebar/images/star.svg";
import arrow from './images/arrow.svg';
import axios from 'axios';
import FullPost from './full-view';
import {
    Card,
    CardText,
    CardSubtitle,
} from 'reactstrap';

const Post = (props) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [postState, setPostState] = useState(false);
    const [dataAll, setData] = useState([]);
    const [first_name, setFirst_name] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get('https://cors-anywhere.herokuapp.com/http://167.172.178.135/api/service/', {
            headers:{
                "Authorization" : "Token "+ token }
        })
            .then(res=> {setData(res.data)
                setLoading(true)
        })
            .catch((err) => console.log(err))
    }, [])
    function postView() {
        setPostState(!postState)
    }
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {array.map((item) =>
                    <div key={item} className={"col-4"}>
                        <Card className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}><img className={"post__avatar"} src={profile}
                                                                                   alt="Card image cap"/></li>
                                        <li className={"post__top-list-item"}>
                                            <div className={"post__user-name"}>{loading ? dataAll[0].requester.first_name : "Aelina"}</div>
                                            <div className={"post__item-rating"}>
                                                <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                                <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                                <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                                <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                                <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                            </div>
                                        </li>
                                        <li className={"post__top-list-item"}><CardText
                                            className={"post__package-provider"}>Provider</CardText></li>
                                    </ul>
                                </div>

                                <label className={"post__type"}>Package delivery</label>
                                <div>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>Bishkek</CardText>
                                        <CardSubtitle className={"post__country"}>Kyrgyzstan</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>Moscow</CardText>
                                        <CardSubtitle className={"post__country"}>Russia</CardSubtitle>
                                    </div>
                                </div>
                                <div className={"post__deadline"}>10th July,2020</div>
                            </div>
                            <CardText className={"post__text"}>Coming to Bishkek to participate at some conference.
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                            <CardText className={"post__email"}>aelina@gmail.com</CardText>
                            {props.btn ?
                                <button onClick={postView} className={"post__interested-btn"}>Interested</button> :
                                null
                            }
                        </Card>
                    </div>
                )}
                <div>
                    {postState ? <FullPost/> : null}
                </div>
            </div>
        </div>
    );
};

export default Post;
