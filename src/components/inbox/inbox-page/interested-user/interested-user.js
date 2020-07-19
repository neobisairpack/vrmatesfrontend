import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/interested.css';
import profile from '../../../sidebar/images/profilephoto.svg';


const InterestedUser = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className={"interested-user container"}>
            <div className={"row"}>
                {array.map((item) =>
                    <div key={item} className={"col-4"}>
                        <div className={"interested-user-card "}>
                            <ul>
                                <li className={"interested__list-item"}><img className={"interested__photo"}
                                                                             src={profile}/></li>
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
                )}
            </div>

        </div>
    );
};

export default InterestedUser;
