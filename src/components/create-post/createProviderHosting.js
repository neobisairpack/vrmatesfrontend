import React, {useState} from 'react';
import './style/create-post.css';
import { connect } from "react-redux";
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {Modal} from "react-bootstrap";
import {sendProviderHosting} from "./createPostActions";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import imgIcon from "../post/images/empty-img.svg";

const CreateProviderHosting = (props) => {
    const splitStr = (str, n) => {
        if(str){
            let res = str.split(" ")
            return res[n];
        }
    }
    const splitDate = (str, n) => {
        if(str){
            let res = str.split("-")
            return res[n];
        }
    }
    const [imageFile1, setImageFile1] = useState("");
    const [state, setState] = useState({
        country1: props.post ? splitStr(props.post.pickup_location, 0) : "",
        state1: props.post ? splitStr(props.post.pickup_location, 1) : "",
        city1: props.post ? splitStr(props.post.pickup_location, 2) : "",
        year: props.post ? splitDate(props.post.deadline, 0) : (new Date().getFullYear()).toString(),
        month: props.post ? splitDate(props.post.deadline, 1) : "01",
        day: props.post ? splitDate(props.post.deadline, 2) : "1",
        title: props.post ? props.post.title : "",
        text: props.post ? props.post.text : "",
        preferences: props.post ? props.preferences : "",
        id: props.post ? props.post.id : 0
    })
    const sendPost = () => {
        props.post ? props.editPostProvide(state) : props.sendProviderHosting(state, imageFile1)
    }
    const getDropList = () => {
        const year = new Date().getFullYear();
        return (
            Array.from( new Array(50), (v,i) =>
                <option name={"year"} key={i} value={year+i}>{year+i}</option>
            )
        );
    };
    const getDropListDay = () => {
        return (
            Array.from( new Array(31), (v,i) =>
                <option key={i} value={i+1}>{i+1}</option>
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
    const imageInputChange = (e) =>{
        console.log(e.target.files[0])
        setImageFile1(e.target.files[0]);
        // setImageFile2(e.target.files[0]);
    }
    return (
        <Modal show={props.show} onHide={props.onHide} dialogClassName={"create-post"}>
            <div className={"create-post__type"}>Hosting</div>

            <div className={"create-post__location-from"}>
                <Form>
                    <label className={"create-post__form-title"}>Where are you located:</label>
                    <FormGroup>
                        <CountryDropdown
                            name={"country"}
                            className={"form-control"}
                            defaultOptionLabel={"  Country"}
                            value={state.country1}
                            onChange={e => setState({
                                ...state,
                                country1: e
                            })} />
                    </FormGroup>
                    <FormGroup>
                        <RegionDropdown
                            className={"form-control"}
                            blankOptionLabel={"State"}
                            defaultOptionLabel={"State"}
                            country={state.country1}
                            value={state.state1}
                            onChange={e => setState({
                                ...state,
                                state1: e
                            })} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name={"city1"}
                               className={"form-control"}
                               placeholder={"City"}
                               value={state.city1}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__location-to"}>
                <Label className={"create-post__form-title"}>Please, choose what type of hosting you offer:</Label>
                <ul>
                    <li>
                        <input type={"radio"} name={"preferences"} value={"Private bedroom"}
                               defaultChecked={state.preferences === "Private bedroom"} onChange={(e) => handleChange(e)}/>
                        <label className={"create-post__host-preference-type"}>Private bedroom</label>
                    </li>
                    <li>
                        <input type={"radio"} name={"preferences"} value={"Living room"}
                               defaultChecked={state.preferences === "Living room"} onChange={(e) => handleChange(e)}/>
                        <label className={"create-post__host-preference-type"}>Living room</label>
                    </li>
                    <li>
                        <input type={"radio"} name={"preferences"} value={"Common space"}
                               defaultChecked={state.preferences === "Common space"} onChange={(e) => handleChange(e)}/>
                        <label className={"create-post__host-preference-type"}>Common space</label>
                    </li>
                </ul>
            </div>
            <div className={"create-post__date"}>
                <Label className={"create-post__form-title"}>When can you do hosting:</Label>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <select name={"day"} value={state.day} onChange={e => handleChange(e)} className={"form-control"}>
                                {getDropListDay()}
                            </select>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <select name={"month"} value={state.month} onChange={e => handleChange(e)} className={"form-control"}>
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
                            <select name={"year"} value={state.year} onChange={e => handleChange(e)} className={"form-control"}>
                                {getDropList()}
                            </select>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <div className={"create-post__title"}>
                <Form>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>Please, add post title:</Label>
                        <Input type="textarea" name="title" value={state.title} onChange={e => handleChange(e)}/>
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__description"}>
                <Form>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>Please, add post body:</Label>
                        <Input type="textarea" name="text" value={state.text} onChange={e => handleChange(e)}/>
                    </FormGroup>
                </Form>
            </div>

            <div className={"create-post__photos"}>
                <label className={"create-post__form-title"}>Attach photos of the package(max 2 photos) </label>
                <Row>
                    <Col md={3}>
                        <div className={"create-post__photo"}>
                            <Input className={"update__input-file-btn"} type="file" id={"file"} name={"image"}
                                   onChange={e => imageInputChange(e)}
                            />
                            <label htmlFor={"file"} className={"update__input-file-fake"}>
                                <img src={imgIcon} className={"update-photo"}/>
                            </label>
                        </div>
                    </Col>
                    {/*<Col md={3}>*/}
                    {/*    <div className={"create-post__photo"}>*/}
                    {/*        <img src={imgIcon} className={"create-post__icon"}/>*/}
                    {/*        <button className={"create-post__add-photo"}/>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                </Row>
            </div>
            <div className={"create-post__buttons"}>
                <button onClick={props.onHide} className={"create-post__cancel-button"}>Cancel</button>
                <button onClick={sendPost} className={"create-post__save-button"}>Save</button>
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
        sendProviderHosting: post =>
            dispatch(sendProviderHosting(post)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProviderHosting);