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

    }, [])

    let {loading} = props.userData;
    let {user} = props.userData;
    const url = 'https://vrmates.co';
    console.log(user.image)
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
                        <Box>
                            <StyledRating name="read-only" value={user.avg_rating_last_ten} size="large" readOnly
                                          precision={0.5}/>
                        </Box>
                    </div>
                    <div className={"sidebar__weather"}></div>
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
            dispatch(getUserData()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);