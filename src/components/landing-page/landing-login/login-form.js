import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import loginImg from '../images/login-img.png';
import axios from 'axios';


const LoginForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    //console.log(email, password)
    const handleSubmit = () => {
        //e.preventDefault()
        console.log(email, password)
        axios.post('https://cors-anywhere.herokuapp.com/http://167.172.178.135/users/login/', {
            email: email,
            password: password
        })
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.token));
                console.log(res.data.token)
                window.location.href='/dashboard'
                // dispatch(loginUser(res.data.email))
            })
            .catch((err) => {
                console.log("Logging in error " + err)
            })
    }

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
                                onChange={(e)=>setEmail(e.target.value) }
                                required/>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type={"password"}
                                name={"password"}
                                className={"register__input"}
                                placeholder={"Password"}
                                onChange={(e)=>setPassword(e.target.value) }
                            />
                        </FormGroup>
                    </Form>
                    <button onClick={handleSubmit} type={"submit"} className={"register__sign-up-btn"}>Login</button>
                </div>
                <div>
                    <Link to={"/"}><img className={"login__exit"} src={exit} alt={"exit"}/></Link>
                    <img className={"login-form__img"} src={loginImg} alt={"Login image"}/>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

