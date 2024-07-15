import React from "react";
import WeatherIconSmall from "./WeatherIconSmall";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);        
    }

    let apiKey = "1b509431b344bbaa8c5fo44ef08bca6t";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thur</div>
                    <WeatherIconSmall code="11d"/>
                    <div className="WeatherForescast-temp">
                        <span className="WeatherForecast-temp-max">19°</span>
                        <span className="WeatherForecast-temp-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}