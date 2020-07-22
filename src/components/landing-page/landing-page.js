import React, {useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Header from "./landing-header/header";
import './style/landing-page.css';
import about from './images/about-img.png';
import hw1 from './images/how-works1.png';
import hw2 from './images/how-works2.png';
import hw3 from './images/how-works3.png';
import hw4 from './images/how-works4.png';

const LandingPage = () => {
    return (
        <div className={"landing"}>
            <ScrollToTopControlller/>
            <div className={"landing__main"}>
                <Header/>
                <div className={"landing__slogan"}>Vrmates is the global platform where travelers and locals connect to
                    help each other!
                </div>
                <button className={"landing__join-btn"}>Join us</button>
            </div>
            <div className={"landing__about-project"}>
                <ul className={"landing__about"}>
                    <li>
                        <div className={"landing__about-title"}>About us</div>
                        <div className={"landing__about-text"}>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable. If you are going
                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the first true generator on the Internet. It
                            uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                            structures,
                        </div>
                    </li>
                    <li>
                        <div className={"landing__about-img"}>
                            <img src={about}/>
                        </div>
                    </li>
                </ul>
                <div className={"landing__how-works"}>
                    <div className={"landing__about-title"}>How it works</div>
                    <div className={"landing__how-works-list"}>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw1}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Hoster </p>
                                <p className={"landing__hw-text"}>Travel to any part of the world and stay with locals or accept guests to your
                                    place.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw2}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Driver</p>
                                <p className={"landing__hw-text"}>Get free rides from local drivers or give a ride if you have a car and spare
                                    time.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw3}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Courier</p>
                                <p className={"landing__hw-text"}>Ask travelers to bring your packages from any country or make deliveries for others
                                    if you are traveling.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw4}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Pointing System</p>
                                <p className={"landing__hw-text"}>Points are the currency of the platform. The cost of each service is 20 points. It
                                    means users can make 20 points each time by providing one of the three services
                                    above. </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default LandingPage;