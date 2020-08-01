import React, {useEffect, useState} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
import star from './images/star.svg';
import axios from "axios";
import './style/sidebar.css';

const ProfileSidebar = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () => {
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get('http://167.172.178.135/users/', {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(function (res) {
                // setList(data);
                res.data.map((item) => {
                    if (item.email === "aidana.niiazova@gmail.com") {
                        setName(item.first_name);
                        setLastName(item.last_name)
                    }
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
                <p className={"profile-sidebar__name"}> {name} <br/> {lastName} </p>
                    <p className={"profile-sidebar__detail"}>New York, USA</p>
                    <p className={"profile-sidebar__detail"}>20 years</p>
                </div>
            </div>
            <div className={"profile-sidebar__status"}>
                <div className={"profile-sidebar__cancellation"}>Cancellation Rate: <label>5/100</label></div>
                <div className={"profile-sidebar__points"}>60 points</div>
            </div>
            <div className={"profile-sidebar__about"}>
                <div className={"profile-sidebar__about-me"}>About me</div>
                <div className={"profile-sidebar__detail-text"}>Hi, I’m Aelina.
                    My favorite hobby is travelling. I like all kinds of travel: by car, by train, by plane, and
                    travelling on foot. But I have never travel by the ship yet.
                </div>
                <div className={"profile-sidebar__detail-text"}>0550345678</div>
                <div className={"profile-sidebar__detail-text"}>aelina10@gmail.com</div>
            </div>
            <div className={"profile-sidebar__buttons"}>
                <button className={"profile-sidebar__update"}>Update</button>
            </div>
        </div>
    );
}

export default ProfileSidebar;