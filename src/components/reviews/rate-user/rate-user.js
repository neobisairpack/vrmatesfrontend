import React, {useState} from 'react';
import '../../post/full-view/style/full-post.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import '../full-review/style/full-review.css';
import exit from "../../post/images/exit.svg";
import '../../post/full-view/style/full-post.css';
import {Modal} from "react-bootstrap";
import {Form, FormGroup, Input} from "reactstrap";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import {connect} from "react-redux";
import {getUserData} from "../../sidebar/sidebarActions";
import {changePostStatus, changePostStatusProvide} from "../../profile/profileActions";
import imgIcon from "../../post/images/empty-img.svg";

const RateUser = (props) => {
    const [rate, setRate] = useState("");
    const [text, setText] = useState("");
    const [imageFile1, setImageFile1] = useState("")
    const [image, setImage] = useState("")
    const StyledRating = withStyles({
        iconFilled: {
            color: '#FD5A01',
        }
    })(Rating);
    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
    }
    const rateUser = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('image', imageFile1)
        fd.append('provider', props.post.provider.id)
        fd.append('rating', rate)
        fd.append('text', text)
        let token = JSON.parse(localStorage.getItem("token"));
        axios
            .post(`http://167.172.178.135:8000/api/rating/`, fd,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                let status = "Successfully done";
                if (props.post.createdBy === "Requester") {
                    props.changePostStatus(props.post, status)
                } else if (props.post.createdBy === "Provider") {
                    props.changePostStatusProvide(props.post, status)
                }
            })
            .catch(err => {
                console.log(err)
            });
    }
    const imageInputChange = (e) => {
        setImageFile1(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               centered
               show={props.show}
               onHide={props.onHide}
               dialogClassName="full-review">
            <Form>
                <img onClick={props.onHide} className={"full-review__exit"} src={exit}/>
                <div className={"rate__title"}>Please, rate experience with {props.post.provider.first_name}!</div>
                <div className={"full-review__rating"}>
                    <Box>
                        <StyledRating
                            name="simple-controlled"
                            value={Number(rate)}
                            size="large"
                            onChange={(event, newValue) => {
                                setRate(newValue);
                            }}
                            emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                            precision={0.5}
                        />
                    </Box>
                </div>

                <div className={"full-review__text"}>
                    <FormGroup>
                        <Input className={"rate__text"} type="textarea" name="text" value={text}
                               onChange={(e) => handleChange(e)}/>
                    </FormGroup>
                </div>
                <div>
                    <Input className={"rate__input-file-btn"} type="file" id={"file"} name={"image"}
                           onChange={e => imageInputChange(e)}
                    />
                    <label htmlFor={"file"} className={"rate__input-file-fake"}>
                        {image ? <img className={"create-post__selected-photo"} src={image} alt={"photo"}/> :
                            <>
                                <img alt="svgImg"
                                     src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyMjUgMjI1IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNS45OTQzMXYtMjI1Ljk5NDMxaDIyNS45OTQzMXYyMjUuOTk0MzF6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48ZyBmaWxsPSIjYzFjMWMxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMDMuMTI1LDE4Ljc1djg0LjM3NWgtODQuMzc1djE4Ljc1aDg0LjM3NXY4NC4zNzVoMTguNzV2LTg0LjM3NWg4NC4zNzV2LTE4Ljc1aC04NC4zNzV2LTg0LjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
                                <p className={"rate__attach-photo-lbl"}>Attach photo</p>
                            </>
                        }
                    </label>
                </div>
                <div>
                    <button onClick={(e) => rateUser(e)} className={"rate__button"}>Submit</button>
                </div>
            </Form>
        </Modal>

    );
}
const mapStateToProps = state => {
    return {
        userData: state.userData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changePostStatus: (post, status) =>
            dispatch(changePostStatus(post, status)),
        changePostStatusProvide: (post, status) =>
            dispatch(changePostStatusProvide(post, status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateUser);

