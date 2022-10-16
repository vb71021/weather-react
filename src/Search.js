import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);

  function getWeather(event) {
    event.preventDefault();

    function showWeather(response) {
      let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
      setMessage(
        <ul>
          <li>
            The temperature is {Math.round(response.data.main.temp)}°C in {city}
          </li>
          <li>
            The humidity is {response.data.main.humidity}% in {city}
          </li>
          <li>
            The wind is {Math.round(response.data.wind.speed)} km/h in {city}
          </li>
          <li>
            Description: {response.data.weather[0].description} in {city}
          </li>
          <li>
            <img src={iconUrl} alt={response.data.weather[0].description} />
          </li>
        </ul>
      );
    }
    let apiKey = "d9cd27eb3f86fe62cc5c47529385e41c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={getWeather}>
        <input
          type="search"
          className="enter_city"
          placeholder="Enter city.."
          onChange={updateCity}
        />
        <input type="Submit" className="go" value="GO" />
      </form>
      <div>{message}</div>
    </div>
  );
}
