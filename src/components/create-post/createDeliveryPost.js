import React, {useState} from 'react';
import './style/create-post.css';
import { connect } from "react-redux";
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import imgIcon from "../post/images/empty-img.svg";
import {Modal} from "react-bootstrap";
import '../update-info/style/update-info.css';
import {sendPostDelivery} from "./createPostActions";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import {editPost} from "../profile/profileActions";

const CreatePostDelivery = (props) => {
    const urlImg = 'http://167.172.178.135'
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
    const [images, setImages] = useState({
        img1: "",
        img2: ""
    });
    const [state, setState] = useState({
        country1: props.post ? splitStr(props.post.pickup_location, 0) : "",
        state1: props.post ? splitStr(props.post.pickup_location, 1) : "",
        city1: props.post ? splitStr(props.post.pickup_location, 2) : "",
        country2: props.post ? splitStr(props.post.drop_off_location, 0) : "",
        state2: props.post ? splitStr(props.post.drop_off_location, 1) : "",
        city2: props.post ? splitStr(props.post.drop_off_location, 2) : "",
        year: props.post ? splitDate(props.post.deadline, 0) : (new Date().getFullYear()).toString(),
        month: props.post ? splitDate(props.post.deadline, 1) : "01",
        day: props.post ? splitDate(props.post.deadline, 2) : "1",
        title: props.post ? props.post.title : "",
        text: props.post ? props.post.text : "",
        id: props.post ? props.post.id : 0
    })
    console.log(state)
    const sendPost = () => {
        console.log(images)
        props.post ? props.editPost(state, images) : props.sendPostDelivery(state, images)
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
    const imageInputChange1 = (e) =>{
        console.log(e.target.name, e.target.value)
            setImages({
                ...images,
                img1: e.target.files[0]
            })

    }
    const imageInputChange2 = (e) =>{
        console.log(e.target.name, e.target.value)
            setImages({
                ...images,
                img2: e.target.files[0]
            })

    }
    return (
        <Modal show={props.show} onHide={props.onHide} dialogClassName={"create-post"}>
            <div className={"create-post__type"}>Package Delivery</div>
            <div className={"create-post__location-from"}>
                <Form>
                    <label className={"create-post__form-title"}>Indicate package pick up location:</label>
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
                    <Label className={"create-post__form-title"}>Indicate package drop off location:</Label>
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
                <Label className={"create-post__form-title"}>Select the date of the delivery</Label>
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
                        <div>
                            <Input className={"update__input-file-btn"} type="file" id={"file1"} name={"img1"}
                                   onChange={e => imageInputChange1(e)}
                            />
                            <label htmlFor={"file1"} className={"update__input-file-fake"}>
                                <img src={imgIcon} className={"update-photo"}/>
                            </label>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <Input className={"update__input-file-btn"} type="file" id={"file2"} name={"img2"}
                                   onChange={e => imageInputChange2(e)}
                            />
                            <label htmlFor={"file2"} className={"update__input-file-fake"}>
                                {images.img2 ? <img src={urlImg + images.img2} className={"update-photo"}/>:
                                    <img src={imgIcon} className={"update-photo"}/>
                                }
                            </label>

                        </div>
                    </Col>
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
        sendPostDelivery: (post, img) =>
            dispatch(sendPostDelivery(post, img)),
        editPost: (post) =>
            dispatch(editPost(post)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostDelivery);