import React, { useState, useEffect } from "react";

import "./Forecast.css";
import axios from "axios";
import ForecastOneDay from "./ForecastOneDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function getForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row ">
            {forecastData.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-sm-3  column" key={index}>
                    <ForecastOneDay oneDayForecast={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
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
