import React from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
import star from './images/star.svg';

const Sidebar = () => {

    return (
        <div className="sidebar" >
          <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>

              <img src={profilePhoto} className={"sidebar__item-photo"} alt={"Profile"}/>
              <p className={"sidebar__item-greeting"}>Hello, <br/> Aelina! </p>
              <div className={"sidebar__item-rating"}>
                  <img src={star} className={"sidebar__item-rating-star"} alt={"Rating"}/>
                  <img src={star} className={"sidebar__item-rating-star"} alt={"Rating"}/>
                  <img src={star} className={"sidebar__item-rating-star"} alt={"Rating"}/>
                  <img src={star} className={"sidebar__item-rating-star"} alt={"Rating"}/>
                  <img src={star} className={"sidebar__item-rating-star"} alt={"Rating"}/>
                </div>
            <div className={"sidebar__weather"}></div>
        </div>
    );
}

export default Sidebar;