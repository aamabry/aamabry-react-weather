import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
<ul>
    <li>
        <FormattedDate date={props.data.date}/>
    </li>
    <li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row">
    <div className="col-6">
        <div className="clearfix">
            <div className="temperature-container d-flex justify-content">
            <WeatherIcon code={props.data.icon} />
            </div>
            <div className="temperature">
                <WeatherTemperature celsius={props.data.temperature}/>
        </div>
        </div>
    </div>
    <div className="col-6 weather-description">
        <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h%</li>
        </ul>
    </div>
</div>
        </div>
    );
}