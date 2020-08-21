import React, {useState} from 'react';
import '../../post/full-view/style/full-post.css';
import imgIcon from "../../post/images/empty-img.svg";
import '../full-review/style/full-review.css';
import exit from "../../post/images/exit.svg";
import '../../post/full-view/style/full-post.css';
import {Modal} from "react-bootstrap";
import {Form, FormGroup, Input, Label} from "reactstrap";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const RateUser = (props) => {
    const [rate, setRate] = useState(3);
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#b3b3b3',
        }
    })(Rating);
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               centered
               {...props}
               dialogClassName="full-review">
            <Form>

                <div className={"full-review__rating"}>
                    <Box>
                        <StyledRating
                            name="simple-controlled"
                            value={rate}
                            size="large"
                            onChange={(event, newValue) => {
                                setRate(newValue);
                            }}
                            precision={0.5}
                        />
                    </Box>
                    <img className={"full-review__exit"} src={exit}/>
                </div>

                <div className={"full-review__text"}>
                    <Form>
                        <FormGroup>
                            <Label className={"create-post__form-title"}>Please, add post body:</Label>
                            <Input type="textarea" name="text"/>
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <div className={"full-review__image"}><img src={imgIcon} className={"full-post__icon"}/></div>
                </div>
            </Form>
        </Modal>

    );
}

export default RateUser;

