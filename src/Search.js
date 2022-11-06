import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import InfoWeather from "./InfoWeather";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeatherData(response) {
    console.log(response.data.name);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconNumber: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
  }
  function showWeather(event) {
    event.preventDefault();
    searchStart(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchStart() {
    let apiKey = "d9cd27eb3f86fe62cc5c47529385e41c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getWeatherData);
  }
  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={showWeather}>
          <input
            type="search"
            className="enter_city"
            placeholder="Enter city.."
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="Submit" className="go" value="GO" />
        </form>
        <InfoWeather weatherData={weather} />
      </div>
    );
  } else {
    searchStart(city);
    return "loading...";
  }
}
