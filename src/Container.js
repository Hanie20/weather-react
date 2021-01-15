import React, {useState} from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import "./Container.css";

export default function Container(props) {
  const [data, setData] = useState({finish: false});
  const [city, setCity] = useState(props.defaultCity);

   function handleResponse(response) {
    setData({
      finish : true,
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon :response.data.weather[0].icon,
      wind:response.data.wind.speed,
      update: new Date(response.data.dt*1000),
      description :response.data.weather[0].description
    })
  }

  function searchData() {
  const apiKey = "19f46cb6a372e938ec33a12b4f819dec";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
   event.preventDefault();
   searchData();
  }

  function findCity(event) {
  setCity(event.target.value);
  }

  if (data.finish) {
  return (
    <div className="Container">
      <div className="card">
        <div className="card-body">
         <div className="form-group">
        <form onSubmit={handleSubmit}>
          <input 
          type="search" 
          placeholder="Enter a city... " 
          className="city" 
          onChange={findCity}
          />
          <input
            type="submit"
            value="Search"
            className="submitButton"
            autocomplete="off"
          />
          <input type="submit"  value="Current" className="current"/>
        </form>
        <WeatherData info={data} />
        <Forecast city = {data.city}/>
        </div>
        </div>
      </div>
    </div>
      );
  } else { 
  searchData();
  return "The app is loading....";
  }
}
