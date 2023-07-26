import React, { useState } from "react";
import '../css/modal.css';
import LoggDataService from "../service/LoggDataService";

const Modal = ({active,setActive})=>{
    const [dInput, setDisInput] = useState(false);
    const [dSelector, setDisSelector] = useState(false);
    const [dateFilter,setDate] = useState('');
const [levelFilter,setLevel] = useState('');

    function ClickInput(){
        setDisSelector(true);
        console.log(dateFilter)
    }
    function ClickSelector() {
        setDisInput(true);
        console.log(levelFilter)
      }

      const postData=(e)=>{
        e.preventDefault();
        if(levelFilter.length>0 || dateFilter.length>0)
        {
        if(dInput)
       LoggDataService.Filter(levelFilter,'level').then((response)=>{
        setLevel(response.data);
        window.location.reload();
       })
       .catch(function (error){
         console.log(error);
         
       });
    else
    if(dSelector)
    LoggDataService.Filter(dateFilter,'date').then((response)=>{
        setDate(response.data);
        window.location.reload();
    })
    .catch(function (error){
      console.log(error);
      
    });
    setActive(true);
    window.location.reload();
}
    }
    return(
        <div className={active ? "modal" : "modal active"} onClick={()=>setActive(true)}>
            <div className={active ? "modal__content" : "modal__content active"} onClick={e=>e.stopPropagation()}>
            <form>
                    <input id="modalInput" type="date"  value={dateFilter} placeholder='Дата'disabled={dInput} 
                    onChange={(e)=>setDate(e.target.value)} onClick={ClickInput}/>
                    <select id="modalSelect" disabled={dSelector} onChange={(e)=>setLevel(e.target.value)}
                    onClick={ClickSelector}>
                    <option disabled selected value={''}>Уровень логирования</option>
                        <option value={'TRACE'}>TRACE</option>
                        <option value={'DEBUG'}>DEBUG</option>
                        <option value={'INFO'}>INFO</option>
                        <option value={'WARN'}>WARN</option>
                        <option value={'ERROR'}>ERROR</option>
                        <option value={'FATAL'}>FATAL</option>
                    </select>
                    <button id="modalButton" onClick={postData}>Применить</button>
                </form>
            </div>

        </div>
    );
}

export default Modal;