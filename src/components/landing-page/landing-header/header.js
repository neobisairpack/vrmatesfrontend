import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
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
        <div className={"header"}>
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse className={"nav"} isOpen={isOpen} navbar>
                    <Nav className={"mr-auto"} >
                        <NavItem>
                            <Link to="/" className={"nav__item"}>
                                <img src={logo} alt={"Vrmates"}/></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" className={"nav__item"}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className={"nav__item"}>Donation</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className={"nav__item"}>Contact us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className={"nav__item"}>Log in</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;

