import React, {useState} from 'react';
import Support from '../popup-support';
import './style/footer.css';
import TermsConditions from "../popup-terms";
import FAQ from "../faq-page/faq";

const Footer = () => {
    const [modalShow, setModalShow] = useState(false);
    const [termsModalShow, setTermsModalShow] = useState(false);
    const [faqModalShow, setFaqModalShow] = useState(false);


    return (
            <div className="footer" >
                <button onClick={() => setModalShow(true)} className={"footer__link"}>Support</button>
                <button onClick={() => setTermsModalShow(true)} className={"footer__link"}>Terms</button>
                <button onClick={() => setFaqModalShow(true)} className={"footer__link footer__faq"}>FAQ</button>
                <div>
                    <Support show={modalShow}
                             onHide={() => setModalShow(false)}/>
                    <TermsConditions show={termsModalShow}
                                     onHide={() => setTermsModalShow(false)}/>
                    <FAQ show={faqModalShow}
                         onHide={() => setFaqModalShow(false)}/>
                </div>
            </div>
    );
}

export default Footer;

