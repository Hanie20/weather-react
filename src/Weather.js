import React, {useState} from "react";
import axios from "axios";


export default function Search(props) {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

function handleSubmit(event) {
event.preventDefault();
 if (city.length > 0) {
  let apiKey = "63319272f90841d507345d8c9d4e1232";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
  &appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
 }
}
function updateCity(event) {
  setCity(event.target.value);
}

function showTemperature(response){
  let temp = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let wind = response.data.wind.speed;
  let icon =`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
console.log(response.data);

setData(
<ul>
  <li>Temperature: {temp}°C</li>
  <li>Description: {description}</li>
  <li>Humidity: {humidity}%</li> 
  <li>Wind: {wind}km/h</li>
  <li>
  <img
  src={icon} alt={description}/>
  </li>
</ul>);
}

return (
<div className="Search">
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city..." onChange={updateCity}/>
    <input type="submit" value="Search" />
   </form> 
{data}
 </div>
);
}