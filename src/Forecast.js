import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
    const [finishLoaded, setFinishLoaded] = useState(false);
    const [weatherForecast, setWeatherForecast] = useState(null);

    function handleForecastResponse(response) {
        setWeatherForecast(response.data);
        setFinishLoaded(true);
    }
    
    if (finishLoaded && props.city === weatherForecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastPreview data={weatherForecast.list[0]} />
        <ForecastPreview data={weatherForecast.list[1]} />
        <ForecastPreview data={weatherForecast.list[2]} />
        <ForecastPreview data={weatherForecast.list[3]} />
        <ForecastPreview data={weatherForecast.list[4]} />
        <ForecastPreview data={weatherForecast.list[5]} />
      </div>
    );
    } else {
       const apiKey = "19f46cb6a372e938ec33a12b4f819dec";
       let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
       axios.get(url).then(handleForecastResponse);
       return null;
    }  
}