import React, {useState} from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './style/support.css';

const Support = () => {
    return (
            <div className="support" >
                <Form>
                    <Label className={"support__label"}>Support</Label>
                    <FormGroup>
                        <Input
                            style={{ height: 46 }}
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            style={{ height: 120 }}
                            className={"support__textarea"}
                            type="textarea"
                            name="text"
                            placeholder={"Text"}/>
                    </FormGroup>
                    <div  className={"support__submit"}>
                        <button className={"support__submit-btn"}>Submit</button>
                    </div>
                </Form>
            </div>
);
}

export default Support;

