import React, {useState} from 'react';
import {Form, FormGroup, Input} from 'reactstrap';
import '../landing-page/registrationForm/style/register.css';
import dateformat from 'dateformat'
import DatePicker from "react-datepicker";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {Modal} from 'react-bootstrap';
import './style/update-info.css';
import imgIcon from "../post/images/empty-img.svg";
import Notification from "../notification/notification";
import exit from "../post/images/exit.svg";

const mainURL = "https://vrmates.co/backend";
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
        country: props.country ? props.country : "",
        about_me: props.about_me ? props.about_me : "",
    })
    const [birthDate, setBirthDate] = useState(new Date(props.birthday));
    const [imageFile, setImageFile] = useState("")
    const [image, setImage] = useState("")
    const [notShow, setNotShow] = useState(false)
    const [notMessage, setNotMessage] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const imageInputChange = (e) =>{
        setImageFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = (e) => {
        const fd = new FormData();
        if(imageFile){
            fd.append('image', imageFile)
        }

        fd.append("about_me", state.about_me)
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
        let token = JSON.parse(localStorage.getItem("token"));
             axios.post(`${mainURL}/users/update/`, fd,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": "Token " + token
                    }
                }
            )
                .then((res) => {
                    setNotMessage("Your profile is updated!")
                    setNotShow(true)
                })
                .catch((err) => {
                    setNotMessage("Oops, something is wrong, check and try again!")
                    setNotShow(true)
                    console.log("Update " + err)
                })
    }
    return (
            <Modal {...props} dialogClassName={"update-info"}>
                <div onClick={props.onHide} className={"full-post__exit"}>
                    <img src={exit}/>
                </div>
                <div>
                    <label className={"register__title"}>Update Personal Information</label>
                </div>
                <Form className={"update__inputs"}>

                    <FormGroup>
                        <Input
                            className={"update__input required"}
                            placeholder={state.name}
                            type={"text"}
                            name={"name"}
                            value={state.name}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"update__input"}
                            placeholder={state.phone}
                            type={"tel"}
                            name={"phone"}
                            value={state.phone}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className={"update__input"}
                            placeholder={state.lastName}
                            type={"text"}
                            name={"lastName"}
                            value={state.lastName}
                            onChange={e => handleChange(e)}
                            reqiured="true"/>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className={"update__input"}
                            placeholder={state.address ? state.address : "Address"}
                            type={"address"}
                            name={"address"}
                            value={state.address}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    {/*<FormGroup/>*/}
                        <DatePicker
                            className={"update__input"}
                            placeholderText={birthDate ? birthDate : "Date of birth"}
                            selected={birthDate}
                            onChange={date => setBirthDate(date)}
                        />
                    {/*<FormGroup/>*/}
                    <FormGroup>
                        <Input
                            className={"update__input"}
                            placeholder={state.zipcode ? state.zipcode : "Zip code"}
                            type={"number"}
                            name={"zipcode"}
                            value={state.zipcode}
                            onChange={e => handleChange(e)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name={"gender"} reqiured="true" className={"update__input"} value={state.gender} onChange={e => handleChange(e)}>
                            <option>{state.gender ? state.gender : "Gender"}</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <CountryDropdown
                            name={"country"}
                            className={"update__input"}
                            defaultOptionLabel={state.country ? state.country : "Country"}
                            value={state.country}
                            onChange={e => setState({
                                ...state,
                                country: e
                            })} />
                    </FormGroup>


                    <FormGroup>
                        <RegionDropdown
                            className={"update__input"}
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
                               className={"update__input"}
                               placeholder={state.city ? state.city : "City"}
                               value={state.city}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name={"about_me"}
                               className={"update__about-me"}
                               maxLength={300}
                               placeholder={state.about_me ? state.about_me : "About me"}
                               value={state.about_me}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Input className={"update__input-file-btn"} type="file" id={"file"} name={"image"}
                                   onChange={e => imageInputChange(e)}
                            />
                            <label htmlFor={"file"} className={"update__input-file-fake"}>
                                {image ? <img className={"create-post__selected-photo"} src={image} alt={"photo"}/> :
                                    <img src={imgIcon} className={"update-photo"}/> }
                            </label>

                        </div>
                    </FormGroup>
                </Form>
                <div className={"register__sign-up"}>
                    <button type={"submit"} onClick={handleSubmit} className={"register__sign-up-btn"}>Update</button>
                </div>
                <div>
                    <Notification show={notShow} message={notMessage}
                                  onHide={() => setNotShow(false)}/>
                </div>
        </Modal>
    );
}

export default UpdateInfo;

