import React from 'react';
import '../../profile/style/profile.css';
import './style/inbox-page.css';
import logo from "../../../sidebar/images/logo.svg";
const InboxPage = (props) => {
    return (
        <div className={"inbox-page__sidebar"}>
            <img src={logo} alt={"Vrmates"}/>
        </div>
    );
};

export default InboxPage;