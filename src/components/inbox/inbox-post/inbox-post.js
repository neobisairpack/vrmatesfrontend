import React from 'react';
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

const InboxPost = (props) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const redirect = () => {
        console.log(props)
        props.history.push({
            pathname: '/profile/inbox-page',
        })
    }
    return (
        <div className={"post container"}>
            <div className={"row"}>
                {array.map((item) =>
                    <div key={item} className={"col-4"}>
                        <Card onClick={() => redirect()} className={props.size}>
                            <div className={"post__content"}>
                                <div className={"post__top"}>
                                    <ul className={"post__top-list"}>
                                        <li className={"post__top-list-item"}>
                                            <p className={"post__type"}>Package delivery</p>
                                            <div className={"post__person"}>Provider</div>
                                        </li>
                                        <li className={"post__top-list-item inbox-post__item"}><img className={"icon-people"} src={people}/> + 3</li>
                                    </ul>
                                </div>


                                <div>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>Bishkek</CardText>
                                        <CardSubtitle className={"post__country"}>Kyrgyzstan</CardSubtitle>
                                    </div>
                                    <img className={"post__arrow"} src={arrow}/>
                                    <div className={"post__address"}>
                                        <CardText className={"post__city"}>Moscow</CardText>
                                        <CardSubtitle className={"post__country"}>Russia</CardSubtitle>
                                        <CardSubtitle className={"post__deadline"}>10th July,2020</CardSubtitle>
                                    </div>
                                </div>
                            </div>
                            <CardText className={"post__text"}>Coming to Bishkek to participate at some conference.
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </CardText>
                            <CardText className={"post__email"}>aelina@gmail.com</CardText>
                        </Card>
                    </div>
                )}
                <div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(InboxPost);
