import React from 'react';
import {Modal} from "react-bootstrap";
import './style/logout.css';

const LogOut = (props) => {
   return(
           <Modal dialogClassName={"logout-content"} {...props}>
               <div>
                   Log out from VRmates?
               </div>
               <div>
                   <button>YES</button>
                   <button>NO</button>
               </div>
           </Modal>
   )
}

export default LogOut;