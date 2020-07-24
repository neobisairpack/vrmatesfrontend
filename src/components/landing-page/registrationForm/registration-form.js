import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import './style/register.css';
import exit from '../../post/images/exit.svg';
import DatePicker from "react-datepicker";
import LandingPage from "../landing-page";

const RegistrationForm = () => {

    return (
        <div className="register-container">
            <div className={"register-form"}>
                <div>
                    <label className={"register__title"}>Registration</label>
                    <img className={"register__exit"} src={exit} alt={"exit"}/>
                </div>
                <Form className={"register__inputs"}>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"First Name"}
                            type={"name"}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Phone Number"}
                            type={"tel"}
                            name={"phone"}
                            required/>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Last Name"}
                            type={"name"}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Address"}
                            type={"address"}
                            required/>
                    </FormGroup>

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
                            className={"register__input"}
                            placeholder={"Zip Code"}
                            type="number"
                            required/>
                    </FormGroup>

                    <DatePicker
                        dateFormat="yy-MM-dd"
                        className={"register__input"}
                        placeholderText={"   Date Of Birth"}
                    />

                    <FormGroup>
                        <Input type="select" className={"register__input"}>
                            <option>Country</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"}>
                            <option>Gender</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"}>
                            <option value={""}>City</option>
                            <option value={"Bishkek"}>Bishkek</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={"password"}
                            name={"password"}
                            className={"register__input"}
                            placeholder={"Password"}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"}>
                            <option value={""}>State</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={"password"}
                            name={"password"}
                            className={"register__input"}
                            placeholder={"Repeat Password"}
                        />
                    </FormGroup>

                    <FormGroup className={"register__checkbox"} check>
                        <Label check className={"register__checkbox-lbl"}>
                            <Input type={"checkbox"}/>
                            I agree to terms conditions
                        </Label>
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button className={"register__sign-up-btn"}>Sign Up</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationForm;

