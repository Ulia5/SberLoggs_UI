import React from "react";
import Uploads from "./Uploads";

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                {this.props.title}
               <Uploads/>
            </header>
        )
    }
}

export default Header;