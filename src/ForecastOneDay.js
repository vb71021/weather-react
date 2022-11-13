import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastOneDay(props) {
  function day() {
    let date = new Date(props.oneDayForecast.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="ForecastOneDay">
      <div className="col">
        <div className="forecastDay">{day()}</div>{" "}
        <WeatherIcon number={props.oneDayForecast.weather[0].icon} size={32} />
        <div className="forecastTemp">
          <div className="forecastTempMax">
            Max {Math.round(props.oneDayForecast.temp.max)}°С
          </div>
          <div className="forecastTempMin">
            {" "}
            Min {Math.round(props.oneDayForecast.temp.min)} °С
          </div>
        </div>
      </div>
    </div>
  );
}
