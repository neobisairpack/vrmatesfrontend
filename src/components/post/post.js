import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import profile from '../sidebar/images/profilephoto.svg';
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
                       <img src={profile} alt="Card image cap" />
                       <CardText className={"post__provider"}>Provider</CardText>
                       <CardTitle>Aelina</CardTitle>


                           <CardTitle>Package delivery</CardTitle>
                           <CardSubtitle>Bishkek Kyrgyzstan</CardSubtitle>
                           <CardSubtitle>Moscow Russia</CardSubtitle>
                           <CardSubtitle>10th July</CardSubtitle>
                           <CardText>Some quick example text to build on the card title</CardText>
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