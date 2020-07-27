import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import './style/register.css';
import exit from '../../post/images/exit.svg';
import DatePicker from "react-datepicker";
import axios from "axios";

const RegistrationForm = () => {
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [address, setAddress] = useState(null)
    const [zipcode, setZipcode] = useState(null)
    const [country, setCountry] = useState(null)
    const [gender, setGender] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [password, setPassword] = useState(null)
    const [password2, setPassword2] = useState(null)
    const [isChecked, setIsChecked] = useState(false)

    //console.log(email, password)
    const handleSubmit = () => {
        //e.preventDefault()
        console.log(email, password, city, name)
        axios.post('https://cors-anywhere.herokuapp.com/http://167.172.178.135/users/registration/', {
            first_name: name,
            last_name: lastName,
            username: name,
            email: email,
            birthday: birthDate,
            gender: "Male",
            phone: "996559129557",
            "address": "Moscow st. 219",
            "zip_code": 720010,
            "country": "Kyrgyzstan",
            "city": "Bishkek",
            "state": "Chui",
            "password": "MyPassword1",
            "password2": "MyPassword1"
        })
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.token));
                window.location.href='/'
                // dispatch(loginUser(res.data.email))
            })
            .catch((err) => {
                console.log("Logging in error " + err)
            })
    }
    return (
        <div className="register-container">
            <div className={"register-form"}>
                <div>
                    <label className={"register__title"}>Registration</label>
                    <Link to={"/landingpage"}><img className={"register__exit"} src={exit} alt={"exit"}/></Link>
                </div>
                <Form className={"register__inputs"}>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"First Name"}
                            type={"name"}
                            onChange={e => setName(e.target.value)}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Phone Number"}
                            type={"tel"}
                            name={"phone"}
                            onChange={e => setPhone(e.target.value)}
                            required/>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Last Name"}
                            type={"name"}
                            onChange={e => setLastName(e.target.value)}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Address"}
                            type={"address"}
                            onChange={e => setAddress(e.target.value)}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"E-mail"}
                            type={"email"}
                            name={"email"}
                            onChange={e => setEmail(e.target.value)}
                            required/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={"Zip Code"}
                            type="number"
                            onChange={e => setZipcode(e.target.value)}
                            required/>
                    </FormGroup>

                    <DatePicker
                        dateFormat="yy-MM-dd"
                        className={"register__input"}
                        placeholderText={"   Date Of Birth"}
                        onChange={e => setBirthDate(e.target.value)}
                    />

                    <FormGroup>
                        <Input type="select" className={"register__input"} onChange={e => setCountry(e.target.value)}>
                            <option>Country</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"} onChange={e => setGender(e.target.value)}>
                            <option>Gender</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"} onChange={e => setCity(e.target.value)}>
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
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" className={"register__input"} onChange={e => setState(e.target.value)}>
                            <option value={""}>State</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type={"password"}
                            name={"password"}
                            className={"register__input"}
                            placeholder={"Repeat Password"}
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className={"register__checkbox"} check>
                        <Label check className={"register__checkbox-lbl"}>
                            <Input type={"checkbox"} onChange={setIsChecked(!isChecked)}/>
                            I agree to terms conditions
                        </Label>
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button onClick={handleSubmit} type={"submit"} className={"register__sign-up-btn"}>Sign Up</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationForm;

