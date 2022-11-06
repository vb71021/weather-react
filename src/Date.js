import React from "react";
import axios from "axios";

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
  let sentense = `Today ${" "} ${date.getDate()} ${
    months[date.getMonth()]
  } ${" "} ${date.getFullYear()}`;
  let time = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div className="Current">
      <p>
        {sentense}
        <br /> {time}
      </p>
    </div>
  );
}
