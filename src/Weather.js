import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
    const [weatherData, setWeatherData ] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            coord: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

    function search(){
        const apiKey = "4d35189f9d83755f3692ff2d05a6adec";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..." 
                className="form-control" 
                autoFocus="on"
                onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input 
                type="submit" 
                value="Search" 
                className="btn btn-outline-warning w-100"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coord={weatherData.coord} />
        </div>
    )
    } else {
        search();
        return "Loading..."
    }
}
