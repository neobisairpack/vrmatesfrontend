import React, {useState} from 'react';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Sidebar from "../sidebar";
import Reviews from "../reviews/reviews";
import './style/profile.css';
import '../dashboard/style/main.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from "../header";
import Main from "../dashboard";
import Footer from "../footer";
import Inbox from "../inbox";
import FullProfile from "./fullProfile";
const Profile = () => {
    return (
        <div >
            <Router>
                <FullProfile/>
                        <Switch>
                            <Route path={"profile/inbox"}
                                   render={() => <Post
                                   />} />
                            {/*<Route exact path={"/inprogress"}*/}
                            {/*       render={() => <Profile*/}
                            {/*       />}/>*/}
                            {/*<Route exact path={"/completed"}*/}
                            {/*       render={() => <Profile*/}
                            {/*       />}/>*/}
                        </Switch>
            </Router>
        </div>
    );
};

export default Profile;