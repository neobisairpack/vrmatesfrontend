import React from 'react';
import './style/create-post.css';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import imgIcon from "../post/images/empty-img.svg";
import {Modal} from "react-bootstrap";

const CreatePost = (props) => {
    return (
        <Modal {...props} dialogClassName={"create-post"}>
            <div className={"create-post__type"}>Package Delivery</div>
            <div className={"create-post__location-from"}>
                <Form>
                    <label className={"create-post__form-title"}>Indicate package pick up location:</label>
                    <FormGroup>
                        <Input type="select">
                            <option>Country</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select">
                            <option>State</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select">
                            <option>City</option>
                        </Input>
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__location-to"}>
                <Form>
                    <Label className={"create-post__form-title"}>Indicate package drop off location:</Label>
                    <FormGroup>
                        <Input type="select">
                            <option>Country</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select">
                            <option>State</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select">
                            <option>City</option>
                        </Input>
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__date"}>
                <Label className={"create-post__form-title"}>Select the date of the delivery</Label>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="select">
                                <option>Day</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="select">
                                <option>Month</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Input type="select">
                                <option>Year</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <div className={"create-post__title"}>
                <Form>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>Please, add post title:</Label>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__description"}>
                <Form>
                    <FormGroup>
                        <Label className={"create-post__form-title"}>Please, add post body:</Label>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__photos"}>
                <label className={"create-post__form-title"}>Attach photos of the package(max 2 photos) </label>
                <Row>
                    <Col md={3}>
                        <div className={"create-post__photo"}>
                            <img src={imgIcon} className={"create-post__icon"}/>
                            <button className={"create-post__add-photo"}/>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={"create-post__photo"}>
                            <img src={imgIcon} className={"create-post__icon"}/>
                            <button className={"create-post__add-photo"}/>
                        </div>
                    </Col>
                </Row>
             </div>
            <div className={"create-post__buttons"}>
                <button className={"create-post__cancel-button"}>Cancel</button>
                <button className={"create-post__save-button"}>Save</button>
            </div>
        </Modal>
    );
};

export default CreatePost;