import React from 'react';
import './style/popup.css';
const Switch = () => {
    return (
        <div className={"switch"}>
            <label className={"switch__title"}>Providers</label>
            <ul className={"switch__list"}>
                <li>
                    <input type={"radio"} name={"radio"} />
                    <label>Package Delivery</label>
                </li>
                <li>
                    <input type={"radio"} name={"radio"}/>
                    <label>Airport pick up/drop off</label>
                </li>
                <li>
                    <input type={"radio"} name={"radio"}/>
                    <label>Hosting</label>
                </li>
            </ul>
            <div className={"switch__buttons"}>
                <ul>
                    <li><button className={"switch__button"}>Cancel</button></li>
                    <li><button className={"switch__button"}>Ok</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Switch;