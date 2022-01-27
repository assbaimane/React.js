import { render } from 'react-dom';
import React, { Component } from 'react';

let prenom = "Imane"
class App extends Component{
  render(){
    return (
      <div>
        <h1>Yo {prenom} !</h1>
      </div>
    );
  }
}

export default App;
