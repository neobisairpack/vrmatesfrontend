import React, {useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
// import HeaderLanding from "./landing-header/header";
import HeaderLanding from "./landing-header";
import './style/landing-page.css';
import about from './images/about-img.png';
import hw1 from './images/how-works1.png';
import hw2 from './images/how-works2.png';
import hw3 from './images/how-works3.png';
import hw4 from './images/how-works4.png';
import {Link} from "react-router-dom";
import TermsConditions from "../popup-terms";
import FAQ from "../faq-page/faq";


const LandingPage = () => {
    const [termsModalShow, setTermsModalShow] = useState(false);
    const [faqModalShow, setFaqModalShow] = useState(false);
    return (
        <div className={"landing"}>
            <ScrollToTopControlller/>
            <div className={"landing__main"}>
                <HeaderLanding/>
                <div className={"landing__slogan"}>Vrmates is the global platform where travelers and locals connect to
                    help each other!
                </div>
                <Link to={"/registration"}><button className={"landing__join-btn"}>Join us</button></Link>
            </div>
            <div className={"landing__about-project"}>
                <div id={"about-project"}>
                <ul className={"landing__about"}>
                    <li>
                        <div className={"landing__about-title"}>About us</div>
                        <div className={"landing__about-text"}>
                            Vrmates is a platform that makes traveling easier and funnier by connecting people around
                            the globe. In this platform you can find hosters, couriers and drivers or you can become one
                            of them. Vrmates allows you to earn points by providing services to other users of the
                            platform. Then, you can use those points to get similar services back. Our platform is free
                            to use and users are thoroughly checked before being approved for safety issues.
                        </div>
                    </li>
                    <li>
                        <div className={"landing__about-img"}>
                            <img src={about} alt={"about-project"}/>
                        </div>
                    </li>
                </ul>
                </div>
                <div className={"landing__how-works"}>
                    <div className={"landing__about-title"}>How it works</div>
                    <div className={"landing__how-works-list"}>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw1}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Hoster </p>
                                <p className={"landing__hw-text"}>Travel to any part of the world and stay with locals
                                    or accept guests to your
                                    place.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw2}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Driver</p>
                                <p className={"landing__hw-text"}>Get free rides from local drivers or give a ride if
                                    you have a car and spare
                                    time.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw3}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Courier</p>
                                <p className={"landing__hw-text"}>Ask travelers to bring your packages from any country
                                    or make deliveries for others
                                    if you are traveling.</p>
                            </div>
                        </div>
                        <div className={"landing__hw-item"}>
                            <div className={"landing__img-border"}>
                                <img src={hw4}/>
                            </div>
                            <div className={"landing__hw-description"}>
                                <p className={"landing__hw-title"}>Pointing System</p>
                                <p className={"landing__hw-text"}>Points are the currency of the platform. The cost of
                                    each service is 20 points. It
                                    means users can make 20 points each time by providing one of the three services
                                    above. </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id={"donation"}>
                    <div className={"landing__about-title landing__donation-title"}>Donation</div>
                    <div className={"landing__donation-background"}>
                        <div className={"landing__donation-text"}>
                        Vrmates is a platform that brings travelers and locals to one place. We made it absolutely free
                        to use to make it accessible for everyone. However, we have constant expenses for the
                        maintenance of the platform. That’s why your donations and support would be greatly helpful for
                        the further development of this project. Thank you!
                        </div>
                    </div>
                </div>
            </div>
            <div className={"landing__footer"}>
                <button onClick={() => setTermsModalShow(true)} className={"landing__footer-link"}>Terms&Conditions</button>
                <button onClick={() => setFaqModalShow(true)} className={"landing__footer-link"}>faq</button>
            </div>
            <div>
                <TermsConditions show={termsModalShow}
                                 onHide={() => setTermsModalShow(false)}/>
                <FAQ show={faqModalShow}
                                 onHide={() => setFaqModalShow(false)}/>
            </div>
        </div>
    );
};

export default LandingPage;