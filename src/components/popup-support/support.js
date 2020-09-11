import React, {useEffect, useState} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Modal} from "react-bootstrap";
import './style/support.css';
import axios from "axios";

const Support = (props) => {
    const [state, setState] = useState({
        email: "",
        title: "",
        text: ""
    })
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
        axios.post('http://167.172.178.135:8000/api/support/', {
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
                console.log("sent")
            })
            .catch((err) => {
                console.log("Support error " + err)
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
                        placeholder="Email"
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
                        placeholder="Title"
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
                        placeholder={"Text"}
                        value={state.name}
                        onChange={e => handleChange(e)}
                        reqiured="true"/>
                </FormGroup>
                <div className={"support__submit"}>
                    <button onClick={(e) => handleSubmit(e)} className={"support__submit-btn"}>Submit</button>
                </div>
            </Form>
        </Modal>
    );
}
export default Support;

