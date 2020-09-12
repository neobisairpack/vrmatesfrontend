import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Form, FormGroup, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import axios from 'axios';
import Notification from "../../notification/notification";


const ChangePassword = () => {
    const [email, setEmail] = useState(null)
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://167.172.178.135:8000/users/rest-auth/password/reset/', {
            email: email,
        })
            .then((res) => {
                setNotMessage("Please, check your email and follow the instructions!")
                setNotShow(true)
            })
            .catch((err) => {
                console.log("Reset password error " + err)
                setNotMessage("Oops, something went wrong")
                setNotShow(true)
            })
    }

    return (
        <div className="login-container">
            <div className={"reset-form"}>
                <Link to={"/login"} className={"login__exit-link"}><img className={"login__exit"} src={exit}
                                                                        alt={"exit"}/></Link>
                <div className={"reset-form__item"}>
                    <label className={"reset__title"}>Forgot password?</label>
                    <p className={"reset__text"}>
                        Please enter your new password twice so we can verify you typed it in correctly.
                    </p>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Input
                                className={"register__input"}
                                placeholder={"New password"}
                                type={"password"}
                                name={"password1"}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className={"register__input"}
                                placeholder={"Confirm password"}
                                type={"password"}
                                name={"password2"}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </FormGroup>
                        <button type={"submit"} className={"register__sign-up-btn"}>Change my password</button>
                    </Form>
                </div>
            </div>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </div>
    );
}

export default withRouter(ChangePassword);

