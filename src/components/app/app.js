import React from 'react';
import Main from '../dashboard';
import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/app.css';
import Profile from '../profile';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className={"app-wrapper"}>
                <Sidebar/>
                <Header/>
                <div className={"app-wrapper__content"}>
                    <Route exact path="/"
                           render={() => <Main
                           />} />
                    <Route exact path="/profile"
                           render={() => <Profile
                           />} />

                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;