import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/interested.css';
import profile from '../../../sidebar/images/profilephoto.svg';


const InterestedUser = () => {
    return (
        <div className={"interested-user"}>
            <div className={"interested-user-card"}>
                <ul>
                    <li className={"interested__list-item"}><img className={"interested__photo"} src={profile}/></li>
                    <li className={"interested__list-item"}>
                        <div className={"interested__user-type"}>Provider</div>
                        <div className={"interested__user-name"}>Marsel'</div>
                    </li>
                </ul>
                <div className={"interested__service-type"}>Package delivery</div>
                <div className={"interested__buttons"}>
                    <button className={"interested__button interested__button_accept"}>Accept</button>
                    <button className={"interested__button interested__button_cancel"}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default InterestedUser;
