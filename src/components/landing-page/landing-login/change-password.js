import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Form, FormGroup, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import axios from 'axios';
import Notification from "../../notification/notification";


const ChangePassword = () => {
    const [password, setPassword] = useState(null);
    const [notShow, setNotShow] = useState(false);
    const [notMessage, setNotMessage] = useState("");

    const handleSubmit = (e) => {
        let token = localStorage.getItem("token")
        e.preventDefault()
        axios.post('http://167.172.178.135:8000/users/password-reset/confirm/?token=b79e2222a5da4e1270b466399', {
            password: password,
            token: token
        })
            .then((res) => {
                setNotMessage("Your password is changed!")
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
                    <label className={"reset__title"}>Change password</label>
                    <p className={"reset__text"}>
                        Please enter your new password twice so we can verify you typed it in correctly.
                    </p>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Input
                                className={"register__input"}
                                placeholder={"New password"}
                                type={"password"}
                                name={"password"}
                                onChange={(e) => setPassword(e.target.value)}
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

