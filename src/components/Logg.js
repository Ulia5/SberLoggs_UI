import React from "react";
// import {AiFillCheckCircle} from "react-icons/ai"


class Logg extends React.Component{
    constructor(props){
        super(props)
        this.rowClass=this.rowClass.bind(this)
        // this.changingColor=this.changingColor.bind(this)
    }
    logg=this.props.logg
    render(){
        return(
            <tr id="log" className={this.rowClass(this.logg.level)}>
                    {/* <th><AiFillCheckCircle onClick={()=>this.changingColor(this.logg.id)} id="done-icon" /></th> */}
                    <td> {this.logg.id} </td>
                    <td> {this.logg.date} </td>
                    <td>{this.logg.level} </td>
                    <td>{this.logg.logger} </td>
                    <td>{this.logg.thread} </td>
                    <td>{this.logg.message} </td>
        </tr>
        )
    } 
    rowClass(level){
     if(level === 'Trace' || level ==='TRACE')return 'steelBlue';
     else if (level === 'Debug' || level ==='DEBUG') return 'dodgerBlue';
        else if( level === 'Info' || level ==='INFO') return'yellowGreen';
        else if (level === 'Warn' || level ==='WARN') return 'lightPink';
        else if (level === 'Error'|| level ==='ERROR') return 'indianRed';
        else if (level === 'Fatal' || level ==='FATAL') return 'orangeRed';
        else return 'dr';
        }
    
        // changingColor(id){
        //     const background = document.getElementById("log");
        //     // set it to blue
        //     background.style.backgroundColor = "#333";
        // }
}

export default Logg;