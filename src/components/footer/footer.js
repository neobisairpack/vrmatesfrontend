import React from 'react';
import {Link} from 'react-router-dom';
import './style/footer.css';

const Footer = () => {

    return (
        <div className="footer" >
            <Link to={"/support"}><p className={"footer__link"}>Support</p></Link>
            <Link to={"/terms"}><p className={"footer__link"}>Terms</p></Link>
        </div>
    );
}

export default Footer;

