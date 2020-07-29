import React, { useState, useEffect } from 'react';
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
import LogOut from './images/logout.svg';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null)

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (id) => {
        setActiveLink(id)
        console.log(props)
    }
    useEffect(() => {
        const path = props.location.pathname;
        switch (path) {
            case '/dashboard': setActiveLink(1); break;
            case '/profile': setActiveLink(2); break;
            default: setActiveLink(null);
        }
    }, [])
    return (
        <div className={(props.style ? "inbox-header" : "header")}>
                <Navbar light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse className={"nav landing-nav"} isOpen={isOpen} navbar>
                        <Nav className={"mr-auto"} >
                            <NavItem>
                                <Link to="/dashboard" className={"nav__item" + (activeLink === 1 ? " nav__item_active" : "")}>Dashboard</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/profile" onClick={() => {
                                    handleClick(2)
                                }} className={"nav__item" + (activeLink === 2 ? " nav__item_active" : "")}>Profile</Link>
                            </NavItem>
                        </Nav>
                        <NavbarText className={" nav__item_logout "}><Link to={"/"}><img src={LogOut} className={"nav__item-logout-icon"} alt={"logOut"}/>Log out</Link></NavbarText>
                    </Collapse>
                </Navbar>
        </div>
    );
}

export default withRouter(Header);

