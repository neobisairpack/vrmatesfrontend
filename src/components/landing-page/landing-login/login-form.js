import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import loginImg from '../images/login-img.png';
import DatePicker from "react-datepicker";
import LandingPage from "../landing-page";

const LoginForm = () => {

    return (
        <div className="login-container">
            <div className={"login-form"}>

                <div className={"login-form__item"}>
                    <label className={"login__title"}>Welcome  to Vrmates</label>
                    <Form>
                        <FormGroup>
                            <Input
                                className={"register__input"}
                                placeholder={"E-mail"}
                                type={"email"}
                                name={"email"}
                                required/>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type={"password"}
                                name={"password"}
                                className={"register__input"}
                                placeholder={"Password"}
                            />
                        </FormGroup>
                    </Form>
                    <button className={"register__sign-up-btn"}>Login</button>
                </div>
                <div>
                    <Link to={"/landingpage"}><img className={"login__exit"} src={exit} alt={"exit"}/></Link>
                    <img className={"login-form__img"} src={loginImg} alt={"Login image"}/>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

