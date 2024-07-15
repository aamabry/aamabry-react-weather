import React from "react";
import WeatherIconSmall from "./WeatherIconSmall";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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