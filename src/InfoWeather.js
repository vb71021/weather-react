import React from "react";

import Date from "./Date";

export default function InfoWeather(props) {
  console.log(props.weatherData.date);
  return (
    <div className="InfoWeather">
      <div container>
        <div className="row">
          <div className="col-sm-6">
            <Date dateInfo={props.weatherData.date} />
            <h1> {props.weatherData.city}</h1>{" "}
            <p className="degrees">
              {props.weatherData.temperature}
              <span className="units">°С</span>
              <img
                src={props.weatherData.iconUrl}
                alt={props.weatherData.description}
              />
            </p>
          </div>

          <div className="col-sm-6">
            <ul>
              <li>wind:{props.weatherData.wind} km/h</li>
              <li>humidity:{props.weatherData.humidity} %</li>
              <li className="text-capitalize">
                {props.weatherData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
