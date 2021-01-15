import React from "react";
import FindDate from "./FindDate";

export default function WeatherData(props) {
    return(
    <div className="WeatherData">
      <h1> {props.info.city} </h1>
      <h2> <FindDate date={props.info.update} /> </h2>
      <h3>{props.info.description}</h3>
         <div className="degree">
        <img
          src={props.info.iconUrl}
          alt={props.info.description}
          className="iconImg"
        />
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