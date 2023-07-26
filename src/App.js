import React, { useState } from "react";
import Header from "./components/Header";
import ListLog from "./components/ListLog";
import ButtonFilter from "./components/ButtonFilter";



class App extends React.Component{
  render(){
    return(
      <div>
        <Header title="LogFiles:"/>
        <ButtonFilter text='Добавить фильтр'/>
        <main>
          <ListLog/>
        </main>
        
      </div>
    )
  }
}

export default App;
