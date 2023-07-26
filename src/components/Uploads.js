import React, { useState } from "react";
import LoggDataService from "../service/LoggDataService";
import ListLog from "../components/ListLog"


const Uploads = (props) =>{

const [pattern,setPattern] = useState('');
const [fileListLoggs,setFile] = useState('');
const postData=(e)=>{
  if(fileListLoggs.length>0 && pattern.length>0 )
  {
   e.preventDefault();
  LoggDataService.uploadsFile(pattern,fileListLoggs).then((response)=>{
    console.log(fileListLoggs);
    setPattern(response.data);
    setFile(response.data); 
    window.location.reload();
  })
  .catch(function (error){
    console.log(error);
  });
//  window.location.reload();
}
}
const postDelete=(e)=>{
   e.preventDefault();
  LoggDataService.deleteData().then((response)=>{
    window.location.reload();
    ListLog.componentDidMount();
  })
  .catch(function (error){
    console.log(error);
  });
//  y
//ListLog.componentDidUpdate();
// setTimeout(()=>{window.location.reload()},2000)
}
    return(
      <form>
       <input placeholder='Шаблон' type="text" value={pattern} onChange={(e)=>setPattern(e.target.value)} />
       <input placeholder='Путь к файлу' type="text" value={fileListLoggs} onChange={(e)=>setFile(e.target.value)} />
      {/* <input type='file' value={fileListLoggs} onChange={(e)=>setFile(e.target.value)}/> */}
      <button type='submit' onClick={postData}>Загрузить</button>
      <button type='button' onClick={postDelete}>Удалить данные</button>
  </form>
    )
};

export default Uploads;