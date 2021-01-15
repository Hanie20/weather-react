import React from "react";
import FindDate from "./FindDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
    return(
    <div className="WeatherData">
      <h1> {props.info.city} </h1>
      <h2> <FindDate date={props.info.update} /> </h2>
      <h3>{props.info.description}</h3>
         <div className="degree">
           <div className="float-left">
           <WeatherIcon code={props.info.icon} />
           </div>
        <span className="temp">{Math.round(props.info.temperature)}</span>
        <span className="unit">
          <a href="/" className="active">
            °C 
          </a> | <a href="/">°F</a>
        </span>
      </div>
      <br />
          <ul>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div> 
      );
}