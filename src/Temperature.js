import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [units, setUnits] = useState("celsius");
  function inCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function inFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  if (units === "celsius") {
    return (
      <div className="Temperature">
        <p className="degrees">
          {props.celsius}
          <span>
            °С |
            <a href="/" className="units" onClick={inFahrenheit}>
              °F
            </a>
          </span>
        </p>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsius * 5) / 9 + 32);
    return (
      <div className="Temperature">
        <p className="degrees">
          {fahrenheitTemp}
          <span className="units">
            <a href="/" className="units" onClick={inCelsius}>
              °С{" "}
            </a>
            | °F
          </span>
        </p>
      </div>
    );
  }
}
