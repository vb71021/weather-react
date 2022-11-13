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
            <ul className="float-left">
              <li className="text-capitalize">
                {props.weatherData.description}
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <ul className="float-left">
              <li>wind:{props.weatherData.wind} km/h</li>
              <li>humidity:{props.weatherData.humidity} %</li>
            </ul>
          </div>
        </div>
        <h2 className="text-secondary">FORECAST</h2>
        <Forecast coords={props.weatherData.coordinates} />
      </div>
    </div>
  );
}
