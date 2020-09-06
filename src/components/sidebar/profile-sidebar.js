import React, {useEffect, useState} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import './style/sidebar.css';
import UpdateInfo from "../update-info";
import {connect} from "react-redux";
import {getUserData} from "./sidebarActions";

const ProfileSidebar = (props) => {
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        props.getUserData()
    }, [])

    let {loading} = props.userData;
    let {user} = props.userData;
    const url = "http://167.172.178.135:8000";
    return (
        <div className="profile-sidebar">
            {loading ? "Loading" :
                <>
                    <img src={logo} className={""} alt={"Vrmates"}/>
                    <div className={"profile-sidebar__top"}>
                        <div className={"profile-sidebar__profile-photos"}>
                            {user.image ?
                                <img src={url + user.image} className={"profile-sidebar__item-photo"}  alt={"Profile"}/>
                                : <img src="https://img.icons8.com/material-sharp/96/000000/user.png" className={"profile-sidebar__item-icon"} alt={user.first_name}/>
                            }
                        </div>
                        <div className={"profile-sidebar__user-info"}>
                            <p className={"profile-sidebar__name"}> {user.first_name} <br/> {user.last_name} </p>
                            <p className={"profile-sidebar__detail"}>{user.city}, {user.country}</p>
                            <p className={"profile-sidebar__detail"}>{user.age} years</p>
                        </div>
                    </div>
                    <div className={"profile-sidebar__status"}>
                        <div className={"profile-sidebar__cancellation"}>Cancellation
                            Rate: <label>{user.canceled_posts}/{user.created_posts}</label></div>
                        <div className={"profile-sidebar__points"}>{user.points} points</div>
                    </div>
                    <div className={"profile-sidebar__about"}>
                        <div className={"profile-sidebar__about-me"}>About me</div>
                        <div className={"profile-sidebar__detail-text"}>{user.about_me}
                        </div>
                        <div className={"profile-sidebar__detail-text"}>{user.phone}</div>
                        <div className={"profile-sidebar__detail-text"}>{user.email}</div>
                    </div>
                    <div className={"profile-sidebar__buttons"}>
                        <button onClick={() => setModalShow(true)} className={"profile-sidebar__update"}>Update</button>
                    </div>
                    <UpdateInfo {...user} show={modalShow}
                                onHide={() => setModalShow(false)}/>
                </>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserData: () =>
            dispatch(getUserData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);