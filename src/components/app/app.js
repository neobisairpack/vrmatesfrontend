import React from 'react';
import Main from '../dashboard';
import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import './style/app.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {
    return (
            <div className={"app-wrapper"}>
                <Sidebar/>
                <Header/>
                <div className={"app-wrapper__content"}>
                    <Main/>
                </div>
                <Footer/>
            </div>

    );
};

export default App;