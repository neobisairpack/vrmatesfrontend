import React from 'react';
import './style/terms-conditions.css';
import {Modal} from 'react-bootstrap';
import exit from "../post/images/exit.svg";

const TermsConditions = (props) => {
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               dialogClassName={"terms-conditions"}
               {...props}>
            <div onClick={props.onHide} className={"full-post__exit"}>
                <img src={exit}/>
            </div>
            <div className={"terms__title"}>Terms & Conditions</div>
            <div className={"terms__text"}>
                Our Terms and Conditions template will get you started with creating your own custom Terms and Conditions agreement.
                This template is free to download and use for your website or mobile app
                A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.
                <p>1. What are Terms and Conditions</p>
                <p>1.1. What to include in a Terms and Conditions</p>
                <p>1.2. Is a Terms and Conditions required?</p>

                1.3.
                How to enforce Terms and Conditions
                2.
                Examples of Terms and Conditions
                3.
                Download Terms and Conditions Template

                What are Terms and Conditions
                Terms and Conditions agreements act as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.

                Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).

                It's up to you to set the rules and guidelines that the user must agree to. You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, where you maintain your legal rights against potential app abusers, and so on.

                Terms and Conditions are also known as Terms of Service or Terms of Use.

                Check out our Terms and Conditions FAQ for more helpful insight into these important agreements.

                Our Terms and Conditions template will get you started with creating your own custom Terms and Conditions agreement.
                This template is free to download and use for your website or mobile app
                A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior and other useful sections to which users must agree in order to use or access your website and mobile app.
                <p>1. What are Terms and Conditions</p>
                <p>1.1. What to include in a Terms and Conditions</p>
                <p>1.2. Is a Terms and Conditions required?</p>

                1.3.
                How to enforce Terms and Conditions
                2.
                Examples of Terms and Conditions
                3.
                Download Terms and Conditions Template

                What are Terms and Conditions
                Terms and Conditions agreements act as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.

                Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).

                It's up to you to set the rules and guidelines that the user must agree to. You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, where you maintain your legal rights against potential app abusers, and so on.

                Terms and Conditions are also known as Terms of Service or Terms of Use.

                Check out our Terms and Conditions FAQ for more helpful insight into these important agreements.
            </div>
        </Modal>
    );
}

export default TermsConditions;

