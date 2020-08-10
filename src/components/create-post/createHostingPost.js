import React, {useState} from 'react';
import './style/create-post.css';
import { connect } from "react-redux";
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {Modal} from "react-bootstrap";
import {sendPostHosting} from "./createPostActions";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CreatePostHosting = (props) => {
    const [isChecked, setIsChecked] = useState({
        private_bedroom: false,
        living_room: false,
        common_space: false
    });
    const [state, setState] = useState({
        country1: "",
        state1: "",
        city1: "",
        country2: "",
        state2: "",
        city2: "",
        year: "",
        month: "",
        day: "",
        title: "",
        text: "",
        preferences: []
    })
    const sendPost = () => {
        console.log(isChecked)
        props.sendPostHosting(state)
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
    const setChecked = (e) =>{
        const name = e.target.name
        setIsChecked({
            ...isChecked,
            [name]: !e.target.value
        })
    }
    return (
        <Modal show={props.show} onHide={props.onHide} dialogClassName={"create-post create-post-hosting"}>
            <div className={"create-post__type"}>Hosting</div>

            <div className={"create-post__location-from"}>
                <Form>
                    <label className={"create-post__form-title"}>Where are you from:</label>
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
                <Form>
                    <Label className={"create-post__form-title"}>Where do you need hosting:</Label>
                    <FormGroup>
                        <CountryDropdown
                            name={"country"}
                            className={"form-control"}
                            defaultOptionLabel={"  Country"}
                            value={state.country2}
                            onChange={e => setState({
                                ...state,
                                country2: e
                            })} />
                    </FormGroup>
                    <FormGroup>
                        <RegionDropdown
                            className={"form-control"}
                            blankOptionLabel={"State"}
                            defaultOptionLabel={"State"}
                            country={state.country2}
                            value={state.state2}
                            onChange={e => setState({
                                ...state,
                                state2: e
                            })} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name={"city2"}
                               className={"form-control"}
                               placeholder={"City"}
                               value={state.city2}
                               onChange={e => handleChange(e)}
                        />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__date"}>
                <Label className={"create-post__form-title"}>Select the date of the hosting</Label>
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
            <div className={"create-post__host-preferences"}>
                <Label className={"create-post__form-title"}>Please, choose if you have any preferences:</Label>
                <div>
                    <input type="checkbox" name="Private bedroom" value={isChecked.private_bedroom}
                           onChange={(e) => setChecked(e)}/>
                    <label className={"create-post__host-preference-type"}>Private bedroom</label>
                </div>
                <div>
                    <input type="checkbox" name="Living room" value={isChecked.living_room}
                           onChange={(e) => setChecked(e)}/>
                    <label className={"create-post__host-preference-type"}>Living room</label>
                </div>
                <div>
                    <input type="checkbox" name="Common space" value={isChecked.common_space}
                           onChange={(e) => setChecked(e)}/>
                    <label className={"create-post__host-preference-type"}>Common space</label>
                </div>
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
        sendPostHosting: post =>
            dispatch(sendPostHosting(post)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostHosting);