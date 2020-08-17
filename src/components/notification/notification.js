import React from 'react';
import {Modal, Button} from "react-bootstrap";
import './style/notification.css';

const Notification = (props) => {
    const {message} = props;
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName={"notification"}
            {...props}>
            <p>
                {message}
            </p>
            <Button onClick={props.onHide} className={"notif__btn"}>Ok</Button>
        </Modal>
    )
}

export default Notification;