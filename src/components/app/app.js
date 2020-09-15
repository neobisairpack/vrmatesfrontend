import React from 'react';
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
import {connect} from "react-redux";
import PublicRoute from "./public-route";
import ConfirmPage from "../confirm-pages/confirm-page";
import ChangePassword from "../landing-page/landing-login/change-password";

const App = (props) => {
    let token = localStorage.getItem("token");
    let isAuthed = props.userData.isAuthed;
    if(token || props.userData.isAuthed){
        isAuthed = true;
    }
    else{
        isAuthed = false
    }
    return (
        <React.Fragment>
            <div className={"app-wrapper"}>
                <div className={"app-wrapper__content"}>
                    <Switch>
                        <PublicRoute exact path={"/"}
                                     isAuthed={isAuthed}
                                     component={LandingPage}/>
                        <PrivateRoute exact path={"/dashboard"}
                                      isAuthed={isAuthed}
                                      component={MainRequesters}/>
                        <PrivateRoute exact path={"/dashboard/requesters"}
                                      isAuthed={isAuthed}
                                      component={MainRequesters}/>
                        <PrivateRoute exact path={"/dashboard/providers"}
                                      isAuthed={isAuthed}
                                      component={MainProviders}/>
                        <PrivateRoute exact path={"/profile"}
                                      isAuthed={isAuthed}
                                      component={Profile}/>
                        <PrivateRoute exact path={"/profile/inbox"}
                                      isAuthed={isAuthed}
                                      component={Profile}/>
                        <PrivateRoute exact path={"/profile/in-progress"}
                                      isAuthed={isAuthed}
                                      component={InProgress}/>
                        <PrivateRoute exact path={"/profile/completed"}
                                      isAuthed={isAuthed}
                                      component={Completed}/>
                        <PrivateRoute exact path={"/profile/inbox-page"}
                                      isAuthed={isAuthed}
                                      component={InboxPage}/>
                        <PrivateRoute exact path={"/profile/inbox-page/:userName"}
                                      isAuthed={isAuthed}
                                      component={UserProfile}/>
                        <PublicRoute exact path={'/contact-us'}
                                     isAuthed={isAuthed}
                                     component={ContactUs}/>
                        <PublicRoute exact path={'/registration'}
                                     isAuthed={isAuthed}
                                     component={RegistrationForm}/>
                        <PublicRoute exact path={'/login'}
                                     isAuthed={isAuthed}
                                     component={LoginForm}/>
                        <PublicRoute exact path={'/reset-password'}
                                     isAuthed={isAuthed}
                                     component={ResetPassword}/>
                        <PublicRoute exact path={'/confirm'}
                                     isAuthed={isAuthed}
                                     component={ConfirmPage}/>
                        <PublicRoute path={'/change-password'}
                                     isAuthed={isAuthed}
                                     component={ChangePassword}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(App);