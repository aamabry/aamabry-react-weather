import React from "react";
import WeatherIconSmall from "./WeatherIconSmall";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day(){
        let date = new Date();
        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thur",
            "Fri",
            "Sat"
        ];

        return days[day];
    }

    return (
        <div>
        <div className="WeatherForecast-day">{props.data.dt}</div>
        <WeatherIconSmall />
        <div className="WeatherForescast-temp">
            <span className="WeatherForecast-temp-max">{maxTemperature}°</span>
            <span className="WeatherForecast-temp-min">{minTemperature}17°</span>
        </div>
    </div>
    );
    }