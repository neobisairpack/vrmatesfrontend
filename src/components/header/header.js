import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/header.css';
import LogOutImg from './images/logout.svg';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import LogOut from "../pop-up/popup-logout";
import {connect} from "react-redux";


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [logoutMessage, setLogoutMessage] = useState("")

    const toggle = () => setIsOpen(!isOpen);
    useEffect(()=>{
        if(props.profilePost.choice !== "") {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
    }, )
    useEffect(() => {
        const path = props.location.pathname;
        switch (path) {
            case '/dashboard':
                setActiveLink(1);
                break;
            case '/dashboard/requesters':
                setActiveLink(1);
                break;
            case '/dashboard/providers':
                setActiveLink(1);
                break;
            case '/profile/inbox':
                setActiveLink(2);
                break;
            case '/profile/in-progress':
                setActiveLink(2);
                break;
            case '/profile/completed':
                setActiveLink(2);
                break;
            case '/profile':
                setActiveLink(2);
                break;
            default:
                setActiveLink(null);
        }
    }, [])

    const logoutHandler = () =>{
        setLogoutMessage("Are you sure you want to logout?");
        setModalShow(true)
    }
    return (
        <div className={(props.style ? "inbox-header" : "header")}>
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle}/>
                <Collapse className={"nav landing-nav"} isOpen={isOpen} navbar>
                    <Nav className={"mr-auto"}>
                        <NavItem>
                            <Link to="/dashboard"
                                  className={"nav__item" + (activeLink === 1 ? " nav__item_active" : "")}>Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile"
                                  className={"nav__item" + (activeLink === 2 ? " nav__item_active" : "")}>Profile</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText className={"nav__item_logout "}>
                        <button onClick={() => logoutHandler()} className={
                            "nav__logout-btn"
                        }><img src={LogOutImg}
                                                                        className={"nav__item-logout-icon"}
                                                                        alt={"logOut"}/>Log out
                        </button>
                    </NavbarText>
                </Collapse>
            </Navbar>
            <LogOut message={logoutMessage} show={modalShow}
                    onHide={() => setModalShow(false)}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profilePost: state.profilePost,
    }
}

export default connect(mapStateToProps)(withRouter(Header));

