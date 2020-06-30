import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/post.css';
import profile from '../sidebar/images/profilephoto.svg';
const Post = () => {
    return (
        <div className={"post container"}>
           <div className={"row"}>
                <div className={"post__item col-3"}>
                    <div className={"post__user"}>
                        <img className={"post__small-photo"} src={profile} alt={"Profile photo"}/>
                        <p>Aelina</p>
                        <p>Provider</p>
                    </div>
                    <div className={"post__details"}>
                        <p>Package delivery</p>
                        <div className={"post__from"}></div>
                        {/*<img />*/}
                        <div className={"post__to"}></div>
                        <div className={"post__date"}></div>
                    </div>
                    <div className={"post__contacts"}>

                    </div>
                </div>

           </div>
        </div>
    );
};

export default Post;