import React, {useState} from 'react';
import '../../post/full-view/style/full-post.css';
import imgIcon from "../../post/images/empty-img.svg";
import '../full-review/style/full-review.css';
import exit from "../../post/images/exit.svg";
import '../../post/full-view/style/full-post.css';
import {Modal} from "react-bootstrap";
import {Form, FormGroup, Input} from "reactstrap";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const RateUser = (props) => {
    const [rate, setRate] = useState(3);
    const [text, setText] = useState("");
    const [imageFile1, setImageFile1] = useState("")
    //const [rate, setRate] = useState(3);
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        },
        iconEmpty: {
            color: '#b3b3b3',
        }
    })(Rating);
    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
    }
    const imageInputChange = (e) =>{
        console.log(e.target.files[0])
        setImageFile1(e.target.files[0]);
        // setImageFile2(e.target.files[0]);
    }
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               centered
               {...props}
               dialogClassName="full-review">
            <Form>
                <div>Please, rate experience with David!</div>
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
                        <FormGroup>
                            <Input className={"rate__text"} type="textarea" name="text" value={text} onChange={(e) => handleChange(e)}/>
                        </FormGroup>
                </div>
                <div>
                    {/*<div className={"full-review__image"}><img src={imgIcon} className={"full-post__icon"}/></div>*/}
                    <div>
                        <Input className={"rate__input-file-btn"} type="file" id={"file"} name={"image"}
                               onChange={e => imageInputChange(e)}
                        />
                        <label htmlFor={"file"} className={"rate__input-file-fake"}>
                            <img src="https://img.icons8.com/android/24/000000/plus.png"/>
                        </label>
                    </div>
                </div>
            </Form>
        </Modal>

    );
}

export default RateUser;

