import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Form, FormGroup, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import axios from 'axios';
import Notification from "../../notification/notification";


const ResetPassword = () => {
    const [email, setEmail] = useState(null)
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://vrmates.co/users/rest-auth/password/reset/', {
            email: email,
        })
            .then((res) => {
                alert("Please, check your email")
            })
            .catch((err) => {
                console.log("Reset password error " + err)
                setNotMessage("Please, check your email and follow the instructions!")
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
                        Enter your email and we will send you a link to reset your password
                    </p>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Input
                                className={"register__input"}
                                placeholder={"E-mail"}
                                type={"email"}
                                name={"email"}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </FormGroup>
                        <button type={"submit"} className={"register__sign-up-btn"}>Send link to email</button>
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

export default withRouter(ResetPassword);

