import React, {useState} from 'react';
import Support from '../popup-support';
import './style/footer.css';
import TermsConditions from "../popup-terms";

const Footer = () => {
    const [modalShow, setModalShow] = useState(false)
    const [termsModalShow, setTermsModalShow] = useState(false)

    return (
            <div className="footer" >
                <button onClick={() => setModalShow(true)} className={"footer__link"}>Support</button>
                <button onClick={() => setTermsModalShow(true)} className={"footer__link"}>Terms</button>
                <div>
                    <Support show={modalShow}
                             onHide={() => setModalShow(false)}/>
                    <TermsConditions show={termsModalShow}
                                     onHide={() => setTermsModalShow(false)}/>
                </div>
            </div>
    );
}

export default Footer;

