import React, {useEffect, useState} from 'react';
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import '../landing-page/registrationForm/style/register.css';
import dateformat from 'dateformat'
import DatePicker from "react-datepicker";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {Modal} from 'react-bootstrap';
import './style/update-info.css';

const UpdateInfo = (props) => {
    const [state, setState] = useState({
        name: "",
        lastName: "",
        phone: "",
        address: "",
        zipcode: "",
        gender: "",
        city: "",
        states: "",
        about_me: "",
        image: ""

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
            axios.post('http://167.172.178.135/users/update/', {
                first_name: state.name,
                last_name: state.lastName,
                birthday: dateformat(birthDate, 'yyyy-mm-dd'),
                gender: state.gender,
                phone: state.phone,
                address: state.address,
                zip_code: state.zipcode,
                country: state.country,
                city: state.city,
                state: state.states,
                about_me: state.about_me,
                image: null
            })
                .then((res) => {
                    console.log(res)
                    alert(res.data.response)
                })
                .catch((err) => {
                    console.log("Update " + err)
                })
    }
    return (
            <Modal {...props} dialogClassName={"update-info"}>
                <div>
                    <label className={"register__title"}>Update Personal Information</label>
                </div>
                <Form className={"update__inputs"}>

                    <FormGroup>
                        <Input
                            className={"register__input required"}
                            placeholder={"First Name"}
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
                            placeholder={"Last Name"}
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
                            placeholder={"Zip Code"}
                            type={"number"}
                            name={"zipcode"}
                            value={state.zipcode}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <DatePicker
                        className={"register__input"}
                        placeholderText={"   Date Of Birth"}
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
                            <option>Gender</option>
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
                        <Input type="text" name={"city"}
                               className={"register__input"}
                               placeholder={"City"}
                               value={state.city}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name={"about_me"}
                               className={"update__about-me"}
                               placeholder={"About me"}
                               value={state.about_me}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="file" name={"image"}
                               value={state.image}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button type={"submit"} onClick={handleSubmit} className={"register__sign-up-btn"}>Update</button>
                </div>
        </Modal>
    );
}

export default UpdateInfo;

