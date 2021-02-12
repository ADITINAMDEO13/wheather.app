
import React from 'react';
import './style.css';

const CityWheather = (weather) => {
    
    return (
        <div>
            <div className="box">
                <div> <span>City Name </span> =  {weather.weather.name} </div>
                <div> <span>Wind Speed </span> = {weather.weather.wind.speed}  </div>
                <div> <span>humidity </span> = {weather.weather.main.humidity}</div>
                <div> <span>Temprature </span> = { Math.floor(weather.weather.main.temp -273.15)} <sup>o</sup> C </div>
                <div> <span>Max-Temprature </span> = { Math.floor(weather.weather.main.temp_max -273.15)} <sup>o</sup> C </div>
                <div> <span>Min-Temprature </span> = { Math.floor(weather.weather.main.temp_min -273.15)} <sup>o</sup> C </div>
            </div>
        </div>
    );
};

export default CityWheather;