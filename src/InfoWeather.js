import React from "react";

import WeatherIcon from "./WeatherIcon";
import Date from "./Date";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <Date dateInfo={props.weatherData.date} />
      <div container>
        <div className="row">
          <div className="col-sm-4">
            <h1>
              {" "}
              {props.weatherData.city}, {props.weatherData.country}
            </h1>{" "}
            <Temperature celsius={props.weatherData.temperature} />
          </div>
          <div className="col-sm-4">
            <WeatherIcon number={props.weatherData.iconNumber} size={52} />

            <p className="text-capitalize">{props.weatherData.description}</p>
          </div>

          <div className="col-sm-4">
            <ul>
              <li className="float-center">
                wind: {props.weatherData.wind} km/h
              </li>
              <li className="float-center">
                humidity: {props.weatherData.humidity} %
              </li>
            </ul>
          </div>
        </div>
        <h2>F O R E C A S T</h2>
        <Forecast coords={props.weatherData.coordinates} />
      </div>
    </div>
  );
}
