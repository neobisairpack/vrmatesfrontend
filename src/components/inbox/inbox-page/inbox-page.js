import React from 'react';
import ScrollToTopControlller from '../../scroll-to-top/scroll-to-top';
import '../../profile/style/profile.css';
import Header from "../../header";
import Footer from "../../footer";
import './style/inbox-page.css';
import logo from "../../sidebar/images/logo.svg";
const InboxPage = (props) => {
    return (
        <div className={"inbox-page"}>
            <ScrollToTopControlller/>
            <div className={"inbox-page__sidebar"}>
                <img src={logo} alt={"Vrmates"}/>
            </div>
            <Header style={"inbox"}/>
            <div className={"inbox-page__content"}>
                jkj
            </div>
            <Footer/>
        </div>
    );
};

export default InboxPage;