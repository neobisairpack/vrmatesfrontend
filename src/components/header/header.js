import React, { useState } from 'react';
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

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null)

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (id) => {
        setActiveLink(id)
        console.log(id)
    }
    return (
        <div className={(props.style ? "inbox-header" : "header")}>
                <Navbar light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse className={"nav landing-nav"} isOpen={isOpen} navbar>
                        <Nav className={"mr-auto"} >
                            <NavItem>
                                <Link to="/" onClick={() => {
                                    handleClick(1)
                                }} className={"nav__item" + (activeLink === 1 ? " nav__item_active" : "")}>Dashboard</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/profile" onClick={() => {
                                    handleClick(2)
                                }} className={"nav__item" + (activeLink === 2 ? " nav__item_active" : "")}>Profile</Link>
                            </NavItem>
                        </Nav>
                        <NavbarText className={"nav__item nav__item_logout "}><Link to={"/landingpage"}><img src={LogOut} className={"nav__item-logout-icon"} alt={"logOut"}/>Log out</Link></NavbarText>
                    </Collapse>
                </Navbar>
        </div>
    );
}

export default Header;

