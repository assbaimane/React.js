// import { render } from 'react-dom';
import React, { Component } from 'react';

let prenom = "Imane"
let dateDuJour = new Date();
let jour = dateDuJour.getDay() + "/" + dateDuJour.getMonth() + "/" + dateDuJour.getFullYear()
let heure = dateDuJour.getHours() +":"+dateDuJour.getMinutes() +":"+dateDuJour.getSeconds()
class App extends Component{
  render(){
    return (
      <div>
        <h1>Yo {prenom} !</h1>
        <p>Aujourd'hui, nous sommes le {jour}</p>
        <p>Il est exactement : {heure}</p>
      </div>
    );
  }
}

export default App;
