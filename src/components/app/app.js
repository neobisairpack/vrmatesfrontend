import React from 'react';
import Main from '../dashboard';
import Profile from "../profile"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/app.css';
import Inbox from "../inbox";
import InProgress from "../in-progress";
import Completed from "../completed";
import InboxPage from "../inbox/inbox-page/inbox-page";
import UserProfile from "../user-profile";
import LandingPage from "../landing-page";

const App = () => {
    return (
        <Router>
            <div className={"app-wrapper"}>
                <div className={"app-wrapper__content"}>
                    <Switch>
                        <Route exact path={"/landingpage"}
                               render={() => <LandingPage
                               />} />
                        <Route exact path={"/"}
                               render={() => <Main
                               />} />
                        <Route exact path={"/profile"}
                               render={() => <Profile
                               />}/>
                        <Route exact path={"/profile/inbox"}
                               render={() => <Inbox
                               />}/>
                        <Route exact path={"/profile/in-progress"}
                               render={() => <InProgress
                               />}/>
                        <Route exact path={"/profile/completed"}
                               render={() => <Completed
                               />}/>
                        <Route exact path={"/profile/inbox-page"}
                               render={() => <InboxPage
                               />}/>
                        <Route exact path={'/profile/inbox-page/:userName'}
                               render={() => <UserProfile
                               />}/>
                    </Switch>
                </div>
                {/*<Footer/>*/}
            </div>
        </Router>
    );
};

export default App;