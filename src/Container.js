import React, {useState} from "react";
import axios from "axios";
import "./Container.css";

export default function Container(props) {
  const [data, setData] = useState({finish: false});
   function handleResponse(response) {
    setData({
      finish : true,
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl :"http://openweathermap.org/img/wn/03n@2x.png",
      wind:response.data.wind.speed,
      update: "Last updated: Saturday 17:51",
      description :response.data.weather[0].description
    })
  }
  if (data.finish) {
  return (
    <div className="Container">
      <div className="card">
        <div className="card-body">
         <div className="form-group">
        <form>
          <input type="text" placeholder="Enter a city " className="city" />
          <input
            type="submit"
            value="Search"
            className="submitButton"
            autocomplete="off"
          />
          <input type="submit"  value="Current" className="current"/>
        </form>
      </div>
      <h1> {data.city} </h1>
      <h2>{data.update}</h2>
      <h3>{data.description}</h3>
         <div className="degree">
        <img
          src={data.iconUrl}
          alt={data.description}
          className="iconImg"
        />
        <span className="temp">{Math.round(data.temperature)}</span>
        <span className="unit">
          <a href="/" className="active">
            °C 
          </a> | <a href="/">°F</a>
        </span>
      </div>
      <br />
          <ul>
            <li>Humidity: {data.humidity} %</li>
            <li>Wind: {data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else { 
  const apiKey = "19f46cb6a372e938ec33a12b4f819dec";
  let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "The app is loading....";
  }

 
}
