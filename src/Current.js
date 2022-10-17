import React, { useState } from "react";
import axios from "axios";

export default function Current() {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    console.log(response);
    setTemperature(response.data.main.temp);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d9cd27eb3f86fe62cc5c47529385e41c&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  return (
    <h1>
      The temperature in <strong>Kyiv</strong> is {Math.round(temperature)}
      °C
    </h1>
  );
}
