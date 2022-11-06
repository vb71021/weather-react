import React from "react";

export default function InfoWeather(props) {
  return (
    <div className="InfoWeather">
      <div container>
        <div className="row">
          <div className="col-sm-6">
            <h3>01.01.2020 00:00</h3>
            <h1>In {props.cityName}</h1>{" "}
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
              <li></li>
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
