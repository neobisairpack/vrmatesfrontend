import React from 'react';
import Main from '../dashboard';
import Header from "../header";
import Footer from "../footer";
import Profile from "../profile"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/app.css';
import Sidebar from "../sidebar";
import Inbox from "../inbox";
import InProgress from "../in-progress";
import Completed from "../completed";

const App = () => {
    return (
        <Router>
            <div className={"app-wrapper"}>
                <Sidebar/>
                <Header/>
                <div className={"app-wrapper__content"}>
                    <Switch>
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
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;