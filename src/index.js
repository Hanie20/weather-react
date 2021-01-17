import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "./Container";

function App() {
  return (
<div className="App">
      <div className="container">
        <Container defaultCity="Montreal"/>
        <footer> 
           <small className="projectLink">
          <a href="https://github.com/Hanie20/weather-react" target="_blank">Open-source code </a>
        by <a  href="https://www.instagram.com/johaniedamas/" target="_blank">  Johanie Damas  </a>  
        </small>
        </footer>
      </div>  
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
