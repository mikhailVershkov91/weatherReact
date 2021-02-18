import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import s from "./Autocomplete.module.css";
import { connect } from "react-redux";
import { getWeather } from "../../store/weatherReducer";

const AutocompleteComponent = (props) => {
	const cities = [
		"London",
		"Saint Petersburg",
		"Liverpool",
		"Amsterdam",
		"Kaliningrad",
		"Shymkent",
		"Moscow",
	];

	const [city, setCity] = useState("");

	const onCitySelect = (city) => {
		props.getWeather(city);
		setCity({ content: null });
	};

	return (
		<Autocomplete
			className={s.inputField}
			id="city-select"
			options={cities}
			onChange={(event, cityName) => {
				setCity(cityName);
				onCitySelect(cityName);
			}}
			renderInput={(params) => (
				<TextField {...params} label="Choose a city" variant="outlined" />
			)}
		/>
	);
};

const mapStateToProps = (state) => ({
	weatherData: state.autocomplete.weatherData,
});

let AutocompleteContainer = connect(mapStateToProps, {
	getWeather,
})(AutocompleteComponent);

export default AutocompleteContainer;
