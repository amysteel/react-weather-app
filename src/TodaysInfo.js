import React from "react";
import "./TodaysInfo.css";

export default function TodaysInfo() {
  return (
    <div className="todaysInfo row align-items-center">
      <div className="col-6">
        <ul>
          <li>
            Today is
          </li>
          <li>Time
          </li>
          <li>
            Description:<span className="text-capitalize"></span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <ul>
          <li>
            Feels Like: <span className="cfunit fl-temp">°C</span>
          </li>
          <li>
            Humidity: %
          </li>
          <li>
            Wind Speed: km/h
          </li>
        </ul>
      </div>
    </div>
  );
}