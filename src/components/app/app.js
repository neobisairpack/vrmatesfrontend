import React, {useEffect, useState} from 'react';
import Main from '../dashboard';
import Profile from "../profile";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import './style/app.css';
import Inbox from "../inbox";
import InProgress from "../in-progress";
import Completed from "../completed";
import InboxPage from "../inbox/inbox-page/inbox-page";
import UserProfile from "../user-profile";
import LandingPage from "../landing-page";
import RegistrationForm from "../landing-page/registrationForm";
import LoginForm from "../landing-page/landing-login";
import ContactUs from "../landing-page/contact-us/contact-us";

const App = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("token"));
        if (data) {
            setToken(data);
        } else {
            setToken('');
        }
    }, []);
    return (
        <Router>
            <div className={"app-wrapper"}>
                <div className={"app-wrapper__content"}>
                    <Switch>
                        <Route exact path={"/"}
                               render={() => !token ? <LandingPage/> : <Main/>}/>
                        <Route exact path={"/dashboard"}
                               render={() => <Main/>}/>
                        <Route exact path={"/profile"}
                               render={() => token ? <Profile/> : <Redirect to={"/"}/>}/>
                        <Route exact path={"/profile/inbox"}
                               render={() => token ? <Inbox/> : <Redirect to={"/"}/>}/>
                        <Route exact path={"/profile/in-progress"}
                               render={() => token ? <InProgress/> : <Redirect to={"/"}/>}/>
                        <Route exact path={"/profile/completed"}
                               render={() => token ? <Completed/> : <Redirect to={"/"}/>}/>
                        <Route exact path={"/profile/inbox-page"}
                               render={() => token ? <InboxPage/> : <Redirect to={"/"}/>}/>
                        <Route exact path={'/profile/inbox-page/:userName'}
                               render={() => token ? <UserProfile/> : <Redirect to={"/"}/>}/>
                        <Route exact path={'/contact-us'}
                               render={() => !token ? <ContactUs/> : <Main/>}/>
                        <Route exact path={'/registration'}
                               render={() => !token ? <RegistrationForm/> : <Main/>}/>
                        <Route exact path={'/login'}
                               render={() => !token ? <LoginForm/> : <Main/>}/>
                    </Switch>

                </div>
            </div>
        </Router>

    );
};

export default App;