import React, {useEffect, useState} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Modal} from "react-bootstrap";
import './style/support.css';
import axios from "axios";
import Notification from "../notification/notification";

const Support = (props) => {
    const [state, setState] = useState({
        email: "",
        title: "",
        text: ""
    })
    const [notShow, setNotShow] = useState(false);
    const [notMessage, setNotMessage] = useState("");
    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault(e)
        if(props.from){
            localStorage.setItem("report", props.from)
        }
        let token = JSON.parse(localStorage.getItem("token"));
        axios.post('https://vrmates.co/backend/api/support/', {
                email: state.email,
                title: state.title,
                text: state.text
            },
            {
                headers: {
                    "Authorization": "Token " + token
                }
            }
        )
            .then((res) => {
                window.location.reload()
            })
            .catch((err) => {
                setNotMessage("Sorry, message was not sent")
                setNotShow(true)
            })
    }
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               dialogClassName={"support"} onHide={props.onHide} show={props.show}>
            <Form>
                <Label className={"support__label"}>Support</Label>
                <FormGroup>
                    <Input
                        style={{height: 46}}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="*Email"
                        value={state.name}
                        onChange={e => handleChange(e)}
                        reqiured="true"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        style={{height: 46}}
                        type="text"
                        name="title"
                        placeholder="*Title"
                        maxLength={60}
                        value={state.name}
                        onChange={e => handleChange(e)}
                        reqiured="true"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        style={{height: 120}}
                        className={"support__textarea"}
                        type="textarea"
                        name="text"
                        placeholder={"*Text"}
                        maxLength={600}
                        value={state.name}
                        onChange={e => handleChange(e)}
                        reqiured="true"/>
                </FormGroup>
                <div className={"support__submit"}>
                    <button onClick={(e) => handleSubmit(e)} className={"support__submit-btn"}>Submit</button>
                </div>
            </Form>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </Modal>
    );
}
export default Support;

