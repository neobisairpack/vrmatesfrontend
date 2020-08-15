import React, {useEffect} from 'react';
import './style/sidebar.css';
import logo from './images/logo.svg';
import profilePhoto from './images/profilephoto.svg';
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
    return (
        <div className="sidebar">
            {loading ? "Loading" :
                <>
                    <img src={logo} className={"sidebar__item-logo"} alt={"Vrmates"}/>

                    <img src={profilePhoto} className={"sidebar__item-photo"} alt={"Profile"}/>
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
        getUserData: post =>
            dispatch(getUserData(post)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);