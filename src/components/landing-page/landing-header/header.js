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

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null)

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (id) => {
        setActiveLink(id)
        console.log(id)
    }
    return (
        <div className={"header-landing"}>
            <Navbar light expand="md">
                <NavbarBrand tag={'div'} className={"nav__item"}  >
                    <Link to={"/"}>
                        <img src={logo} alt={"Vrmates"}/>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className={"nav "} isOpen={isOpen} navbar>
                    <Nav className={"mr-auto landing__navbar"} >
                        {/*<NavItem>*/}
                        {/*    <Link to="/" className={"landing__nav-logo"}>*/}
                        {/*        <img src={logo} alt={"Vrmates"}/></Link>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <Link to="/" className={"landing__nav-item nav__item"}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className={"landing__nav-item nav__item"}>Donation</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className={"landing__nav-item nav__item"}>Contact us</Link>
                        </NavItem>
                        <NavItem>
                            <button className={"landing__nav-item nav__item nav__login"}>Log in</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

