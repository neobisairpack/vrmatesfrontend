import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import profile from '../sidebar/images/profilephoto.svg';
import star from "../sidebar/images/star.svg";
import arrow from './images/arrow.svg';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardHeader,
    CardFooter,
    Button
} from 'reactstrap';

const Post = () => {
    return (
        <div className={"post container"}>
           <div className={"row"}>
               <div className={"col-4"}>
                   <Card>
                       <div className={"post__content"}>
                       <div className={"post__top"}>
                           <ul className={"post__top-list"}>
                               <li className={"post__top-list-item"}><img className={"post__avatar"} src={profile} alt="Card image cap" /></li>
                               <li className={"post__top-list-item"}>
                                   <div className={"post__user-name"}>Aelina</div>
                                   <div className={"post__item-rating"}>
                                       <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                       <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                       <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                       <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                       <img src={star} className={"post__item-rating-star"} alt={"Rating"}/>
                                   </div>
                               </li>
                               <li className={"post__top-list-item"}><CardText className={"post__provider"}>Provider</CardText></li>
                           </ul>
                       </div>

                           <p className={"post__type"}>Package delivery</p>
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
                           <CardSubtitle className={"post__deadline"}>10th July,2020</CardSubtitle>
                       </div>
                           <CardText className={"post__text"}>Some quick example text to build on the card title</CardText>
                           <CardText>aelina@gmail.com</CardText>
                           <Button>Interested</Button>

                   </Card>
               </div>

           </div>
        </div>
    );
};

export default Post;

// <div className={"post__item"}>
//     <div className={"post__user"}>
//         <img className={"post__small-photo"} src={profile} alt={"Profile photo"}/>
//         <p>Aelina</p>
//         <p>Provider</p>
//     </div>
//     <div className={"post__details"}>
//         <p>Package delivery</p>
//         <div className={"post__from"}></div>
//         {/*<img />*/}
//         <div className={"post__to"}></div>
//         <div className={"post__date"}></div>
//     </div>
//     <div className={"post__contacts"}>
//
//     </div>
// </div>