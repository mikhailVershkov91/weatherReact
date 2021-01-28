import React from "react";

const WeatherInfo = (props) => {
	return (
		<div>
			<div>
				<span>The temperature is {props.weatherData.main.temp}</span>
			</div>
			<div>
				<span>The wind speed is {props.weatherData.wind.speed}</span>
			</div>
			<div>
				<span>The humidity is {props.weatherData.main.humidity}</span>
			</div>
			<div>
				<span>The country is {props.weatherData.sys.country}</span>
			</div>
			<div>
				<span>The weather is {props.weatherData.weather[0].main}</span>
			</div>
		</div>
	);
};

export default WeatherInfo;
