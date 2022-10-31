import React, { useState } from "react";
import axios from "axios";

export default function Current() {
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);
  const [ready, setReady] = useState(false);
  const [date, setDate] = useState(null);
  let cityname = "Kyiv";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=d9cd27eb3f86fe62cc5c47529385e41c&units=metric`;

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setIcon(response.data.weather[0].icon);
    setReady(true);
    setDate(new Date(response.data.dt * 1000));
    console.log(date);
  }
  if (ready) {
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let sentense = `Today ${" "} ${date.getDate()} ${
      months[date.getMonth()]
    } ${" "} ${date.getFullYear()}`;
    let time = `${date.getHours()}:${date.getMinutes()}`;
    return (
      <div className="Current">
        <p>
          {sentense}
          <br /> {time}
        </p>
        <h1>
          in <span className="City">{cityname}</span> is{" "}
          {Math.round(temperature)} °C
        </h1>
        <img src={iconUrl} alt="weather" />
      </div>
    );
  } else {
    axios.get(apiUrl).then(showTemperature);
    return "Load";
  }
}
