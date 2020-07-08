import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Support from '../popup-support';
import './style/footer.css';

const Footer = () => {
    const [supportState, setSupportState] = useState(false);
    function toggleSupport() {
        setSupportState(!supportState)
    }
    return (
            <div className="footer" >
                <button onClick={toggleSupport} className={"footer__link"}>Support</button>
                <Link to={"/terms"}><p className={"footer__link"}>Terms</p></Link>
                <div>
                    {supportState ? <Support/> : null}
                </div>
            </div>
    );
}

export default Footer;

