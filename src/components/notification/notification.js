import React from 'react';
import {Modal, Button} from "react-bootstrap";
import './style/notification.css';
import {withRouter} from "react-router-dom";

const Notification = (props) => {
    const {message} = props;
    const okHandler = () =>{
        props.onHide()
        if(props.history.location.pathname === "/registration"){
            props.history.push("/")
        }
    }
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName={"notification"}
            show={props.show} onHide={props.onHide}>
            <p>
                {message}
            </p>
            <Button onClick={() => okHandler()} className={"notif__btn"}>Ok</Button>
        </Modal>
    )
}

export default withRouter(Notification);