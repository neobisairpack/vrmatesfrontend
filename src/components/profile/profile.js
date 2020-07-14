import React from 'react';
import Post from '../post';
import './style/profile.css';
import '../dashboard/style/main.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inbox from "../inbox";
import FullProfile from "./fullProfile";
import InProgress from "../in-progress";
import Completed from "../completed";
const Profile = (props) => {
    console.log(props)
    return (
        <div >
            <Router>
                <FullProfile {...props}/>
                        <Switch>
                            <Route exact path={`${props.match.url}`}
                                   render={() => <Inbox
                                   />} />
                            <Route path={`${props.match.url}/inbox`}
                                   render={() => <Inbox
                                   />} />
                            <Route path={`${props.match.url}/in-progress`}
                                   render={() => <InProgress
                                   />} />
                            <Route path={`${props.match.url}/completed`}
                                   render={() => <Completed
                                   />} />
                        </Switch>
            </Router>
        </div>
    );
};

export default Profile;