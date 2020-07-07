import React, {useState} from 'react';
import './style/create-post.css';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const CreatePost = () => {
    return (
        <div className={"create-post"}>
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
                <Label>Select the date of the delivery</Label>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="select">
                                <option>Day</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Input type="select">
                                <option>Month</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
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
                        <Label>Please, add post title:</Label>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__description"}>
                <Form>
                    <FormGroup>
                        <Label>Please, add post body:</Label>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                </Form>
            </div>
            <div className={"create-post__photos"}>4</div>
            <div className={"create-post__buttons"}>5</div>
        </div>
    );
};

export default CreatePost;