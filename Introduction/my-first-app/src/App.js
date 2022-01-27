import logo from './logo.svg';
import './App.css';

function App() {

  let dateCourante = new Date();
  let tempsJavaScript = dateCourante.getTime();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Temps JS : {tempsJavaScript} milliseconde(s)</p>
        <p>Temps PHP: {tempsJavaScript/1000}</p>
        <p>Temps humain : {dateCourante.getDate()}/{dateCourante.getMonth()}/{dateCourante.getFullYear()}</p>
      </header>
      <footer>Un site de Imane A.</footer>
    </div>
  );
}

export default App;
