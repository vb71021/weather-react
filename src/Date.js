import React from "react";

export default function Date(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];
  let hours = props.dateInfo.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.dateInfo.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Date">
      <ul>
        <li className="fw-bold">
          {props.dateInfo.getDate()} {months[props.dateInfo.getMonth()]}{" "}
          {props.dateInfo.getFullYear()}
        </li>
        <li>
          {days[props.dateInfo.getDay()]} {hours}
          {":"}
          {minutes}
        </li>
      </ul>
    </div>
  );
}
