import React, {useState} from 'react';
import {Form, FormGroup, Input} from 'reactstrap';
import '../landing-page/registrationForm/style/register.css';
import dateformat from 'dateformat'
import DatePicker from "react-datepicker";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {Modal} from 'react-bootstrap';
import './style/update-info.css';

const UpdateInfo = (props) => {
    const [state, setState] = useState({
        name: props.first_name,
        lastName: props.last_name,
        phone: props.phone,
        address: props.address ? props.address : "",
        zipcode: props.zip_code ? props.zip_code : "",
        gender: props.gender ? props.gender : "",
        city: props.city ? props.city : "",
        states: props.state ? props.state : "",
        about_me: props.about_me ? props.about_me : "",
    })
    const [birthDate, setBirthDate] = useState(new Date(props.birthday));
    const [imageFile, setImageFile] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    const imageInputChange = (e) =>{
        setImageFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        const fd = new FormData();
        fd.append("about_me", state.about_me)
        fd.append('image', imageFile)
        fd.append('first_name', state.name)
        fd.append('last_name', state.lastName)
        fd.append('birthday', dateformat(birthDate, 'yyyy-mm-dd'))
        fd.append('gender', state.gender)
        fd.append('phone', state.phone)
        fd.append('address', state.address)
        fd.append('zipcode', state.zipcode)
        fd.append('country', state.country)
        fd.append('city', state.city)
        fd.append('states', state.states)
            e.preventDefault()
        let token = JSON.parse(localStorage.getItem("token"));
             axios.post('http://167.172.178.135/users/update/', fd,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": "Token " + token
                    }
                }
            )
                .then((res) => {
                    console.log(res)
                    alert(res.data.response)
                })
                .catch((err) => {
                    console.log(state, dateformat(birthDate, 'yyyy-mm-dd'))
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
                            placeholder={state.name}
                            type={"text"}
                            name={"name"}
                            value={state.name}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={state.phone}
                            type={"tel"}
                            name={"phone"}
                            value={state.phone}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={state.lastName}
                            type={"text"}
                            name={"lastName"}
                            value={state.lastName}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={state.address ? state.address : "Address"}
                            type={"address"}
                            name={"address"}
                            value={state.address}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <DatePicker
                        className={"register__input"}
                        placeholderText={birthDate ? birthDate : "Date of birth"}
                        selected={birthDate}
                        onChange={date => setBirthDate(date)}
                    />

                    <FormGroup>
                        <Input
                            className={"register__input"}
                            placeholder={state.zipcode ? state.zipcode : "Zip code"}
                            type={"number"}
                            name={"zipcode"}
                            value={state.zipcode}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name={"gender"} reqiured="true" className={"register__input"} value={state.gender} onChange={e => handleChange(e)}>
                            <option>{state.gender ? state.gender : "Gender"}</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <CountryDropdown
                            name={"country"}
                            className={"register__input"}
                            defaultOptionLabel={state.country ? state.country : "Country"}
                            value={state.country}
                            onChange={e => setState({
                                ...state,
                                country: e
                            })} />
                    </FormGroup>


                    <FormGroup>
                        <RegionDropdown
                            className={"register__input"}
                            blankOptionLabel={state.states ? state.states : "State"}
                            defaultOptionLabel={state.states}
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
                               placeholder={state.city ? state.city : "City"}
                               value={state.city}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name={"about_me"}
                               className={"update__about-me"}
                               placeholder={state.about_me ? state.about_me : "About me"}
                               value={state.about_me}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="file" name={"image"}
                               value={state.image}
                               onChange={e => imageInputChange(e)}
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
