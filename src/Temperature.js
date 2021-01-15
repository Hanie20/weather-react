import React, {useState} from "react";

export default function Temperature (props) {
    const [unit, setUnit] = useState('celsius');

    function convertToFahrenheit(event) {
     event.preventDefault();
     setUnit('fahrenheit');
    }

    function convertToCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
    }

    if (unit === 'celsius') { 
    return (
      <div className="Temperature">
            <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" className="active">
            °C 
          </a> |   <a href="/" onClick={convertToFahrenheit}>°F</a>
        </span>
        </div>
    );
    } else {
       return (
      <div className="Temperature">
            <span className="temp">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius} >
            °C 
          </a> |   °F
        </span>
        </div>
    );
    }
}