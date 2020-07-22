import React, {useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Header from "./landing-header/header";
import './style/landing-page.css';

const LandingPage = () => {
    return (
        <div className={"landing"}>
            <ScrollToTopControlller/>
            <div className={"landing__main"}>
                <Header/>
                <div className={"landing__slogan"}>Vrmates is the global platform where travelers and locals connect to help each other!</div>
                <button className={"landing__join-btn"}>Join us</button>
            </div>
            <div className={"landing__about-project"}>

            </div>
        </div>
    );
};

export default LandingPage;