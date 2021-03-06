import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import '../registrationForm/style/register.css';
import './style/login.css';
import exit from '../../post/images/exit.svg';
import loginImg from '../images/login-img.png';
import axios from 'axios';
import Notification from "../../notification/notification";
import {connect} from "react-redux";
import {setIsAuthed} from "../../sidebar/sidebarActions";


const LoginForm = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")
    const [toggleClass, setToggleClass] = useState("fa fa-eye")
    const [passwordDisplay, setPasswordDisplay] = useState("password")

    const handleSubmit = (e) => {
        e.preventDefault(e)
        axios.post('https://vrmates.co/backend/users/login/', {
            email: email,
            password: password
        })
            .then((res) => {
                props.setIsAuthed(true)
                localStorage.setItem("token", JSON.stringify(res.data.token));
                // props.history.push({
                //     pathname: '/dashboard',
                // });
                window.location.href = '/dashboard';
            })
            .catch((err) => {
                console.log("Logging in error " + err)
                setNotMessage("Email or password are incorrect. Please, check and try again.")
                setNotShow(true)
            })
    }

    // Displaying password
    const changeToggleClass = () => {
        if (toggleClass === "fa fa-eye") {
            setToggleClass("fa fa-eye fa-eye-slash")
            setPasswordDisplay("text")
        } else {
            setToggleClass("fa fa-eye")
            setPasswordDisplay("password")
        }
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
                                    className={"login__input"}
                                    placeholder={"E-mail"}
                                    type={"email"}
                                    name={"email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
                            </FormGroup>
                            <FormGroup className={"input-group"}>
                                <Input
                                    type={passwordDisplay}
                                    name={"password"}
                                    className={"login__input"}
                                    placeholder={"Password"}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button 
                                    type={"button"} 
                                    id={"btnToggle"} 
                                    className={"password-toggle"}>
                                    <i id={"eyeIcon"} class={toggleClass} onClick={changeToggleClass}></i>
                                </button>
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
                    <img className={"login-form__img"} src={loginImg} alt={"Login"}/>
                </div>
            </div>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsAuthed: (data) =>
            dispatch(setIsAuthed(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));

