import React from 'react';
import ScrollToTopControlller from '../../scroll-to-top/scroll-to-top';
import '../../profile/style/profile.css';
import Header from "../../header";
import Footer from "../../footer";
import './style/inbox-page.css';
import logo from "../../sidebar/images/logo.svg";
import '../../sidebar/style/sidebar.css';
const InboxPage = (props) => {
    return (
        <div className={"inbox-page"}>
            <ScrollToTopControlller/>
            <div className={"inbox-page__sidebar"}>
                <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>
            </div>
            <Header/>
            <div className={"inbox-page__content"}>
                jkj
            </div>
            <Footer/>
        </div>
    );
};

export default InboxPage;