import React from "react";
import Logg from "./Logg";
import LoggDataService from '../service/LoggDataService';
import INSTRUCTOR from '../service/LoggDataService';
import ButtonHeader from "./Button";


class ListLog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listlog:[]
        }
        this.refreshLoggs = this.refreshLoggs.bind(this)
    }

    // componentDidUpdate(){
    //     this.refreshLoggs();
    // }
    componentDidMount() {//вызывается сразу после монтирования, здесь происходят действия, которые требуют 
       // наличие дом узлов, лучшее место для создания сетевых запросов
        this.refreshLoggs();
        
    }

    refreshLoggs() {
       
        LoggDataService.retrieveAllLoggs(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ listlog: response.data })
                }
            )
    }
    render(){
        if(this.state.listlog.length>0)
        return(<div className="wrap">
             <table className="log"> 
                <thead className="table_header">
                    <tr>
                    {/* <th></th> */}
                    <th> <ButtonHeader text="ID"  value="id"/> </th>
                    <th><ButtonHeader text="Дата" value="date"/> </th>
                    <th> <ButtonHeader text="Уровень логирования" value="level"/>  </th>
                    <th> <ButtonHeader text="Контекст" value="thread"/>  </th>
                    <th> <ButtonHeader text="Поток" value="logger"/>  </th>
                    <th> <ButtonHeader text="Сообщение об ошибке" value="message"/>  </th>
                    </tr>
                </thead>
                <tbody>
          {this.state.listlog.map((el)=>(
            <Logg key={el.id} logg={el} />
            ))} 
            </tbody>
            </table>  
        </div>)
        else 
        return(<div className="log">
            <h3>Файл пуст или не удалось открыть</h3>
        </div>)
    }
}

export default ListLog;