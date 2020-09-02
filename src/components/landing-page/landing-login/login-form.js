import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import loginImg from '../images/login-img.png';
import axios from 'axios';
import Notification from "../../notification/notification";


const LoginForm = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault(e)
        axios.post('https://vrmates.co/users/login/', {
            email: email,
            password: password
        })
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                props.history.push({
                    pathname: '/dashboard',
                    state: {email: email}
                })
            })
            .catch((err) => {
                console.log("Logging in error " + err)
                setNotMessage("Email or password are incorrect. Please, check and try again.")
                setNotShow(true)
            })
    }

    return (
        <div className="login-container">
            <div className={"login-form"}>

                <div className={"login-form__item"}>
                    <label className={"login__title"}>Welcome to Vrmates</label>
                    <Form onSubmit={(e) => handleSubmit(e)} className={"login__form"}>
                        <div>
                            <FormGroup>
                                <Input
                                    className={"register__input"}
                                    placeholder={"E-mail"}
                                    type={"email"}
                                    name={"email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type={"password"}
                                    name={"password"}
                                    className={"register__input"}
                                    placeholder={"Password"}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <Link to={"/reset-password"}>
                                <Label check className={"login__forgot-pswrd"}>
                                    Forgot password?
                                </Label>
                            </Link>
                        </div>
                        <button type={"submit"} className={"register__sign-up-btn"}>Login</button>
                    </Form>
                </div>
                <div>
                    <Link to={"/"} className={"login__exit-link"}><img className={"login__exit"} src={exit}
                                                                       alt={"exit"}/></Link>
                    <img className={"login-form__img"} src={loginImg} alt={"Login image"}/>
                </div>
            </div>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </div>
    );
}

export default withRouter(LoginForm);

