import React, { useState } from "react";
import '../css/modal.css'
import Modal from "./Modal";

const ButtonFilter=(props)=>{
    const[modalActive,setModalActive]=useState(true);
    return(
        <div>
         <button className="filter" onClick={()=>setModalActive(false)}>{props.text}</button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default ButtonFilter