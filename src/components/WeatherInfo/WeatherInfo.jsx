import React from "react";
import s from "./WeatherInfo.module.css";
import snowy from "../../assets/snowy.png";
import clearSky from "../../assets/sunny.png";
import rainy from "../../assets/rainy.png";
import cloudy from "../../assets/cloudy.png";
import foggy from "../../assets/foggy.png";

const WeatherInfo = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.cityImage}>
				<div>
					{props.weatherData.weather[0].main == "Clear" && (
						<img src={clearSky} alt="clear sky" />
					)}
					{props.weatherData.weather[0].main == "Snow" && (
						<img src={snowy} alt="snowy" />
					)}
					{props.weatherData.weather[0].main == "Rain" && (
						<img src={rainy} alt="rainy" />
					)}
					{props.weatherData.weather[0].main == "Clouds" && (
						<img src={cloudy} alt="cloudy" />
					)}
					{props.weatherData.weather[0].main == "Fog" && (
						<img src={foggy} alt="foggy" />
					)}
				</div>
				<div>
					<span>{props.weatherData.name}</span>
				</div>
			</div>

			<div className={s.icons}>
				<div className={s.row1}>
					<div>
						<span>Temperature</span>
						<span>{Math.round(props.weatherData.main.temp - 273)}&deg;C</span>
					</div>
					<div>
						<span>Feels like</span>
						<span>
							{Math.round(props.weatherData.main.feels_like - 273)}&deg;C
						</span>
					</div>
					<div>
						<span>Humidity</span>
						<span>{props.weatherData.main.humidity}%</span>
					</div>
				</div>
				<div className={s.row2}>
					<div>
						<span>Wind speed</span>
						<span>{props.weatherData.wind.speed} m/s</span>
					</div>
					<div>
						<span>Clouds</span>
						<span>{props.weatherData.clouds.all}%</span>
					</div>
					<div>
						<span>Pressure</span>
						<span>{props.weatherData.main.pressure} mmHg</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
