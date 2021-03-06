import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import { Carousel } from "react-bootstrap";

export default function Forecast(props){
    
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
  
    function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded) {
      return (
        <Carousel indicators={false} slide={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://webgradients.com/public/webgradients_png/004%20Juicy%20Peach.png"
      alt="Tomorrow's Forecast"
    />
    <Carousel.Caption>
         <h3>Tomorrow's Forecast</h3>
                                <h2>{Math.round(forecast.list[8].main.temp)}<span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        {forecast.list[8].weather[0].description}
                                    </li>
                                    <li>
                                        ↓ {Math.round(forecast.list[8].main.temp_min)}<span className="cfunit">°C</span> | ↑ {Math.round(forecast.list[8].main.temp_max)}<span className="cfunit">°C</span>
                                    </li>
                                </ul>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://webgradients.com/public/webgradients_png/007%20Sunny%20Morning.png"
      alt="Day Two Forecast"
    />

    <Carousel.Caption>
      <h3><span className="third-day"></span>'s Forecast</h3>
                                <h2>{Math.round(forecast.list[16].main.temp)}<span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        {forecast.list[16].weather[0].description}
                                    </li>
                                    <li>
                                        ↓ {Math.round(forecast.list[16].main.temp_min)}<span className="cfunit">°C</span> | ↑ <span className="third-day-max temp">{Math.round(forecast.list[16].main.temp_max)}</span><span className="cfunit">°C</span>
                                    </li>
                                </ul>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://webgradients.com/public/webgradients_png/005%20Young%20Passion.png"
      alt="Day Three Forecast"
    />

    <Carousel.Caption>
      <h3><span className="fourth-day"></span>'s Forecast</h3>
                                <h2>{Math.round(forecast.list[24].main.temp)}<span className="cfunit">°C</span></h2>
                                <ul>
                                    <li>
                                        {forecast.list[24].weather[0].description}
                                    </li>
                                    <li>
                                        ↓ {Math.round(forecast.list[8].main.temp_min)}<span className="cfunit">°C</span> | ↑ {Math.round(forecast.list[8].main.temp_max)}<span className="cfunit">°C</span>
                                    </li>
                                </ul>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  } else {
    const apiKey = `4581002eb6d6effa90c6392584a38b4b`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.starterCity}&units=${units}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);

    return null
}
}