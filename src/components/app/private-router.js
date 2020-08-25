import React, {useEffect, useState} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
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
            props.location.state.isAuth ? <Component {...props}/> : <Redirect to={{
                pathname: '/'
            }}/>
        )}
        />
    )
}

export default withRouter(PrivateRoute)