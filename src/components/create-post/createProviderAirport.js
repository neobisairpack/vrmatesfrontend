import React, {useEffect, useState} from 'react';
import './style/create-post.css';
import {connect} from "react-redux";
import {Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {Modal} from "react-bootstrap";
import {editPostProvide, resetIsCreated, sendProviderAirport} from "./createPostActions";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import Notification from "../notification/notification";
import {withRouter} from "react-router-dom";
import exit from "../post/images/exit.svg";

const CreateProviderAirport = (props) => {
    const [notShow, setNotShow] = useState(false);
    const [notMessage, setNotMessage] = useState("");
    useEffect(() => {
        const {isCreated} = props.createPost
        const {error} = props.createPost
        if(isCreated && error === false){
            setNotMessage("Thank you! Please, wait until administrator checks the post!")
            setNotShow(true)
            props.resetIsCreated();
        }
        else if(isCreated === false && error === true){
            setNotMessage("Oops, post was not created, check and try again")
            setNotShow(true)
            props.resetIsCreated();
        }
    })
    const splitStr = (str, n) => {
        if (str) {
            let res = str.split(",")
            return res[n];
        }
    }
    const splitDate = (str, n) => {
        if (str) {
            let res = str.split("-")
            return res[n];
        }
    }
    const [state, setState] = useState({
        country1: props.post ? splitStr(props.post.pickup_location, 0) : "",
        state1: props.post ? splitStr(props.post.pickup_location, 1) : "",
        city1: props.post ? splitStr(props.post.pickup_location, 2) : "",
        year: props.post ? splitDate(props.post.deadline, 0) : (new Date().getFullYear()).toString(),
        month: props.post ? splitDate(props.post.deadline, 1) : "01",
        day: props.post ? splitDate(props.post.deadline, 2) : "01",
        title: props.post ? props.post.title : "",
        text: props.post ? props.post.text : "",
        id: props.post ? props.post.id : 0,
        preferences: ""
    })
    const sendPost = (e) => {
        e.preventDefault(e)
        props.post ? props.editPostProvide(state) : props.sendProviderAirport(state)
        if(props.post){
            props.history.push('/profile/inbox')
        }
    }
    const getDropList = () => {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(50), (v, i) =>
                <option name={"year"} key={i} value={year + i}>{year + i}</option>
            )
        );
    };
    const getDropListDay = () => {
        return (
            Array.from(new Array(31), (v, i) =>
                <option key={i} value={i + 1}>{i + 1}</option>
            )
        );
    };
    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    return (
        <Modal show={props.show} onHide={props.onHide} dialogClassName={"create-post-modal"}>
            <div onClick={props.onHide} className={"full-post__exit"}>
                <img src={exit}/>
            </div>
            <div className={"create-post__type"}>Airport pick up/drop off</div>
            <Form onSubmit={(e) => sendPost(e)} className={"create-post-airport"}>
                <div className={"create-post__location-from"}>
                    <label className={"create-post__form-title"}>In which City/State/Country can you pick up:</label>
                    <FormGroup>
                        <CountryDropdown
                            required
                            name={"country"}
                            className={"form-control"}
                            defaultOptionLabel={"  *Country"}
                            value={state.country1}
                            onChange={e => setState({
                                ...state,
                                country1: e
                            })}/>
                    </FormGroup>
                    <FormGroup>
                        <RegionDropdown
                            required
                            className={"form-control"}
                            blankOptionLabel={"*State"}
                            defaultOptionLabel={"*State"}
                            country={state.country1}
                            value={state.state1}
                            onChange={e => setState({
                                ...state,
                                state1: e
                            })}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name={"city1"}
                               className={"form-control"}
                               placeholder={"*City"}
                               value={state.city1}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                </div>

                <div className={"create-post__date"}>
                    <Label className={"create-post__form-title"}>*Select the date of the pick up:</Label>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <select required name={"day"} value={state.day} onChange={e => handleChange(e)}
                                        className={"form-control"}>
                                    {getDropListDay()}
                                </select>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <select required name={"month"} value={state.month} onChange={e => handleChange(e)}
                                        className={"form-control"}>
                                    <option value={"01"}>January</option>
                                    <option value={"02"}>February</option>
                                    <option value={"03"}>March</option>
                                    <option value={"04"}>April</option>
                                    <option value={"05"}>May</option>
                                    <option value={"06"}>June</option>
                                    <option value={"07"}>July</option>
                                    <option value={"08"}>August</option>
                                    <option value={"09"}>September</option>
                                    <option value={"10"}>October</option>
                                    <option value={"11"}>November</option>
                                    <option value={"12"}>December</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <select required name={"year"} value={state.year} onChange={e => handleChange(e)}
                                        className={"form-control"}>
                                    {getDropList()}
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
                <div className={"create-post__title"}>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>*Please, add post title:</Label>
                        <Input maxLength={100} required type="textarea" name="title" value={state.title} onChange={e => handleChange(e)}/>
                    </FormGroup>
                </div>
                <div className={"create-post__description"}>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>Please, add post body:</Label>
                        <Input maxLength={600} type="textarea" name="text" value={state.text} onChange={e => handleChange(e)}/>
                    </FormGroup>
                </div>

                <div className={"create-post__buttons"}>
                    <button onClick={props.onHide} className={"create-post__cancel-button"}>Cancel</button>
                    <button className={"create-post__save-button"}>Save</button>
                </div>
            </Form>
            <div>
                <Notification show={notShow} message={notMessage}
                              onHide={() => setNotShow(false)}/>
            </div>
        </Modal>
    );
};
const mapStateToProps = state => {
    return {
        createPost: state.createPost,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendProviderAirport: post =>
            dispatch(sendProviderAirport(post)),
        editPostProvide: (post) =>
            dispatch(editPostProvide(post)),
        resetIsCreated: () =>
            dispatch(resetIsCreated()),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProviderAirport));