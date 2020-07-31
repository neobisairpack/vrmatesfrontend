import React from 'react';
import {Modal, Button} from "react-bootstrap";
import './style/logout.css';

const LogOut = (props) => {
    const Exit = (e)=>{

        localStorage.removeItem("token");
        window.location.href = "/";
    }
   return(
           <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  dialogClassName={"logout-content"}
                  {...props}>
               <Modal.Header closeButton>
                   <Modal.Title id="contained-modal-title-vcenter">
                       Log out
                   </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <p>
                       Are you sure you want to log out?
                   </p>
               </Modal.Body>
               <Modal.Footer>
                   <Button onClick={(e) => Exit(e)} className={"logout__yes"}>Yes</Button>
                   <Button onClick={props.onHide} className={"logout__no"}>No</Button>
               </Modal.Footer>
           </Modal>
   )
}

export default LogOut;