import React, { useState } from "react";
import axios from "axios";
import "./Current.css";

export default function Current() {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d9cd27eb3f86fe62cc5c47529385e41c&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  return (
    <div className="Current">
      <h1>
        The temperature in <br /> <span className="cityName">Kyiv</span> is
        <strong>
          {" "}
          {Math.round(temperature)}
          °C
        </strong>
      </h1>
    </div>
  );
}
