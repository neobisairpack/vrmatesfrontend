import React, {useState} from 'react';
import './style/create-post.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
            <div className={"create-post__date"}>2</div>
            <div className={"create-post__title"}>3</div>
            <div className={"create-post__description"}>3</div>
            <div className={"create-post__photos"}>4</div>
            <div className={"create-post__buttons"}>5</div>
        </div>
    );
};

export default CreatePost;