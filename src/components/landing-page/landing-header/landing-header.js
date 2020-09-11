import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import logo from "../../sidebar/images/logo.svg";
import './style/header-landing.css';
import {Link as ScrollLink} from 'react-scroll';

const HeaderLanding = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className={"header-landing"}>
            <Navbar light expand="md">
                <NavbarBrand tag={'div'} className={"landing__nav-item nav__item"}  >
                    <Link to={"/"}>
                        <img src={logo} alt={"Vrmates"}/>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className={"nav"} isOpen={isOpen} navbar>
                    <Nav className={"mr-auto landing__navbar"} >
                        <NavItem>
                            <ScrollLink to="about-project"
                                        smooth={true}
                                        duration={1000}
                                        className={"landing__nav-item nav__item"}>
                                <button className={"landing__scroll-btn"}>About</button></ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink to="donation"
                                //spy={true}
                                        smooth={true}
                                        duration={1000}
                                        className={"landing__nav-item nav__item"}>
                                <button className={"landing__scroll-btn"}>Donation</button></ScrollLink>
                        </NavItem>
                        <NavItem>
                            <Link to={"/contact-us"} className={"landing__nav-item nav__item"}>Contact us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/login"}><button className={"landing__nav-item nav__item nav__login"}>Log in</button></Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default HeaderLanding;

