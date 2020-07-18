import React from 'react';
import '../../../profile/style/profile.css';
import '../style/inbox-page.css';
import logo from "../../../sidebar/images/logo.svg";
import back from '../icons/back-icon.png';
import imgIcon from "../../../post/images/empty-img.svg";
import '../../../create-post/style/create-post.css';
const InboxPageSidebar = (props) => {
    return (
        <div className={"inbox-page__sidebar"}>
            <img className={"inbox-page__logo"} src={logo} alt={"Vrmates"}/>
            <div className={"inbox-page__title"}>
                <img src={back}/>
                <label>inbox post</label>
            </div>
            <div className={"inbox-page__post-head"}>
                <p>Package Delivery</p>
                <div>Provider</div>
                <div>
                    Package pick up location: <label>Bishkek, Kyrgyzstan</label>
                </div>
                <div>
                    Package drop of location: <label>Moscow, Russia</label>
                </div>
                <div>
                    Delivery date:  <label>10th July, 2020</label>
                </div>

            </div>
            <div className={"inbox-page__post-body"}>
                <label>Post body:</label>
                <label>Coming to Bishkek to participate at some conference.
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </label>
                <label>aelina01@ Gmail.COM</label>
                <p>Photo:</p>
                <div className={"inbox-page__photos"}>
                    <div className={"inbox-page__photo"}><img src={imgIcon} className={"full-post__icon"}/></div>
                    <div className={"inbox-page__photo"}><img src={imgIcon} className={"full-post__icon"}/></div>
                </div>
            </div>

            <div className={"inbox-page__post-buttons create-post__buttons"}>
                <button className={"create-post__cancel-button"}>Edit</button>
                <button className={"create-post__save-button"}>Cancel</button>
            </div>
        </div>
    );
};

export default InboxPageSidebar;