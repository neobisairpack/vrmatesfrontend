import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Support from '../popup-support';
import './style/footer.css';
import TermsConditions from "../popup-terms";

const Footer = () => {
    const [supportState, setSupportState] = useState(false);
    const [termsState, setTermsState] = useState(false);
    function toggleSupport() {
        setSupportState(!supportState)
    }
    function toggleTerms() {
        setTermsState(!termsState)
    }
    return (
        <div className="footer" >
            <button onClick={toggleSupport} className={"footer__link"}>Support</button>
            <button onClick={toggleTerms} className={"footer__link"}>Terms</button>
            <div>
                {supportState ? <Support/> : null}
                {termsState ? <TermsConditions/> : null}
            </div>
        </div>
    );
}

export default Footer;

