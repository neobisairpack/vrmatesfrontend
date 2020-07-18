import React from 'react';
import ScrollToTopControlller from '../../scroll-to-top/scroll-to-top';
import '../../profile/style/profile.css';
import Header from "../../header";
import Footer from "../../footer";
import './style/inbox-page.css';
import logo from "../../sidebar/images/logo.svg";
import InboxPageSidebar from "./inbox-sidebar/inbox-sidebar";
const InboxPage = (props) => {
    return (
        <div className={"inbox-page"}>
            <ScrollToTopControlller/>
            <InboxPageSidebar/>
            <Header style={"inbox"}/>
            <div className={"inbox-page__content"}>
                jkj
            </div>
            <Footer/>
        </div>
    );
};

export default InboxPage;