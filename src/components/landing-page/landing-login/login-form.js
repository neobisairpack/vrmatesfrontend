import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import loginImg from '../images/login-img.png';
import axios from 'axios';


const LoginForm = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    //console.log(email, password)

    const handleSubmit = () => {
        //e.preventDefault()
        console.log(email, password)
        axios.post('http://167.172.178.135/users/login/', {
            email: email,
            password: password
        })
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                //window.location.href='/dashboard';
                props.history.push({
                    pathname: '/dashboard',
                    state: {email: email}
                })
            })
            .catch((err) => {
                console.log("Logging in error " + err)
            })
    }

    return (
        <div className="login-container">
            <div className={"login-form"}>

                <div className={"login-form__item"}>
                    <label className={"login__title"}>Welcome to Vrmates</label>
                    <Form>
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Link to={"/reset-password"}>
                            <Label check className={"login__forgot-pswrd"}>
                                Forgot password?
                            </Label>
                        </Link>
                    </Form>
                    <button onClick={handleSubmit} type={"submit"} className={"register__sign-up-btn"}>Login</button>
                </div>
                <div>
                    <Link to={"/"} className={"login__exit-link"}><img className={"login__exit"} src={exit}
                                                                       alt={"exit"}/></Link>
                    <img className={"login-form__img"} src={loginImg} alt={"Login image"}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(LoginForm);

