import React from 'react';
import '../../post/full-view/style/full-post.css';
import imgIcon from "../../post/images/empty-img.svg";
import './style/full-review.css';
import exit from "../../post/images/exit.svg";
import '../../post/full-view/style/full-post.css'
import {Modal} from "react-bootstrap";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const FullReview = (props) => {

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
               dialogClassName="full-review" >

            <div className={"full-review__rating"}>
                <img onClick={props.onHide} className={"full-review__exit"} src={exit}/>
                    <Box>
                        <StyledRating name="read-only" value={props.rating} size="large" readOnly precision={0.5}/>
                    </Box>
            </div>

            <div className={"full-review__text"}>
                {props.text}
            </div>
            <div className={"review__time"}>
                {props.date}
            </div>
            <div>
                <div className={"full-review__image"}>
                    {props.image  ?
                <img className={"full-review__image-item"} src={ 'https://vrmates.co' + props.image}/>
                : <img src={imgIcon} className={"full-post__icon"}/>
                    }

            </div>
            </div>
        </Modal>

    );
}

export default FullReview;

