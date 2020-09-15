import React, {useEffect} from 'react';
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
        else if(props.history.location.pathname === "/profile" || props.history.location.pathname === "/profile/inbox" || props.history.location.pathname === "/profile/in-progress" ||props.history.location.pathname === "/profile/completed"){
            window.location.reload()
        }
        else if(props.history.location.pathname === "/profile/inbox-page"){
            props.history.push('/profile/inbox')
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