import React, {useEffect, useState} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
import star from './images/star.svg';
import axios from "axios";

const Sidebar = (props) => {
    const [name, setName] = useState("");
    //const userName = props.location.state.email;
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = () =>{
        let token = JSON.parse(localStorage.getItem("token"));
        axios.get('http://167.172.178.135/users/me/', {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(function(res){
                // setList(data);
                   setName(res.data.first_name);

            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="sidebar" >
          <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>

              <img src={profilePhoto} className={"sidebar__item-photo"} alt={"Profile"}/>
              <p className={"sidebar__item-greeting"}>Hello, <br/> {name}! </p>
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