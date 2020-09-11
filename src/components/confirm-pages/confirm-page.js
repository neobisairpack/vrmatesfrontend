import React from 'react';
import './style/confirm-page.css';
import tick from './tick.png';
import {Link} from "react-router-dom";

const ConfirmPage = (props) => {
    return (
       <div className={"confirm"}>
           <div className={"confirm-window"}>
               <div>
                   <img className={"confirm__icon"} src="https://img.icons8.com/cotton/150/000000/check-male--v1.png"/>
               </div>
               <div>
                   <p className={"confirm__text"}>
                       Thank you for confirm!
                   </p>
               </div>
               <div className={"confirm__link"}>
                   <Link to={"/"}>Main page</Link>
               </div>

           </div>
       </div>
    );
}

export default ConfirmPage;
