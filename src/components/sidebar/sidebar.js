import React, {useEffect, useState} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
import { withStyles } from '@material-ui/core/styles';
import star from './images/star.svg';
import axios from "axios";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";


const Sidebar = (props) => {
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);
    const [user, setUser] = useState({});
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
                setUser(res.data);

            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="sidebar" >
          <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>

              <img src={profilePhoto} className={"sidebar__item-photo"} alt={"Profile"}/>
              <p className={"sidebar__item-greeting"}>Hello, <br/> {user.first_name}! </p>
              <div className={"sidebar__item-rating"} >
                  <Box>
                      <StyledRating name="read-only" value={user.avg_rating_last_ten} size="large" readOnly precision={0.5}/>
                  </Box>
              </div>
            <div className={"sidebar__weather"}></div>
        </div>
    );
}

export default Sidebar;