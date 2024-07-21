import React from "react";
import WeatherIconSmall from "./WeatherIconSmall";


export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        return days[day];
    }

    return (
        <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIconSmall code={props.data.condition.icon}/>
        <div className="WeatherForescast-temp">
            <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
            <span className="WeatherForecast-temp-min">{minTemperature()}</span>
        </div>
    </div>
    );
    }