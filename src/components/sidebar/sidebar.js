import React, {useEffect} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import {withStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import {getUserData} from "./sidebarActions";


const Sidebar = (props) => {
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#8c8c8c',
        }
    })(Rating);
    useEffect(() => {
        props.getUserData();
        window.weatherWidget();
    }, [])

    let {loading} = props.userData;
    let {user} = props.userData;
    const url = "https://vrmates.co/backend";

    return (
        <div className="sidebar">
            {loading ? "Loading" :
                <>
                    <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>
                    <div className={"sidebar__profile-photos"}>
                        {user.image ?
                            <img src={url + user.image} className={"sidebar__item-photo"}  alt={"Profile"}/>
                            : <img src="https://img.icons8.com/material-sharp/96/000000/user.png" className={"sidebar__item-icon"} alt={user.first_name}/>
                        }
                    </div>
                    <p className={"sidebar__item-greeting"}>Hello, <br/> {user.first_name}! </p>
                    <div className={"sidebar__item-rating"}>
                        <button className={"sidebar__button"}>Sidebar</button>
                        <Box>
                            <StyledRating name="read-only" value={user.avg_rating_last_ten} size="large" readOnly
                                          precision={0.5}/>
                        </Box>
                    </div>
                    <div className={"sidebar__weather"}>
                        <div className={"profile-sidebar__status"}>
                            <div className={"profile-sidebar__cancellation"}>Cancellation
                                Rate: <label>{user.canceled_posts}/{user.created_posts}</label></div>
                            <div className={"profile-sidebar__points"}>{user.points} points</div>
                        </div>
                        <div className={"profile-sidebar__about"}>
                            <div className={"profile-sidebar__about-me"}>About me</div>
                            <div className={"profile-sidebar__text-about-me"}>{user.about_me}
                            </div>

                        </div>
                        {/*<a className="weatherwidget-io" href="https://forecast7.com/en/42d8774d57/bishkek/"*/}
                        {/*   data-label_1="BISHKEK" data-label_2="WEATHER" data-theme="original" data-basecolor="#202A49"/>*/}
                    </div>
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
            dispatch(getUserData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);