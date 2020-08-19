import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/interested.css';
import {withRouter} from "react-router-dom";
import {getInterestedRequest, setCurrentUser} from "../../../post/postActions";
import {connect} from "react-redux";


const InterestedUser = (props) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    //console.log(props)
    useEffect(() => {
        props.getInterestedRequest(props.location.state.post.id)
    }, [])
    const setUserFunc = (user) => {
        props.setUser(user)
        redirect(user.first_name)
    }
    const redirect = (name) =>{
        console.log(props, new Date().toLocaleString())
        props.history.push({
            pathname: `/profile/inbox-page/${name}`,
        })
    }
    console.log(props, new Date().toLocaleString())
    const {interested} = props.post;
    const urlImg = 'http://167.172.178.135'
    return (
        <div className={"interested-user container"}>
            <div className={"row"}>
                {interested.map((item) =>
                    <div key={item.id} className={"col-4"}>
                        <div className={"interested-user-card "}>
                            <ul className={"interested-user__info"} onClick={() => setUserFunc(item.requester)}>
                                <li className={"interested__list-item"}>
                                    {item.requester.image ?
                                    <img src={urlImg + item.requester.image} className={"interested__photo"}
                                         alt={"User"}/> :
                                    <img className={"interested__photo_empty"}  src={"https://img.icons8.com/material-sharp/96/000000/user.png"}/>}
                                </li>
                                <li className={"interested__list-item"}>
                                    <div className={"interested__user-type"}>Provider</div>
                                    <div className={"interested__user-name"}>{item.requester.first_name || ""}</div>
                                </li>
                            </ul>
                            <div className={"interested__service-type"}>{item.service.service_type}</div>
                            <div className={"interested__buttons"}>
                                <button className={"interested__button interested__button_accept"}>Accept</button>
                                <button className={"interested__button interested__button_cancel"}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        post: state.post,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getInterestedRequest: (id) =>
            dispatch(getInterestedRequest(id)),
        setUser: (user) =>
            dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InterestedUser));
