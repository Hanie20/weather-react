import './App.css';
import Weather from "./Weather";
import Loader from "react-loader-spinner";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World
        </h1>
        <Weather />
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
      </header>
    </div>
  );
}

export default App;
