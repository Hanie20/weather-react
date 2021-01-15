import React from "react";
import FindDate from "./FindDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
           <Temperature celsius={props.info.temperature}/> 
      </div>
      <br />
          <ul>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div> 
      );
}