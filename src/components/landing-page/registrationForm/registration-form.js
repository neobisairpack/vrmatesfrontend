import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import './style/register.css';
import dateformat from 'dateformat'
import exit from '../../post/images/exit.svg';
import DatePicker from "react-datepicker";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import TermsConditions from "../../popup-terms";
const RegistrationForm = () => {
    const [termsModalShow, setTermsModalShow] = useState(false)
    const [state, setState] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        zipcode: "",
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
        if(state.isChecked) {
            e.preventDefault()
            axios.post('http://167.172.178.135/users/registration/', {
                first_name: state.name,
                last_name: state.lastName,
                username: null,
                email: state.email,
                birthday: dateformat(birthDate, 'yyyy-mm-dd'),
                gender: state.gender,
                phone: state.phone,
                address: state.address,
                zip_code: state.zipcode,
                country: state.country,
                city: state.city,
                state: state.states,
                about_me: "",
                image: null,
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
        else{
            alert("Please, read the Terms and Conditions and check")
        }
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
                            placeholder={"*Phone Number"}
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
                        className={"register__input"}
                        placeholderText={"   *Date Of Birth"}
                        selected={birthDate}
                        onChange={date => setBirthDate(date)}
                        reqiured="true"
                    />

                    <FormGroup>
                        <CountryDropdown
                            name={"country"}
                            className={"register__input"}
                            defaultOptionLabel={"  Country"}
                            value={state.country}
                            onChange={e => setState({
                                ...state,
                                country: e
                            })} />
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
                        <RegionDropdown
                            className={"register__input"}
                            blankOptionLabel={"State"}
                            defaultOptionLabel={"State"}
                            country={state.country}
                            value={state.states}
                            onChange={e => setState({
                                ...state,
                                states: e
                            })} />
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
                        <Input type="text" name={"city"}
                               className={"register__input"}
                               placeholder={"City"}
                               value={state.city}
                               onChange={e => handleChange(e)}
                        />
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
                            <label onClick={() => setTermsModalShow(true)}>I agree to terms conditions</label>
                        </Label>
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button type={"submit"} onClick={handleSubmit} className={"register__sign-up-btn"}>Sign Up</button>
                </div>

            </div>
            <div>
                <TermsConditions show={termsModalShow}
                                 onHide={() => setTermsModalShow(false)}/>
            </div>
        </div>
    );
}

export default RegistrationForm;

