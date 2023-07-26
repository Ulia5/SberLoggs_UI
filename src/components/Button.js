import React, { useState } from "react";
import LoggDataService from "../service/LoggDataService";

const ButtonHeader=(props)=>{
    let [click,setClick] = useState('');

    const transmittingValue=(e)=>{
        e.preventDefault();
        setClick(click=props.value);
    LoggDataService.transmittingValue(click).then((response)=>{
         setClick(response.data);
         window.location.reload();
       })
       .catch(function (error){
         console.log(error);
       }); 
       window.location.reload();
     }
    
    return(
        <button className="ButtonHeader" onClick={transmittingValue} >{props.text}</button>
    )
}

export default ButtonHeader