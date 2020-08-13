import React, {useEffect, useState} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
import star from './images/star.svg';
import axios from "axios";
import './style/sidebar.css';

const ProfileSidebar = () => {
    const [userData, setUserData] = useState({
        name: "",
        last_name: "",
        country: "",
        city: "",
        age: "",
        image: "",
        cancel_rate: "",
        rating: "",
        phone: "",
        about_me: "",
        points: "",
        email: ""
    });


    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () => {
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get('http://167.172.178.135/users/me/', {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(function (res) {
                setUserData({
                    ...userData,
                    name: res.data.first_name,
                    last_name: res.data.last_name,
                    country: res.data.country,
                    city: res.data.city,
                    age: res.data.age,
                    image: res.data.image,
                    phone: res.data.phone,
                    about_me: res.data.about_me,
                    points: res.data.points,
                    email: res.data.email
                })
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="profile-sidebar">
            <img src={logo} className={""} alt={"Vrmates"}/>
            <div className={"profile-sidebar__top"}>
                <img src={profilePhoto} className={"sidebar__item-photo"} alt={"Profile"}/>
                <div className={"profile-sidebar__user-info"}>
                    <p className={"profile-sidebar__name"}> {userData.name} <br/> {userData.last_name} </p>
                    <p className={"profile-sidebar__detail"}>{userData.city}, {userData.country}</p>
                    <p className={"profile-sidebar__detail"}>{userData.age} years</p>
                </div>
            </div>
            <div className={"profile-sidebar__status"}>
                <div className={"profile-sidebar__cancellation"}>Cancellation Rate: <label>5/100</label></div>
                <div className={"profile-sidebar__points"}>{userData.points} points</div>
            </div>
            <div className={"profile-sidebar__about"}>
                <div className={"profile-sidebar__about-me"}>About me</div>
                <div className={"profile-sidebar__detail-text"}>{userData.about_me}
                </div>
                <div className={"profile-sidebar__detail-text"}>{userData.phone}</div>
                <div className={"profile-sidebar__detail-text"}>{userData.email}</div>
            </div>
            <div className={"profile-sidebar__buttons"}>
                <button className={"profile-sidebar__update"}>Update</button>
            </div>
        </div>
    );
}

export default ProfileSidebar;