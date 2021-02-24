import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import s from "./Autocomplete.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";
import { getCity } from "../../store/citiesReducer";

// import axios from "axios";

const AutocompleteComponent = (props) => {
	// const cities = [
	// 	"London",
	// 	"Saint Petersburg",
	// 	"Liverpool",
	// 	"Amsterdam",
	// 	"Kaliningrad",
	// 	"Shymkent",
	// 	"Moscow",
	// ];

	// const check = axios
	// 	.get("https://city-list-json.herokuapp.com/cities")
	// 	.then((res) => console.log(res.data));

	// console.log(check);

	const onClickHandler = () => {
		props.getCity();
	};

	const [city, setCity] = useState("");

	const onCitySelect = (city) => {
		props.getWeather(city);
	};

	return (
		<div>
			<Autocomplete
				className={s.inputField}
				id="city-select"
				options={props.cities.map((city) => city.name)}
				onChange={(event, cityName) => {
					setCity(cityName);
					onCitySelect(cityName);
				}}
				renderInput={(params) => (
					<TextField {...params} label="Choose a city" variant="outlined" />
				)}
			/>
			<button onClick={onClickHandler}></button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	// weatherData: state.weather.weatherData,
	cities: state.cities.cities,
});

let AutocompleteContainer = connect(mapStateToProps, {
	getWeather,
	getCity,
})(AutocompleteComponent);

export default AutocompleteContainer;
