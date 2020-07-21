import React from 'react';
import ScrollToTopControlller from '../../scroll-to-top/scroll-to-top';
import '../../profile/style/profile.css';
import Header from "../../header";
import Footer from "../../footer";
import './style/inbox-page.css';
import InboxPageSidebar from "./inbox-sidebar/inbox-sidebar";
import InterestedUser from "./interested-user";
const InboxPage = (props) => {
    return (
        <div className={"inbox-page"}>
            <ScrollToTopControlller/>
            <InboxPageSidebar/>
            <Header style={"inbox"}/>
            <div className={"inbox-page__content"}>
                <div className={"inbox-page__title"}>interested users</div>
                <InterestedUser/>
            </div>
            <Footer/>
        </div>
    );
};

export default InboxPage;