import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';

class App extends Component{
  render(){
    return (
    <div>
       <h1 class="bg-danger">Titre en fond rouge</h1>
        <p>Voici une icone chargée depuis font-awesome : <i className="fab fa-linkedin"></i></p>
    </div>
    );
  }
}

export default App;