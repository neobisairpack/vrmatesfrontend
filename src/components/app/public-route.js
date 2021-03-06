import React, {useEffect, useState} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';

const PublicRoute = ({component: Component, isAuthed, ...rest}, props) => {
    const [token, setToken] = useState("");

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("token"));
        if(data) {
            setToken(data);
        }else {
            setToken('');
        }
    }, []);
    return (
        <Route
            {...rest} render={(props) => (
            !isAuthed ? <Component {...props}/> : <Redirect to={{
                pathname: '/dashboard'
            }}/>
        )}
        />
    )
}


export default withRouter(PublicRoute);