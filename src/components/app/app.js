import React, {useEffect, useState} from 'react';
import Profile from "../profile";
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch} from 'react-router-dom';
import './style/app.css';
import InProgress from "../in-progress";
import Completed from "../completed";
import InboxPage from "../inbox/inbox-page/inbox-page";
import UserProfile from "../user-profile";
import LandingPage from "../landing-page";
import RegistrationForm from "../landing-page/registrationForm";
import LoginForm from "../landing-page/landing-login";
import ContactUs from "../landing-page/contact-us/contact-us";
import ResetPassword from "../landing-page/landing-login/reset-password";
import MainRequesters from "../dashboard/main-requesters";
import MainProviders from "../dashboard/main-providers";
import PrivateRoute from "./private-router";

export const mainUrl = "http://167.172.178.135:8000/";
const App = () => {
    return (
        <React.Fragment>
            <div className={"app-wrapper"}>
                <div className={"app-wrapper__content"}>
                    <Switch>
                        <Route exact path={"/"}
                               render={() => <LandingPage/>}/>
                        <Route exact path={"/dashboard"}
                               render={() => <MainRequesters/>}/>
                        <Route exact path={"/dashboard/requesters"}
                               render={() => <MainRequesters/>}/>
                        <Route exact path={"/dashboard/providers"}
                               render={() => <MainProviders/>}/>
                        <Route exact path={"/profile"}
                               render={() => <Profile/>}/>
                        <Route exact path={"/profile/inbox"}
                               render={() => <Profile/>}/>
                        <Route exact path={"/profile/in-progress"}
                               render={() => <InProgress/>}/>
                        <Route exact path={"/profile/completed"}
                               render={() => <Completed/>}/>
                        <Route exact path={"/profile/inbox-page"}
                               render={() => <InboxPage/>}/>
                        <Route exact path={'/profile/inbox-page/:userName'}
                               render={() => <UserProfile/>}/>
                        <Route exact path={'/contact-us'}
                               render={() => <ContactUs/>}/>
                        <Route exact path={'/registration'}
                               render={() => <RegistrationForm/>}/>
                        <Route exact path={'/login'}
                               render={() => <LoginForm/>}/>
                        <Route exact path={'/reset-password'}
                               render={() => <ResetPassword/>}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;