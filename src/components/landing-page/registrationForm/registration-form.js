import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import './style/register.css';
import dateformat from 'dateformat'
import exit from '../../post/images/exit.svg';
import DatePicker from "react-datepicker";
import axios from "axios";

const RegistrationForm = () => {
    const [state, setState] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        //birthDate: null,
        address: "",
        zipcode: "",
        country: "",
        gender: "",
        city: "",
        states: "",
        password: "",
        password2: "",
        isChecked: false

    })
    const [birthDate, setBirthDate] = useState(null)

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state.email, state.password, state.city, state.name)
        axios.post('http://167.172.178.135/users/registration/', {
            first_name: state.name,
            last_name: state.lastName,
            username: state.name,
            email: state.email,
            birthday: dateformat(birthDate, 'yyyy-mm-dd'),
            gender: state.gender,
            phone: state.phone,
            address: state.address,
            zip_code: state.zipcode,
            country: state.country,
            city: state.city,
            state: state.states,
            password: state.password,
            password2: state.password2
        })
            .then((res) => {
                console.log(res)
                alert(res.data.response)
            })
            .catch((err) => {
                console.log("Registration error " + err)
            })
    }
    return (
        <div className="register-container">
            <div className={"register-form"}>
                <div>
                    <label className={"register__title"}>Registration</label>
                    <Link to={"/"}><img className={"register__exit"} src={exit} alt={"exit"}/></Link>
                </div>
                <Form className={"register__inputs"}>

                    <FormGroup>
                        <Input
                            className={"register__input required"}
                            placeholder={"*First Name"}
                            type={"text"}
                            name={"name"}
                            value={state.name}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Phone Number"}
                            type={"tel"}
                            name={"phone"}
                            value={state.phone}
                            onChange={e => handleChange(e)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"*Last Name"}
                            type={"text"}
                            name={"lastName"}
                            value={state.lastName}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Address"}
                            type={"address"}
                            name={"address"}
                            value={state.address}
                            onChange={e => handleChange(e)}
                            />
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"*E-mail"}
                            type={"email"}
                            name={"email"}
                            value={state.email}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Zip Code"}
                            type={"number"}
                            name={"zipcode"}
                            value={state.zipcode}
                            onChange={e => handleChange(e)}
                            />
                    </FormGroup>

                    <DatePicker
                        //dateFormat="yyyy-mm-dd"
                        className={"register__input"}
                        placeholderText={"   *Date Of Birth"}
                        selected={birthDate}
                        onChange={date => setBirthDate(date)}
                        reqiured="true"
                    />

                    <FormGroup>
                        <Input type="select" name={"country"} className={"register__input"} value={state.country} onChange={e => handleChange(e)}>
                            <option value={""}>Country</option>
                            <option value={"Kyrgyzstan"}>Kyrgyzstan</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name={"gender"} reqiured="true" className={"register__input"} value={state.gender} onChange={e => handleChange(e)}>
                            <option>*Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name={"city"} className={"register__input"} value={state.city} onChange={e => handleChange(e)}>
                            <option value={""}>City</option>
                            <option value={"Bishkek"}>Bishkek</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={"password"}
                            name={"password"}
                            className={"register__input"}
                            placeholder={"*Password"}
                            reqiured="true"
                            value={state.password}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name={"states"} className={"register__input"} value={state.states} onChange={e => handleChange(e)}>
                            <option value={""}>State</option>
                            <option value={"Chui"}>Chui</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={"password"}
                            name={"password2"}
                            className={"register__input"}
                            placeholder={"*Repeat Password"}
                            reqiured="true"
                            value={state.password2}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup className={"register__checkbox"} check>
                        <Label check className={"register__checkbox-lbl"}>
                            <Input type={"checkbox"} name={"isChecked"} value={state.isChecked} onChange={e => handleChange(e)}/>
                            I agree to terms conditions
                        </Label>
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button type={"submit"} onClick={handleSubmit} className={"register__sign-up-btn"}>Sign Up</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationForm;

