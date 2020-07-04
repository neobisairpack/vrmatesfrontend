import React, {useState} from 'react';
import './style/main.css';
import Post from '../post';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
//import Switch from '../pop-up';
import '../pop-up/style/popup.css';
const Main = () => {
    const [popUpState, setPopUpState] = useState(false);
    function togglePopUp(){
        setPopUpState(!popUpState);
    }
    return (
        <div className={"dashboard"}>
            <ScrollToTopControlller/>
            <div className={"dashboard__submenu"}>
                <p className={"dashboard__title"}>NEWS FEED</p>
                <ul className={"dashboard__list"}>
                    <li className={"dashboard__list-item dashboard__list-item_active"}>Providers</li>
                    <li className={"dashboard__list-item "}>Requesters</li>
                    <li className={"dashboard__list-item "}> <button onClick={togglePopUp} className={"dashboard__button"}>Create Post</button></li>
                </ul>

            </div>
            <div>
                {popUpState ? <div className={"switch"}>
                    <p className={"switch__title"}>Providers</p>
                    <ul>
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
                            <li><button onClick={togglePopUp} className={"switch__button"}>Cancel</button></li>
                            <li><button className={"switch__button"}>Ok</button></li>
                        </ul>
                    </div>
                </div> : null}
            </div>
                <Post/>
        </div>
    );
};

export default Main;