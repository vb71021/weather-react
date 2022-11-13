import React, { useState } from "react";

import "./Forecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function getForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastOneDay oneDayForecast={forecastData[0]} />
          </div>
          <div className="col">
            <ForecastOneDay oneDayForecast={forecastData[1]} />
          </div>
          <div className="col">
            <ForecastOneDay oneDayForecast={forecastData[2]} />
          </div>
          <div className="col">
            <ForecastOneDay oneDayForecast={forecastData[3]} />
          </div>
          <div className="col">
            <ForecastOneDay oneDayForecast={forecastData[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "d9cd27eb3f86fe62cc5c47529385e41c";
    let lat = props.coords.lat;
    let lon = props.coords.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
    return null;
  }
}
