import React from 'react';
import {Link} from 'react-router-dom';
import exit from '../../post/images/exit.svg';
import './style/contact-us.css';

const ContactUs = () => {

    return (
        <div className="contact-container">
            <div className={"contact-form"}>
                <div>
                    <Link to={"/"}><img className={"login__exit"} src={exit} alt={"exit"}/></Link>
                </div>
                <div className={"contact__content"}>
                    <div className={"contact__text"}>Contact us with any questions or concerns you may have.
                        We will do our best to respond you as soon as possible.</div>
                    <div className={"contact__email-us"}>E-mail us</div>
                    <div className={"contact__email"}>vrmates@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

