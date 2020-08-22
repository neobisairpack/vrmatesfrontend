import React from 'react';
import {Modal, Button} from "react-bootstrap";
import './style/logout.css';
import {connect} from "react-redux";
import {chooseYesNo} from "../../profile/profileActions";

const LogOut = (props) => {
    const choiceHandler = ()=>{
        props.chooseYesNo("yes")
        console.log(new Date().toLocaleString())
        // localStorage.removeItem("token");
        // window.location.href = "/";
    }
   return(
           <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  dialogClassName={"logout-content"}
                  show={props.show} onHide={props.onHide}>
               <Modal.Header closeButton>
                   {/*<Modal.Title id="contained-modal-title-vcenter">*/}
                   {/*    Log out*/}
                   {/*</Modal.Title>*/}
               </Modal.Header>
               <Modal.Body>
                   <p>
                       {props.message}
                   </p>
               </Modal.Body>
               <Modal.Footer>
                   <Button onClick={() => choiceHandler()} className={"logout__yes"}>Yes</Button>
                   <Button onClick={props.onHide} className={"logout__no"}>No</Button>
               </Modal.Footer>
           </Modal>
   )
}

const mapDispatchToProps = dispatch => {
    return {
        chooseYesNo: (data) =>
            dispatch(chooseYesNo(data)),
    }
}

export default connect(null, mapDispatchToProps)(LogOut);