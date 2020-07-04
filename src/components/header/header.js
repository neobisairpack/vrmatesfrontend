import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/header.css';
import LogOut from './images/logout.svg';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className={"header"}>
                <Navbar light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse className={"nav"} isOpen={isOpen} navbar>
                        <Nav className={"mr-auto"} >
                            <NavItem>
                                <NavLink href="/" className={"nav__item nav__item_active"}>Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile/" className={"nav__item"}>Profile</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className={"nav__item nav__item_logout"}><img src={LogOut} className={"nav__item-logout-icon"} alt={"logOut"}/>Log out</NavbarText>
                    </Collapse>
                </Navbar>
        </div>
    );
}

export default Header;

